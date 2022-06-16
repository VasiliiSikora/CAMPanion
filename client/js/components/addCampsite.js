//Amanda add Campsite Page
function renderAddCampsite() {
    const addCampButton = document.getElementById('addSiteButton');
    addCampButton.addEventListener("click", renderCampForm)
}

function renderCampForm() {
    //to append to body
    const page = document.getElementById("page");
    //create page content
    const heading = document.createElement('h2');
    heading.textContent = "Add a New Campsite";
    const addform = document.createElement("form");
    addform.setAttribute('id', 'addCampForm');

    addform.innerHTML = `
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
            </select></p>
        <p><h4>Type of Campsite</h4></p>
        <p><input type="checkbox" id="glamping" name="glamping" value="glamping">
        <label for="glamping"> Glamping</p>
        <p><input type="checkbox" id="tent" name="tent" value="glamping">
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
        <label for="kayak"> Kayak Hire</p>
        <button>Submit</button>
    `;

    page.replaceChildren(heading, addform);



}