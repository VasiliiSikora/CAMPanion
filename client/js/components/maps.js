const { default: axios } = require("axios")


async function locationGet(location) {
    API_KEY = 'AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1'

    locationQuery = location.replace(' ','%20')

    map_URL = `http://dev.virtualearth.net/REST/v1/Locations?query=${locationQuery}&includeNeighborhood=0&maxResults=10&key=${API_KEY}`

    await axios
        .get(map_URL)
        .then(response => {
            return {
                lat: response['data']['resourceSets'][0]['resources'][0]['point']['coordinates'][0],
                lon: response['data']['resourceSets'][0]['resources'][0]['point']['coordinates'][1]
            }

    }).catch(err => console.log(err))
}

function staticMapGet(location) {

    API_KEY = 'AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1'

    locationQuery = location.replace(' ','%20')

    queryURL = `http://dev.virtualearth.net/REST/v1/Locations?query=${locationQuery}&includeNeighborhood=0&maxResults=10&key=${API_KEY}`

    return axios
        .get(queryURL)
        .then(response => {
            const result =  {
                lat: response['data']['resourceSets'][0]['resources'][0]['point']['coordinates'][0],
                lon: response['data']['resourceSets'][0]['resources'][0]['point']['coordinates'][1]
            }

            let {lat, lon} = result

            map_URL = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${lat},${lon}/16?mapSize=500,500&pp=${lat},${lon}&key=AoqFXS5Ki1QMFt0XF-02zhn_5CJBBSBRy4EHGrPKHBzMe0uQGXT87m1Kp3Hw4xI1`
            console.log(map_URL)
            return map_URL

    }).catch(err => console.log(err))

}

module.exports = { staticMapGet, locationGet }