# CAMPanion
Project 3 - General Assembly - Single Page App

# Prerequisites
To build and run project you must have installed:

* NodeJs
* postgreSQL
* Heroku (required if deploying to heroku)

# Setup/Run Project
``` npm install ```
``` psql CREATE DATABASE campanion ```
``` psql -D campanion < schema.sql ```
``` psql -D campanion < seed.sql ```
``` npm run start:dev ```

# Deploying to Heroku

Pushing to Heroku
``` git push heroku main ```

Adding database to Heroku
``` heroku addons:create heroku-postgresql:hobby-dev ```

Clearing Heroku database
``` heroku pg:reset ```

Pushing database to Heroku
``` heroku pg:push campanion DATABASE_URL ```

# To set up cloudinary account
https://cloudinary.com/

## Setting up Cloudinary Widget
https://cloudinary.com/documentation/upload_widget

# Future Improvements
* CSS document could be cleaned up, into pages/functions
* Refactoring some code to remove duplication, tried where we could but there is some clear repeats
* Edit campsite doesn’t let you add/change a picture
* Better UI display of error messages
* More search terms/filtering
* Filter results
* More user profile integration

# Code Snippets
## Add Campsite - Dealing with Form Data
```javascript
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
```

## Tables in SQL
```SQL
CREATE TABLE users (
    userid SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_hash TEXT,
    postcode INTEGER,
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE campsites (
    campsiteid SERIAL PRIMARY KEY,
    title VARCHAR(50),
    street VARCHAR(100),
    state VARCHAR(3),
    img TEXT,
    mapimg TEXT
);

CREATE TABLE types (
    campsiteid INTEGER REFERENCES campsites(campsiteid) UNIQUE,
    glamping BOOLEAN DEFAULT FALSE,
    tent BOOLEAN DEFAULT FALSE,
    park BOOLEAN DEFAULT FALSE,
    caravan BOOLEAN DEFAULT FALSE,
    cabin BOOLEAN DEFAULT FALSE,
    farm BOOLEAN DEFAULT FALSE,
    lake BOOLEAN DEFAULT FALSE,
    beach BOOLEAN DEFAULT FALSE
);

CREATE TABLE amenities (
    campsiteid INTEGER REFERENCES campsites(campsiteid) UNIQUE,
    showers BOOLEAN DEFAULT FALSE,
    toilets BOOLEAN DEFAULT FALSE,
    bbq BOOLEAN DEFAULT FALSE,
    water BOOLEAN DEFAULT FALSE,
    electricity BOOLEAN DEFAULT FALSE,
    kayak BOOLEAN DEFAULT FALSE
);

CREATE TABLE reviews (
    reviewid SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(userid),
    campsiteid INTEGER REFERENCES campsites(campsiteid),
    description TEXT,
    rating INTEGER,
    date DATE
);
```

## Cloudinary
```javascript
    let img_url = "";

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
```

## Prefilled Form for Edit
```javascript
    axios
    .get(`/api/types/${campId}`)
    .then((response) => {
        let typesResponse = (response['data'][0])
        let typesObject = {}
        for (item in typesResponse) {
            if (typesResponse[item] == true) {
                typesObject[item] = 'checked'
            } else {
                typesObject[item] = 'unchecked'
            }
        }
    })
```
```javascript
    `<p><input type="checkbox" id="cabin" name="cabin" value="cabin" ${typesObject['cabin']}>
    <label for="cabin"> Cabin</p>`
```

## Search Function
```javascript
    let sql = `
    SELECT * FROM campsites 
    INNER JOIN types ON campsites.campsiteId = types.campsiteId
    WHERE title ILIKE ANY($1) AND state = ($2)
    `

        // Adds all checked boxes to search query
    for (type of typeChecker) {
        sql += `AND ${type} = true `
    }
```

## Map Functionality
```javascript
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
```

## Async Maps Function
```javascript
    let newAddress = address.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

    const mapURLPromise = maps.staticMapGet(newAddress.replace(" ","%20") + "%20" + state + "%20" + 'Australia')
    console.log(mapURLPromise, 'Promise')

    mapURLPromise.then((mapURL) => {
        const sql = `INSERT INTO campsites(title, street, state, img, mapimg) VALUES ($1, $2, $3, $4, $5) RETURNING campsiteid`
        console.log(mapURL, 'first')
        db.query(sql, [title, address, state, image, mapURL]).then((dbResult) => {
            console.log(dbResult)
            const campid = dbResult.rows[0][`campsiteid`]
            console.log('second')
            const sqlTypes = `INSERT INTO types (campsiteid, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
            const sqlAmenities = `INSERT INTO amenities (campsiteid, showers, toilets, bbq, water, electricity, kayak) VALUES ($1, $2, $3, $4, $5, $6, $7)`               
            db.query(sqlTypes, [campid, glamping, tent, park, caravan, cabin, farm, lake, beach]).then((dbResult) => {
                db.query(sqlAmenities, [campid, showers, toilets, bbq, water, electricity, kayak]).then((dbResult) => {
                })
            })
            res.json({ success: true, newid:campid })
            
        })  .catch((err) => {
            console.log(err.res)
            res.status(500).json({message: err})
        }) 
    })
```

