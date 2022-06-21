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
            <input type="text" name="title" value=${currentTitle}</p>
            <p><label for="address">Address:</label>
            <input type="text" name="address" value=${currentStreet}</p>
            <p><label for="state">State:</label>
            <select name="state">
                <option selected="true" disabled="disabled">SELECT</option>
                <option value="ACT">ACT</option>
                <option value="NSW">NSW</option>
                <option value="NT">NT</option>
                <option value="QLD">QLD</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="VIC">VIC</option>
                <option value="WA">WA</option>
                </select></p></div>
            <div class="campsite-type">    
            <p><h4>campsite type</h4></p>
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
            <label for="beach"> Beach</p></div>
            <div class="campsite-amenities">
            <p><h4>camp amenities</h4></p>
            <p><input type="checkbox" id="showers" name="showers" value="showers">
            <label for="showers"> Showers</p>
            <p><input type="checkbox" id="toilets" name="toilets" value="toilets">
            <label for="toilets"> Toilets</p>
            <p><input type="checkbox" id="bbq" name="bbq" value="bbq">
            <label for="bbq"> Barbecues</p>
            <p><input type="checkbox" id="water" name="water" value="water">
            <label for="water"> Running Water</p>
            <p><input type="checkbox" id="electricity" name="electricity" value="electricity">
            <label for="electricity"> Electricity</p>
            <p><input type="checkbox" id="kayak" name="kayak" value="kayak">
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
}

function deleteCampsiteRequest(campId) {
    const mainContainer = document.getElementById('page')
    mainContainer.classList.remove('render-single-campsite');
    clearChildren()
    let confirmDelete = document.createElement('p')
    confirmDelete.innerHTML = 'are you sure you want to delete this campsite?'
    mainContainer.appendChild(confirmDelete)

    const confirmDeleteButton = document.createElement('button')
    confirmDeleteButton.setAttribute('class', 'yes-button')
    confirmDeleteButton.innerHTML = "yes"
    confirmDeleteButton.addEventListener('click', function() {
        deleteCampsiteConfirm(campId)
    })
    mainContainer.appendChild(confirmDeleteButton)
}

function deleteCampsiteConfirm(campId) {
    console.log('will delete!')
    axios
    .delete(`/api/deleteCampsite/${campId}`)
    .then((response) => {
        renderAllCampsitesAZ()
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
    })
}