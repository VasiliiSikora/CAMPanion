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
})

// post request to add review to the database
router.post('/api/reviews', (req, res) => {
    // get the ID, rating, description, date
    const { campsiteid, rating, description, date } = req.body;
    const sql = `
    INSERT INTO reviews (campsiteid, rating, description, date) VALUES ($1, $2, $3, $4);
    `
    db.query(sql, [req.body.campsiteid, req.body.rating, req.body.description, req.body.date])
        .then((dbResult) => {
            res.json({ success: true })
        })


})

module.exports = router