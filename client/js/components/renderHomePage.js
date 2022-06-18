// Will - homepage (with search/filter etc)

// Search Bar
function renderHomePage() {
    const docBody = document.getElementById('page');
    docBody.innerHTML = ""

    // container for search
    const searchContainer = document.createElement('div')
        searchContainer.setAttribute('id', 'searchCont')
    const resultsContainer = document.createElement('div')
        resultsContainer.setAttribute('id', 'resultCont')
    const form = document.createElement('form')

    const searchBar = document.createElement('input');
        searchBar.setAttribute('type', 'text')
        searchBar.setAttribute('name', 'search')
        searchBar.setAttribute('placeholder', 'Search campsites...')
    
    // Search by type Make this a dropdown
        // add check boxes

    // Search by state Make this a dropdown
    const stateDropDown = document.createElement('select');
        stateDropDown.setAttribute('id', 'stateSelector');
    const stateVic = document.createElement('option');
        stateVic.setAttribute('value', 'VIC')
        stateVic.innerText = 'VIC'
    const stateTas = document.createElement('option');
        stateTas.setAttribute('value', 'TAS')
        stateTas.innerText = 'TAS'
    const stateWa = document.createElement('option');
        stateWa.setAttribute('value', 'WA')
        stateWa.innerText = 'WA'
    const stateNt = document.createElement('option');
        stateNt.setAttribute('value', 'NT')
        stateNt.innerText = 'NT'
    const stateAct = document.createElement('option');
        stateAct.setAttribute('value', 'ACT')
        stateAct.innerText = 'ACT'
    const stateSa = document.createElement('option');
        stateSa.setAttribute('value', 'SA')
        stateSa.innerText = 'SA'
    const stateNsw = document.createElement('option');
        stateNsw.setAttribute('value', 'NSW')
        stateNsw.innerText = 'NSW'
    const stateQld = document.createElement('option');
        stateQld.setAttribute('value', 'QLD')
        stateQld.innerText = 'QLD'
    stateDropDown.append(stateAct,stateNsw,stateNt,stateQld,stateSa,stateTas,stateVic,stateWa)

    const searchButton = document.createElement('button')
    searchButton.innerHTML = 'Search'
    searchButton.setAttribute('type', 'submit')

    form.addEventListener('submit', event => {
        event.preventDefault() //stop it adding get parameters to url
        const formData = new FormData(form) // render form data into object
        console.log(formData)
        const data = {
            query: formData.get("search"),
            state: stateDropDown.value
        }

        // Retrieve search results from server
        // Improvement is to use parameters such as state to narrow down the get request (pull only results that have that attribute)
        axios.post('/api/campsite', data) // get data from campsites database
            .then(response => {
                console.log(response.data) // currently pulls all results
                renderHeader()

                // delete default searches
                const defaults = document.querySelectorAll('.container')
                defaults.forEach(element => {
                    element.remove();
                })

                // Create search results
                const results = document.getElementById('resultCont')

                // empty previous search results
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
    })

    form.append(searchBar, stateDropDown, searchButton);
    searchContainer.append(form)
    docBody.append(searchContainer, resultsContainer)

    // Default Searches
    defaultSearches('Beachside Camping', 'https://holidayswithkids.com.au/wp-content/uploads/2021/01/shutterstock_436762138-1.jpg', 'VIC')
    defaultSearches('Farm Camping', 'https://vermontexplored.com/wp-content/uploads/2021/03/tentrr-camping-vermont.jpg.webp', 'NSW')
}
// Predetermined searchs (image with text below) clicking this will do a get-request search of 
// that topic in the user's postcode?