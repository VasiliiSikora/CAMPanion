// Use this page for accessing db (shouldn't need to edit this page)

const pg = require("pg")

const db = new pg.Pool({
    database: 'CAMPanion'
})

module.exports = db
