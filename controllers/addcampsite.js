// Amanda - user can add campsite
const express = require('express');
const router = express.Router();
const db = require('../database/db');
const maps = require('../client/js/components/maps');
const { default: axios } = require('axios');


router.post('/api/addcampsite', (req, res) => {
    let {title, address, state, glamping, tent, park, caravan, cabin, farm, lake, beach, showers, toilets, bbq, water, electricity, kayak, image} = req.body;

    //check whether the mandatory values for the campsite table are provided
    if  (!title) {
        res.status(400).json({ message: 'You did not submit a title'})

     } else if (!address) {
        res.status(400).json({ message: 'You need to provide a street address'})
                 
     } else if (!state) {
        res.status(400).json({ message: 'You need to provide a state'})
                 
     }    
     //add the input values into the tables
     else {

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
     }

})

module.exports = router