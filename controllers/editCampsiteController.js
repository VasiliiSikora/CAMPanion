//api call to edit campsite record in the database

const express = require('express');
const router = express.Router()
const db = require('../database/db.js')

router.put('/api/editCampsite', (req, res) => {
    // get the campsite info
    const campsiteid = req.body.id;
    const title = req.body.title;
    const street = req.body.street;
    const state = req.body.state;

    let sql = `
    UPDATE campsites 
    SET title = $1, street = $2, state = $3 
    WHERE campsiteid = $4;
    `

    db.query(sql, [title, street, state, campsiteid])
        .then((dbResult) => {
        
            const beach = req.body.beach;
            const cabin = req.body.cabin;
            const caravan = req.body.caravan;
            const farm = req.body.farm;
            const glamping = req.body.glamping;
            const lake = req.body.lake;
            const park = req.body.park;
            const tent = req.body.tent;
        
            let sqlTypes = `
            UPDATE types 
            SET glamping = $2, tent = $3, park = $4, caravan = $5, cabin = $6, farm = $7, lake = $8, beach = $9
            WHERE campsiteid = $1;
            `
            db.query(sqlTypes, [campsiteid, glamping, tent, park, caravan, cabin, farm, lake, beach])
                .then((dbResult) => {
                
                    const bbq = req.body.bbq;
                    const electricity = req.body.electricity;
                    const kayak = req.body.kayak;
                    const showers = req.body.showers;
                    const toilets = req.body.toilets;
                    const water = req.body.water;
                    
                    let sqlAmenities = `
                    UPDATE amenities 
                    SET bbq = $2, electricity = $3, kayak = $4, showers = $5, toilets = $6, water = $7
                    WHERE campsiteid = $1;
                    `
                    db.query(sqlAmenities, [campsiteid, bbq, electricity, kayak, showers, toilets, water])
                        .then((dbResult) => {
                            res.json({ success: true })
                        })
                        .catch((error) => {
                            console.log(error.response)
                            res.status(500).json( {message: "unknown error occurred"} )
                        })
                })
        })
})

module.exports = router