const express = require("express")
require('dotenv').config
const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession);
const db = require('./database/db')

// require controllers HERE
const usersController = require('./controllers/users') 
const sessionController = require('./controllers/session')
const addReviewController = require('./controllers/addReviewController.js'); // Kim
const searchController = require('./controllers/search')
const singleCampsiteResultController = require('./controllers/singleCampsiteResultController.js'); // Kim
const addCampsiteController = require('./controllers/addcampsite')

const app = express()
const port = 3001;

// Session for Cookies
app.use(expressSession({
    store: new pgSession({
        pool:db,
        createTableIfMissing:true,
    }),
    secret: ','
}))

// Logging Middleware NEEDS TO BE BEFORE THE ROUTES (i.e. here)
app.use((req, res, next) => {
    console.log(`${new Date()} ${req.method} ${req.path}`);
    next()
})

// Tell server where client/statics folders are
app.use(express.static('client'))
app.use(express.json())


// Add app.use for other controllers here
app.use('/api/users', usersController);
app.use('/api/session', sessionController);
app.use('/api/campsite', searchController);
app.use('/', addCampsiteController);
app.use('/', singleCampsiteResultController);
app.use('/', addReviewController);


// start the web server
app.listen(port, () => {
    console.log(`Web server is listening on http://localhost:${port}`)
})