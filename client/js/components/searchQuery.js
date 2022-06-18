// Add default searches

function searchQuery(searchQuery, searchState) {

    const docBody = document.getElementById('page');
    docBody.innerHTML = ""

    renderHomePage();
    const defaults = document.querySelectorAll('.container')
    defaults.forEach(element => {
        element.remove();
    })
   
    const data = {
        query: searchQuery,
        state: searchState
    }

    axios.post('/api/campsite', data) // get data from campsites database
    .then(response => {
        console.log(response.data) // currently pulls all results
        renderHeader()

        // empty previous search results
        const results = document.getElementById('resultCont')
        results.innerHTML = ""

        // check if there are any results
        if (response.data.length == 0) {
            results.innerHTML = `<h2>No Results Found</h2>`
        } else {
            const resultHeader = document.createElement('div');
                resultHeader.setAttribute('class', 'resultCont')

            const image = document.createElement('h3');
                image.innerText = 'Photos'
            const title = document.createElement('h3');
                title.innerText = 'Description'
            const location = document.createElement('h3');
                location.innerText = 'Address'
            const types = document.createElement('h3');
                types.innerText = 'Campsite Type'

            resultHeader.append(image, title, location, types)
            results.append(resultHeader)

        for (result of response.data) { //result is the campsite
            const resultCont = document.createElement('div');
                resultCont.setAttribute('class', 'resultCont')
            const image = document.createElement('img');
                image.src = result.img;
                image.setAttribute('class', 'resultImage')
            const title = document.createElement('h3');
                title.innerText = result.title;
            const location = document.createElement('p');
                location.innerText = result.street + " " + result.state
            const types = document.createElement('p');
                for (type in result) {
                    console.log(type)
                    if (result[type] == true && type != 'campsiteid') {
                        types.innerText += type + " ";
                    }
                }


            // put all result elements in a container
            resultCont.append(image,title,location,types)
            results.append(resultCont)
        }
    }
    }).catch((err) => {
        console.log(err)
        console.log(err.response)
        if (err.response.status === 400) {
            const reason = err.response.data.message
            alert(reason)
        } else {
            alert('Unknown Error Occured')
        }
    })

    // docBody.append(searchContainer, resultsContainer)
}
