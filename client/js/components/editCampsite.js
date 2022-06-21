// const { default: axios } = require("axios");

function editCampsite(campId) {
    // display edit form
    const mainContainer = document.getElementById('page')
    mainContainer.classList.remove('render-single-campsite');

    axios
    .get(`/api/campsite/${campId}`)
    .then((response) => {
        let currentTitle = response.data[0]['title']
        let currentStreet = response.data[0]['street']
        let currentState = response.data[0]['state'] 
        console.log(currentTitle + currentStreet + currentState)

        let stateObject = {}
        stateObject[currentState] = 'selected'
        console.log(stateObject)

        axios
        .get(`/api/types/${campId}`)
        .then((response) => {
            console.log("types results")
            let typesResponse = (response['data'][0])
            // loop through object to find true/false - where true update checked box
            // set an empty object and keep assigning pairs - to be used in the form
            let typesObject = {}
            for (item in typesResponse) {
                console.log(typesResponse[item])
                if (typesResponse[item] == true) {
                    // need the variable to be called 'item + Checked' eg glampingChecked
                    // need value to be 'checked'
                    typesObject[item] = 'checked'
                    console.log(typesObject[item])
                    // add else option
                } else {
                    typesObject[item] = 'unchecked'
                    console.log(typesObject[item])
                }
            }
            console.log(typesObject)
            console.log(typesObject['park'])


            axios
            .get(`/api/amenities/${campId}`)
            .then((response) => {
                console.log("amenities results")
                let amenitiesResults = (response['data'][0])
                // loop through object to find true/false - where true update checked box
                // set an empty object and keep assigning pairs - to be used in the form
                let amenitiesObject = {}
                for (amenity in amenitiesResults) {
                    console.log(amenitiesResults[amenity])
                    if (amenitiesResults[amenity] == true) {
                        // need the variable to be called 'item + Checked' eg glampingChecked
                        // need value to be 'checked'
                        amenitiesObject[amenity] = 'checked'
                        console.log(amenitiesObject[amenity])
                        // add else option
                    } else {
                        amenitiesObject[amenity] = 'unchecked'
                        console.log(amenitiesObject[amenity])
                    }
                }
                console.log(amenitiesObject)
                console.log(amenitiesObject['electricity'])

            //to append to body
            const page = document.getElementById("page");
            page.innerHTML = "";
            //create page content
            const heading = document.createElement('h2');
            heading.textContent = "edit this campsite";
            const addform = document.createElement("form");
            addform.setAttribute('id', 'addCampForm');

            addform.innerHTML = `
                <div class="site-address">
                <p><label for="title">Campsite Title:</label>
                <input type="text" name="title" value="${currentTitle}"</p>
                <p><label for="address">Address:</label>
                <input type="text" name="address" value="${currentStreet}"</p>
                <p><label for="state">State:</label>
                <select name="state">
                    <option selected="true" disabled="disabled">SELECT</option>
                    <option value="ACT ${stateObject['ACT']}>ACT</option>
                    <option value="NSW" ${stateObject['NSW']}>NSW</option>
                    <option value="NT" ${stateObject['NT']}>NT</option>
                    <option value="QLD" ${stateObject['QLD']}">QLD</option>
                    <option value="SA" ${stateObject['SA']}>SA</option>
                    <option value="TAS" ${stateObject['TAS']}>TAS</option>
                    <option value="VIC" ${stateObject['VIC']}>VIC</option>
                    <option value="WA" ${stateObject['WA']}>WA</option>
                    </select></p></div>
                <div class="campsite-type">    
                <p><h4>campsite type</h4></p>
                <p><input type="checkbox" id="glamping" name="glamping" value="glamping" ${typesObject['glamping']}>
                <label for="glamping"> Glamping</p>
                <p><input type="checkbox" id="tent" name="tent" value="tent" ${typesObject['tent']}>
                <label for="tent"> Tent Camping</p>
                <p><input type="checkbox" id="park" name="park" value="park" ${typesObject['park']}>
                <label for="park"> National Park</p>
                <p><input type="checkbox" id="caravan" name="caravan" value="caravan" ${typesObject['caravan']}>
                <label for="caravan"> Caravan Park</p>
                <p><input type="checkbox" id="cabin" name="cabin" value="cabin" ${typesObject['cabin']}>
                <label for="cabin"> Cabin</p>
                <p><input type="checkbox" id="farm" name="farm" value="farm" ${typesObject['farm']}>
                <label for="farm"> Farmland</p>
                <p><input type="checkbox" id="lake" name="lake" value="lake" ${typesObject['lake']}>
                <label for="lake"> Lake</p>
                <p><input type="checkbox" id="beach" name="beach" value="beach" ${typesObject['beach']}>
                <label for="beach"> Beach</p></div>
                <div class="campsite-amenities">
                <p><h4>camp amenities</h4></p>
                <p><input type="checkbox" id="showers" name="showers" value="showers" ${amenitiesObject['showers']}>
                <label for="showers"> Showers</p>
                <p><input type="checkbox" id="toilets" name="toilets" value="toilets" ${amenitiesObject['toilets']}>
                <label for="toilets"> Toilets</p>
                <p><input type="checkbox" id="bbq" name="bbq" value="bbq" ${amenitiesObject['bbq']}>
                <label for="bbq"> Barbecues</p>
                <p><input type="checkbox" id="water" name="water" value="water" ${amenitiesObject['water']}>
                <label for="water"> Running Water</p>
                <p><input type="checkbox" id="electricity" name="electricity" value="electricity" ${amenitiesObject['electricity']}>
                <label for="electricity"> Electricity</p>
                <p><input type="checkbox" id="kayak" name="kayak" value="kayak" ${amenitiesObject['kayak']}>
                <label for="kayak"> Kayak Hire</p></div>
                <div class="submit-btn">
                <button>make changes</button></div>
            `;

            page.replaceChildren(heading, addform);

            addform.addEventListener('submit', event => {
                event.preventDefault()

            const formData = new FormData(addform)

            const data = {
                id: campId,
                title: formData.get("title"),
                street: formData.get("address"),
                state: formData.get("state"),
                glamping: formData.get("glamping"),
                tent: formData.get("tent"),
                park: formData.get("park"),
                caravan: formData.get("caravan"),
                cabin: formData.get("cabin"),
                farm: formData.get("farm"),
                lake: formData.get("lake"),
                beach: formData.get("beach"),
                showers: formData.get("showers"),
                toilets: formData.get("toilets"),
                bbq: formData.get("bbq"),
                water: formData.get("water"),
                electricity: formData.get("electricity"),
                kayak: formData.get("kayak"),
            }
            //checks whether the checkbox is ticked and assigns boolean value accordingly
            for (item in data) {
                if (item == 'id' || item == 'title' || item == 'street' || item == 'state') {
                    continue
                }
                if (data[item] == null) {
                    data[item] = false
                } else {
                    data[item] = true
                }
            }
            console.log(data.id + data.title + data.street + data.state)
            axios
            .put('/api/editCampsite', data)
            .then((response) => {
                renderSingleCampsite(campId)
            })
            .catch((err) => {
                if (err.response.status == 400) {
                    let errorMessage = document.createElement('h3');
                    errorMessage.textContent = err.response.data.message;
                    page.appendChild(errorMessage)
                    console.log(errorMessage)
                } else { 
                    let errorMes = document.createElement('h3');
                    errorMes.textContent = "unknown error occured";
                    page.appendChild(errorMes)
                    console.log(errorMes)
                }
                console.log(data)  
            })
        })  
        })
        .catch((err) => {
            console.log("error")
        })
    })})}
