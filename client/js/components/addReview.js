function renderAllCampsitesAZ() {
    clearChildren()
    const mainContainer = document.getElementById('page')
    // list all campsites a-z with summary info and add review button
    axios
    .get(`/api/campsites/`)
    .then(res => {
        const allCampsitesResult = res.data
        console.log(allCampsitesResult)
        for (campsite in allCampsitesResult) {
            let newDiv = document.createElement('div')
            newDiv.classList.add('multiple-results-summary-box')
            let campName = document.createElement('h2')
            campName.innerHTML = allCampsitesResult[campsite]['title']
            mainContainer.appendChild(newDiv)
            newDiv.appendChild(campName)
        
            let button = document.createElement('button')
            button.innerHTML = "add a review"
            button.setAttribute('class', 'add-review-button')
            // pass through ID and campTitle
            button.setAttribute('id', allCampsitesResult[campsite]['campsiteid'])
            button.addEventListener('click', (element) => {
                let campId = element.target.id
                console.log("campId is: " + campId)
                clearChildren()
                addReview(campId)
            })
            newDiv.appendChild(button)
        }
    })
    .catch((error) => {
        alert("something went wrong, please try again!");
        console.log("the error was: " + error)
    })
}

function addReview(campId) {
    clearChildren()
    const mainContainer = document.getElementById('page')
    mainContainer.classList.remove('render-single-campsite');

    // need to get ID from button, then CampTitle
    const heading = document.createElement('h2')
    heading.innerHTML = ("leave a review")
    const form = document.createElement('form')
    mainContainer.appendChild(heading)
    mainContainer.appendChild(form)
    // edit form to pass through IDs for each thing
    // future - get some openmojis in here for star rating
    form.innerHTML = `
        <p><label for="date">when did you visit?</label>
        <input type="date" name="date"</p>
        <p><label for="rating">&#x2B50 rating (1-5)</label>
        <input type="number" name="rating" min="1" max="5"</p>
        <p><label for="description">your review</label>
        <p><input type="textarea" id="description" name="description" placeholder="description">
        <button>Submit</button>
    `
    const textBox = document.getElementById('description')
    textBox.style.width="500px";
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let formData = new FormData(form)
        let date = formData.get('date')
        let description = formData.get('description')
        let rating = formData.get('rating')
        let id = campId
        axios
        .post('/api/reviews', {
            campsiteid: id,
            rating: rating,
            description: description,
            date: date
        })
        .then(response => {
            renderSingleCampsite(campId)
        })
        .catch((error) => {
            alert("something went wrong, please try again!");
            console.log("the error was: " + error)
        })
    })
}