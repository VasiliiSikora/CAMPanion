const express = require('express');
const { Query } = require('pg');
const router = express.Router()
const db = require('../database/db.js')

// Handle GET requests to /api/campsite
router.post('/', (req, res) => {

    const { query, state } = req.body

    const queryArray = query.split(" ").map(i => '%' + i + '%');

    console.log([...queryArray], state)

    const sql = `
    SELECT * FROM campsites 
    INNER JOIN types ON campsites.campsiteId = types.campsiteId
    WHERE title ILIKE ANY($1) AND state = ($2)
    `
    db.query(sql, [queryArray, state])
        .then((dbResult) => {
        console.log(dbResult.rows)
        res.json(dbResult.rows)
    })
})

module.exports = router