// Amanda add Campsite Page
function renderAddCampsite() {
    
    const addCampButton = document.getElementById('addSiteButton');
    addCampButton.addEventListener("click", renderCampForm)
}

function renderCampForm() {
    //to append to body
    const page = document.getElementById("page");
    page.innerHTML="";
    //create heading and page content
    const heading = document.createElement('h2');
    heading.textContent = "Add a New Campsite";

    const addform = document.createElement("form");
    addform.setAttribute('id', 'addCampForm');

    const upload_widget = document.createElement("button");
    upload_widget.setAttribute('id', 'upload_widget');
    upload_widget.setAttribute('class', 'cloudinary-button');
    upload_widget.textContent = "Upload Campsite Photo";
    page.replaceChildren(heading, upload_widget);
    let img_url = "";

//cloudinary widget
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'campanion', 
        uploadPreset: 'campanion',
        sources: ['local', 'url']
        }, (error, result) => { 
            if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            img_url = result.info.secure_url;
            }
        }
        ) 

    document.getElementById("upload_widget").addEventListener("click", function(){
            myWidget.open();
        }, false);
        console.log(img_url)
        
//user input form
    addform.innerHTML = `
        <div class="site-address">
        <p><label for="title">Campsite Title:</label>
        <input type="text" name="title"</p>
        <p><label for="address">Address:</label>
        <input type="text" name="address"</p>
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
        <p><h4>Type of Campsite</h4></p>
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
        <p><h4>Amenities</h4></p>
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
        <button>Submit</button></div>
    `;

    page.replaceChildren(heading, upload_widget, addform);

    addform.addEventListener('submit', event => {
        event.preventDefault()

    const formData = new FormData(addform)
    formData.append(upload_widget, img_url);
        console.log(img_url)
    const data = {
        title: formData.get("title"),
        address: formData.get("address"),
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
        image: img_url     
    }
    //checks whether the checkbox is ticked and assigns boolean value accordingly
    for (item in data) {
        if (item == 'title' || item == 'address' || item == 'state' || item == 'image') {
            continue
        }
        if (data[item] == null) {
            data[item] = false
        } else {
            data[item] = true
        }
    }

    axios.post('/api/addcampsite', data).then((response) => {
        renderSingleCampsite(response.data.newid)

        }).catch((err) => {
            if (err.response.status == 400) {
                let errorMessage = document.createElement('h3');
                errorMessage.textContent = err.response.data.message;
                page.appendChild(errorMessage)
                console.log(errorMessage)
                
        } else { 
            let errorMes = document.createElement('h3');
            errorMes.textContent = "an unknown error occured";
            page.appendChild(errorMes)
            console.log(errorMes)
        }console.log(data)  
        })
    })  
}

