function defaultSearches(textDescript, imgURL, state, glampingBool, tentBool, parkBool, caravanBool, cabinBool, farmBool, lakeBool, beachBool) {
    const docBody = document.getElementById('page')

    const container = document.createElement('div')
        container.className = 'container'
        container.style.width = '300px'
    const image = document.createElement('img')
        image.src = imgURL
        image.style.width = '100%'
    const text = document.createElement('div')
        text.className = 'centered'
        text.innerText = textDescript

    container.addEventListener('click', function (event) {
        searchQuery(textDescript, state, glampingBool, tentBool, parkBool, caravanBool, cabinBool, farmBool, lakeBool, beachBool)
    })

    container.append(image,text)
    docBody.append(container)
}

// 'https://holidayswithkids.com.au/wp-content/uploads/2021/01/shutterstock_436762138-1.jpg'

// 'Beachfront Camping'