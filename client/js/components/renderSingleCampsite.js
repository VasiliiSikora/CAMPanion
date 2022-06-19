const mainContainer = document.getElementById('page')
// for indidividual results page - main info - camp id/address right now

// need central clearChildren or alternate
function clearChildren() {
    const mainContainer = document.getElementById('page')
    mainContainer.innerHTML = ""
}

// function createAndAppendWithAttribute(childType, appendTo, attribute, attributeName) {
//     const child = document.createElement(childType)
//     child.setAttribute(attribute, attributeName)
//     appendTo.appendChild(child)
// }

function renderSingleCampsite(campId) {
    const mainContainer = document.getElementById('page')
    // create divs and set classes, append to main page before calls begin/come in staggered
    clearChildren()
    // others will have to clear this attribute when they render new 'pages' - this sets the css grid
    mainContainer.setAttribute('class', 'render-single-campsite')
    const singleCampsiteHeading = document.createElement('div')
    singleCampsiteHeading.setAttribute('id', 'single-campsite-heading')
    mainContainer.appendChild(singleCampsiteHeading)
    // createAndAppendWithAttribute('div', mainContainer, 'id', 'single-campsite-heading')

    const singleCampsiteImage = document.createElement('div')
    singleCampsiteImage.setAttribute('id', 'single-campsite-image')
    mainContainer.appendChild(singleCampsiteImage)
    const singleCampsiteTypes = document.createElement('div')
    singleCampsiteTypes.setAttribute('id', 'single-campsite-types')
    mainContainer.appendChild(singleCampsiteTypes)

    const singleCampsiteAmenities = document.createElement('div')
    singleCampsiteAmenities.setAttribute('id', 'single-campsite-amenities')
    mainContainer.appendChild(singleCampsiteAmenities)

    const singleCampsiteReviews = document.createElement('div')
    singleCampsiteReviews.setAttribute('id', 'single-campsite-reviews')
    mainContainer.appendChild(singleCampsiteReviews)


    axios
    .get(`/api/campsite/${campId}`)
    .then(res => {
        // whilst calling, show something nice - a camp themed loading message
        // if no results - show an error message
        const campsiteResult = res.data
        const campTitle = document.createElement('h1')
        campTitle.innerHTML = campsiteResult[0]['title']
        singleCampsiteHeading.appendChild(campTitle)
        const campAddress = document.createElement('h2')
        campAddress.innerHTML = campsiteResult[0]['street'].concat(", ").concat(campsiteResult[0]['state'])
        singleCampsiteHeading.appendChild(campAddress)
        const campImg = document.createElement('img')
        campImg.classList.add('individual-result-pic')
        dbImgSrc = campsiteResult[0]['img']
        campImg.src = dbImgSrc
        singleCampsiteImage.appendChild(campImg)
    })
    .catch((error) => {
        const errorMessage = document.createElement('p')
        errorMessage.innerHTML = error.response.data.message;
        mainContainer.appendChild(errorMessage)
    })

    axios
    .get(`/api/types/${campId}`)
    .then(res => {
        const typesResults = res.data
        const typesTitle = document.createElement('h3')
        typesTitle.innerHTML = "campsite type"
        singleCampsiteTypes.appendChild(typesTitle)
        // creates a list of all types listed for that camp
        const typesUl = document.createElement('ul')
        typesUl.classList.add('types-ul')
        singleCampsiteTypes.appendChild(typesUl)
        for (type in typesResults[0]) {
            if((type != 'campsiteid') && typesResults[0][type]) {
                console.log("type: " + type)
                let typesLi = document.createElement('li')
                typesLi.innerHTML = type
                typesUl.appendChild(typesLi)
            }
        }
    })
    .catch((error) => {
        const errorMessage = document.createElement('p')
        errorMessage.innerHTML = error.response.data.message;
        mainContainer.appendChild(errorMessage)
    })
    
    axios
    .get(`/api/amenities/${campId}`)
    .then(res => {
        const amenitiesResults = res.data
        const amenitiesTitle = document.createElement('h3')
        amenitiesTitle.innerHTML = "campsite amenities"
        // creates a list of all amenities listed for that camp
        singleCampsiteAmenities.appendChild(amenitiesTitle)
        const amenitiesUl = document.createElement('ul')
        amenitiesUl.classList.add('amenities-ul')
        singleCampsiteAmenities.appendChild(amenitiesUl)
        for (amenity in amenitiesResults[0]) {
            if((amenity != 'campsiteid') && amenitiesResults[0][amenity]) {
                let amenitiesLi = document.createElement('li')
                amenitiesLi.innerHTML = amenity
                amenitiesUl.appendChild(amenitiesLi)
            }
        }
    })
    .catch((error) => {
        const errorMessage = document.createElement('p')
        errorMessage.innerHTML = error.response.data.message;
        mainContainer.appendChild(errorMessage)
    })

    axios
    .get(`/api/reviews/${campId}`)
    .then(res => {
        const reviewsResults = res.data
        const reviewsTitle = document.createElement('h3')
        reviewsTitle.innerHTML = "campsite reviews"
        singleCampsiteReviews.appendChild(reviewsTitle)
        // for each review, create a Ul, list details as Li
        for(let i = 0; i < reviewsResults.length; i++) {
            let reviewUl = document.createElement('ul')
            reviewUl.setAttribute('class', 'review-ul')
            let reviewRating = document.createElement('li')
            // let starRating = reviewsResults[i]['rating']
            // let content = (starRating * ⭐)
            // for(let j = 0; j < reviewsResults[i]['rating']; j++) {
            //     let starRatingText = starRatingText.concat('⭐')
            // }
            reviewRating.innerHTML = 'trying to get cute stars to appear'
            let reviewDesc = document.createElement('li')
            reviewDesc.innerHTML = reviewsResults[i]['description']
            let reviewDate = document.createElement('li')
            // gets review date and converts to something nice looking
            // code taken partially from itnext.io - https://itnext.io/create-date-from-mysql-datetime-format-in-javascript-912111d57599
            const dateTime = reviewsResults[i]['date']
            let dateTimeParts = dateTime.split(/[- T :]/)
            let newDate = dateTimeParts[2] + "/" + dateTimeParts[1] + "/" + dateTimeParts[0]
            reviewDate.innerHTML = newDate
            // append review elements
            reviewUl.appendChild(reviewRating)
            reviewUl.appendChild(reviewDate)
            reviewUl.appendChild(reviewDesc)
            singleCampsiteReviews.appendChild(reviewUl)
        }
    })
    .catch((error) => {
        const errorMessage = document.createElement('p')
        errorMessage.innerHTML = error.response.data.message;
        mainContainer.appendChild(errorMessage)
    })
}