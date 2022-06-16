const express = require('express');
const router = express.Router()
const db = require('../database/db.js')
// app.use(express.json())

// Handle GET requests to /api/campsite
router.get('/api/campsite/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    console.log("kim - campsite ID to be determined" + selectedCampsiteId)
    const sql = `
    SELECT street, state, img FROM campsites WHERE campsiteId = ${selectedCampsiteId}
    `
    console.log("sql is: " + sql)
    db.query(sql)
        .then((dbResult) => {
        console.log("db result is: ")
        console.log(dbResult.rows)
        res.json(dbResult.rows)
    })
})

// can do router.get for different urls or build the get requests into one router - check with amanda/will
router.get('/api/types/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    console.log("the campsite ID is: " + selectedCampsiteId)
    // check sql for 2 x requirements
    const sql = `
    SELECT * FROM types WHERE campsiteId = ${selectedCampsiteId}
    `    
    // AND value = 1;
    db.query(sql)
        .then((dbResult) => {
            console.log("type results are ")
            console.log(dbResult.rows)
            res.json(dbResult.rows)
        })
})

router.get('/api/amenities/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    console.log("the campsite ID is: " + selectedCampsiteId)
    const sql = `
    SELECT * FROM amenities WHERE campsiteId = ${selectedCampsiteId}
    `
    // and value is true
    db.query(sql)
        .then((dbResult) => {
            console.log("amenities results are ")
            console.log(dbResult.rows)
            res.json(dbResult.rows)
        })
})

router.get('/api/reviews/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    console.log("the campsite ID is: " + selectedCampsiteId)
    const sql = `
    SELECT * FROM reviews WHERE campsiteId = ${selectedCampsiteId}
    `
    db.query(sql)
        .then((dbResult) => {
            console.log("reviews results are ")
            console.log(dbResult.rows)
            res.json(dbResult.rows)
        })
})

module.exports = router