// Amanda - user can add campsite
const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.post('/api/addcampsite', (req, res) => {
    let {title, address, state, glamping, tent, park, caravan, cabin, farm, lake, beach, showers, toilets, bbq, water, electricity, kayak} = req.body;
    // console.log(req.body)
    // console.log(title, address, state)
    
//checks whether the checkboxes have a value/are checked. if not, assigns a "false" value for the types and amenities tables
    if (glamping === null) { 
        glamping = "false"
    }  
    if (tent === null) { 
        tent = "false"
    }  
    if (park === null) { 
        park = "false"
    } 
    if (caravan === null) { 
        caravan = "false"
    } 
    if (cabin === null) { 
        cabin = "false"
    } 
    if (farm === null) { 
        farm = "false"
    } 
    if (lake === null) { 
        lake = "false"
    } 
    if (beach === null) { 
        beach = "false"
    } 
    if (showers === null) { 
        showers = "false"
    } 
    if (toilets === null) { 
        toilets = "false"
    } 
    if (bbq === null) { 
        bbq = "false"
    } 
    if (water === null) { 
        water = "false"
    } 
    if (electricity === null) { 
        electricity = "false"
    } 
    if (kayak === null) { 
        kayak = "false"
    } 
    //check whether the mandatory values for the campsite table are provided
    if  (!title) {
        res.status(400).json({ message: 'You did not submit a title!'})

     } else if (!address) {
        res.status(400).json({ message: 'You need to provide a street address'})
                 
     } else if (!state) {
        res.status(400).json({ message: 'You need to provide a state'})
                 
     }    
     //add the input values into the tables
     else {
        const sql = `INSERT INTO campsites(title, street, state) VALUES ($1, $2, $3)`
        const sqlTypes = `INSERT INTO types (glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
        const sqlAmenities = `INSERT INTO types (showers, toilets, bbq, water, electricity, kayak) VALUES ($1, $2, $3, $4, $5, $6)`
        db.query(sql, [title, address, state]).then((dbResult) => {
            console.log(dbResult)
            db.query(sqlTypes, [glamping, tent, park, caravan, cabin, farm, lake, beach]).then((dbResult) => {
                db.query(sqlAmenities, [showers, toilets, bbq, water, electricity, kayak]).then((dbResult) => {

                })
            })
            res.json({ success: true })
            
        })  .catch((err) => {
            console.log(err.res)
            res.status(500).json({message: err})
        }) 
     }

})

module.exports = router