const express = require('express');
const { Query } = require('pg');
const router = express.Router()
const db = require('../database/db.js')

// Handle GET requests to /api/campsite
router.post('/', (req, res) => {

    const { query, state, glamping, tent, park, caravan, cabin, farm, lake, beach } = req.body

    const types = {
        glamping: glamping,
        tent: tent,
        park: park,
        caravan: caravan,
        cabin: cabin,
        farm: farm,
        lake: lake,
        beach: beach,
    }

    let typeChecker = []
    // Create array of all checked types
    for (type in types) {
        if (types[type]) {
            typeChecker.push(type)
        }
    }

    console.log(types)

    const queryArray = query.split(" ").map(i => '%' + i + '%');

    console.log([...queryArray], state)


    if (state == 'allstates') {
        sql = `
        SELECT * FROM campsites 
        INNER JOIN types ON campsites.campsiteId = types.campsiteId
        WHERE title ILIKE ANY($1)
        `


        // Adds all checked boxes to search query
        for (type of typeChecker) {
            sql += `AND ${type} = true `
        }

        console.log(sql)

        db.query(sql, [queryArray])
            .then((dbResult) => {
            console.log(dbResult.rows)
            res.json(dbResult.rows)
        })
    } else {
        let sql = `
        SELECT * FROM campsites 
        INNER JOIN types ON campsites.campsiteId = types.campsiteId
        WHERE title ILIKE ANY($1) AND state = ($2)
        `

            // Adds all checked boxes to search query
        for (type of typeChecker) {
            sql += `AND ${type} = true `
        }

        console.log(sql)

        db.query(sql, [queryArray, state])
            .then((dbResult) => {
            console.log(dbResult.rows)
            res.json(dbResult.rows)
        })
    }


})

module.exports = router

