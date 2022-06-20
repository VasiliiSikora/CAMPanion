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
    // //     const sqlTypes = `
    // //     INSERT INTO types (campsiteid, glamping, tent, park, caravan, cabin, farm, lake, beach) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    // //     `
    // //     const sqlAmenities = `
    // //     INSERT INTO amenities (campsiteid, showers, toilets, bbq, water, electricity, kayak) VALUES ($1, $2, $3, $4, $5, $6, $7)
    // //     `               
    // //     db.query(sqlTypes, [campid, glamping, tent, park, caravan, cabin, farm, lake, beach]).then((dbResult) => {
    // //     db.query(sqlAmenities, [campid, showers, toilets, bbq, water, electricity, kayak]).then((dbResult) => {
    // //     })
    // })

            res.json({ success: true })
        })
        .catch((error) => {
            console.log(error.response)
            res.status(500).json( {message: "unknown error occurred"} )
        })
})



module.exports = router