const express = require('express');
const router = express.Router()
const db = require('../database/db.js')

// handle get request for all campsites in the database
router.get('/api/campsites/', (req, res) => {
    const sql = `
    SELECT campsiteid, title, street, state, img FROM campsites ORDER BY title ASC;
    `
    db.query(sql)
        .then((dbResult) => {
            res.json(dbResult.rows)
        })
        .catch((error) => {
            res.status(500).json( {message: "unknown error occurred"} )
        })
})

// post request to add review to the database
router.post('/api/reviews', (req, res) => {
    // get the ID, rating, description, date
    const { campsiteid, rating, description, date } = req.body;
    if (!rating) {
        res.status(400).json({ message: 'Please provide a rating for the campsite'})
    } else if (!description) {
        res.status(400).json({ message: 'Please provide your campsite review'})        
    } else if (!date) {
        res.status(400).json({ message: 'Please tell us when you stayed here'})
    } else {
    const sql = `
    INSERT INTO reviews (campsiteid, rating, description, date) VALUES ($1, $2, $3, $4);
    `
    db.query(sql, [req.body.campsiteid, req.body.rating, req.body.description, req.body.date])
        .then((dbResult) => {
            res.json({ success: true })
        })
        .catch((error) => {
            res.status(500).json( {message: "unknown error occurred"} )
        })
    }
})

module.exports = router