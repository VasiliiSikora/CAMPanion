const express = require('express');
const router = express.Router()
const db = require('../database/db.js')

// Handle GET requests to /api/campsite
router.get('/api/campsite/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    const sql = `
    SELECT title, street, state, img, mapimg FROM campsites WHERE campsiteId = ${selectedCampsiteId}
    `
    db.query(sql)
        .then((dbResult) => {
            res.json(dbResult.rows)
         })
         .catch((error) => {
            res.status(500).json( {message: "unknown error occurred"} )
        })
})

// Handle GET requests to /api/types
router.get('/api/types/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    const sql = `
    SELECT * FROM types WHERE campsiteId = ${selectedCampsiteId}
    `    
    db.query(sql)
        .then((dbResult) => {
            res.json(dbResult.rows)
        })
        .catch((error) => {
            res.status(500).json( {message: "unknown error occurred"} )
        })
})

// Handle GET requests to /api/amenities
router.get('/api/amenities/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    const sql = `
    SELECT * FROM amenities WHERE campsiteId = ${selectedCampsiteId}
    `
    db.query(sql)
        .then((dbResult) => {
            res.json(dbResult.rows)
        })
        .catch((error) => {
            res.status(500).json( {message: "unknown error occurred"} )
        })
})

// Handle GET requests to /api/reviews
router.get('/api/reviews/:id', (req, res) => {
    let selectedCampsiteId = req.params.id;
    const sql = `
    SELECT * FROM reviews WHERE campsiteId = ${selectedCampsiteId}
    `
    db.query(sql)
        .then((dbResult) => {
            res.json(dbResult.rows)
        })
        .catch((error) => {
            res.status(500).json( {message: "unknown error occurred"} )
        })
})

module.exports = router