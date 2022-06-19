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
    const campType = document.createElement('div')
        campType.setAttribute('id', 'typeSelections')
        campType.innerHTML = `
        <p><input type="checkbox" id="glamping" name="glamping" value="glamping">
        <label for="glamping"> Glamping</p>
        <p><input type="checkbox" id="tent" name="tent" value="tent">
        <label for="tent"> Tent Camping</p>
        <p><input type="checkbox" id="park" name="park" value="park">
        <label for="park"> National Park</p>
        <p><input type="checkbox" id="caravan" name="caravan" value="caravan">
        <label for="caravan"> Caravan Park</p>
        <p><input type="checkbox" id="cabin" name="cabin" value="cabin">
        <label for="cabin"> Cabin</p>
        <p><input type="checkbox" id="farm" name="farm" value="farm">
        <label for="farm"> Farmland</p>
        <p><input type="checkbox" id="lake" name="lake" value="lake">
        <label for="lake"> Lake</p>
        <p><input type="checkbox" id="beach" name="beach" value="beach">
        <label for="beach"> Beach</p>
        `

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
            state: stateDropDown.value,
            glamping: formData.get("glamping"),
            tent: formData.get("tent"),
            park: formData.get("park"),
            caravan: formData.get("caravan"),
            cabin: formData.get("cabin"),
            farm: formData.get("farm"),
            lake: formData.get("lake"),
            beach: formData.get("beach"),
        }

        //checks whether the checkbox is ticked and assigns boolean value accordingly
        for (item in data) {
            if (item == 'query' || item == 'state') {
                continue
            }
            if (data[item] == null) {
                data[item] = false
            } else {
                data[item] = true
            }
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

    form.append(searchBar, stateDropDown, searchButton, campType);
    searchContainer.append(form)
    docBody.append(searchContainer, resultsContainer)

    // Default Searches
    defaultSearches('Beachside Camping', 'https://holidayswithkids.com.au/wp-content/uploads/2021/01/shutterstock_436762138-1.jpg', 'VIC', false, false, false, false, false, false, false, true)
    defaultSearches('Farm Camping', 'https://vermontexplored.com/wp-content/uploads/2021/03/tentrr-camping-vermont.jpg.webp', 'NSW', false, false, false, false, false, true, false, false)
}
// Predetermined searchs (image with text below) clicking this will do a get-request search of 
// that topic in the user's postcode?