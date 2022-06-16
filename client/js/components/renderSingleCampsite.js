const mainContainer = document.getElementById('main-container')
// for indidividual results page - main info - camp id/address right now

// need central clearChildren or alternate
function clearChildren() {
    mainContainer.innerHTML = ""
}

function createAndAppend(childType, appendTo) {
    const child = document.createElement(childType)
    appendTo.appendChild(child)
}

function renderSingleCampsite(campId) {
    console.log("function has been called")
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
        console.log("checking progress in axios campsite function - inside .then")
        const campsiteResult = res.data
        console.log(campsiteResult)
        
        //don't have a camp title right now.
    
        
        const campTitle = document.createElement('h1')
        campTitle.innerHTML = campId
        singleCampsiteHeading.appendChild(campTitle)
        const campAddress = document.createElement('h2')
        // will the comma work to string them together?
        campAddress.innerHTML = campsiteResult[0]['street'].concat(campsiteResult[0]['state'])
        singleCampsiteHeading.appendChild(campAddress)

        // doing something wrong
        const campImg = document.createElement('img')
        dbImgSrc = campsiteResult[0]['img']
        campImg.src = dbImgSrc
        console.log('img src is: ' + img)
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
        console.log('types axios call returned')
        const typesResults = res.data
        console.log(typesResults)
        const typesTitle = document.createElement('h3')
        typesTitle.innerHTML = "campsite type"
        singleCampsiteTypes.appendChild(typesTitle)
        const typesUl = document.createElement('ul')
        typesUl.classList.add('types-amenities-ul')
        singleCampsiteTypes.appendChild(typesUl)
        // check what the sql results look like
        // need to grab each one that is a TRUE - either in the server side or here?
        // loop through results and create an LI each time?
        console.log("testing access to keys")
        const typeKeys = Object.keys(typesResults[0])
        console.log(typeKeys)
        for (let key of typeKeys) {
            console.log("This key is: " + key)
        }
        for(let i = 0; i < typesResults.length; i++) {
            console.log("typoes result length = " + typesResults.length)
            let typesLi = document.createElement('li')
            typesLi.innerHTML = typesResults[0]['glamping']
            console.log("type li")
            console.log(typesResults[0])
            typesUl.appendChild(typesLi)
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
        // check what the sql results look like
        // need to grab each one that is a TRUE - either in the server side or here?
        // loop through results and create an LI each time?
        for(let i = 0; i < amenitiesResults.length; i++) {
            let amenitiesLi = document.createElement('li')
            amenitiesLi.innerHTML = amenitiesResults[0]['toilet']
            amenitiesUl.appendChild(amenitiesLi)
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
        console.log("reviewes are ")
        console.log(reviewsResults)
        const reviewsTitle = document.createElement('h3')
        reviewsTitle.innerHTML = "campsite reviews"
        singleCampsiteReviews.appendChild(reviewsTitle)
        // for each review, create a Ul, list details as Li
        for(let i = 0; i < reviewsResults.length; i++) {
            let reviewUl = document.createElement('ul')
            reviewUl.setAttribute('class', 'review-ul')
            let reviewRating = document.createElement('li')
            reviewRating.innerHTML = reviewsResults[0]['rating']
            let reviewDesc = document.createElement('li')
            reviewDesc.innerHTML = reviewsResults[0]['description']
            let reviewDate = document.createElement('li')
            reviewDate.innerHTML = reviewsResults[0]['date']
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