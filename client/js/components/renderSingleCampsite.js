const mainContainer = document.getElementById('page')
// for indidividual results page - main info - camp id/address right now

// need central clearChildren or alternate
function clearChildren() {
    const mainContainer = document.getElementById('page')
    mainContainer.innerHTML = ""
}

function createAndAppend(childType, appendTo) {
    const child = document.createElement(childType)
    appendTo.appendChild(child)
}

function renderSingleCampsite(campId) {
    const mainContainer = document.getElementById('page')
    // create divs and set classes, append to main page before calls begin/come in staggered
    clearChildren()
    // others will have to clear this attribute when they render new 'pages' - this sets the css grid
    mainContainer.setAttribute('class', 'render-single-campsite')
    const singleCampsiteHeading = document.createElement('div')
    singleCampsiteHeading.setAttribute('id', 'single-campsite-heading')
    mainContainer.appendChild(singleCampsiteHeading)
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

    // call the API to get specific information
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

        // uncomment when image working
        const campImg = document.createElement('img')
        campImg.classList.add('individual-result-pic')
        dbImgSrc = campsiteResult[0]['img']
        campImg.src = dbImgSrc
        console.log('img src is: ' + dbImgSrc)
        singleCampsiteImage.appendChild(campImg)
    })
    .catch((error) => {
        //proper error, not a console.log
        console.log("error happened when retrieving specific campsite details")
    })

    // another get for types - puts all types into a ul/li situation - uses a function?
    axios
    .get(`/api/types/${campId}`)
    .then(res => {
        const typesResults = res.data
        const typesTitle = document.createElement('h3')
        typesTitle.innerHTML = "campsite type"
        singleCampsiteTypes.appendChild(typesTitle)
        const typesUl = document.createElement('ul')
        typesUl.classList.add('types-amenities-ul')
        singleCampsiteTypes.appendChild(typesUl)
        // check what the sql results look like
        // need to grab each one that is a TRUE - either in the server side or here?
        // loop through results and create an LI each time?
        // const typeKeys = Object.keys(typesResults[0])
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
        console.log("types call doesn't work")
    })
    // another get for amenities - as above
    
    axios
    .get(`/api/amenities/${campId}`)
    .then(res => {
        const amenitiesResults = res.data
        const amenitiesTitle = document.createElement('h3')
        amenitiesTitle.innerHTML = "campsite amenities"
        singleCampsiteAmenities.appendChild(amenitiesTitle)
        const amenitiesUl = document.createElement('ul')
        amenitiesUl.classList.add('types-amenities-ul')
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
        console.log("amenities call doesn't work")
    })

    // another get for reviews

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
            reviewRating.innerHTML = reviewsResults[i]['rating']
            let reviewDesc = document.createElement('li')
            reviewDesc.innerHTML = reviewsResults[i]['description']
            let reviewDate = document.createElement('li')
            reviewDate.innerHTML = reviewsResults[i]['date']
            reviewUl.appendChild(reviewRating)
            reviewUl.appendChild(reviewDate)
            reviewUl.appendChild(reviewDesc)
            singleCampsiteReviews.appendChild(reviewUl)
        }
    })
    .catch((error) => {
        console.log("reviews call doesn't work")
    })
}