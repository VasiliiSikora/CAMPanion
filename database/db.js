// Use this page for accessing db (shouldn't need to edit this page)

const pg = require("pg")

let db;
if (process.env.NODE_ENV === 'production') {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  db = new pg.Pool({
    database: 'campanion'
  })
}

module.exports = db
