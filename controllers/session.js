// Use this file for handling cookies

const express = require('express');
const router = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');

//Add routers and post/get etc. requests here

//NOTE: Test Case is vasiliisikora@gmail.com, 12345678
function isValidPassword(plainTextPassword, passwordHash) {
    // Returns true or false
    return bcrypt.compareSync(plainTextPassword, passwordHash)
}

router.post('/', (req,res) => {

    //get email and pword from body of request
    const { email, password } = req.body
    const emailCheck = email
    const pwordCheck = password
    console.log(email,password)
    //check email and pword
    let sql = `SELECT * FROM users WHERE email='${email}'`
    db.query(sql)
        .then(dbRes => {
            if (!dbRes.rows == []) {
                const { userId, name, email, password_hash } = dbRes.rows[0]
                if (email == emailCheck && isValidPassword(pwordCheck, password_hash)) {
                    req.session.userId = userId // get this from DB query
                    req.session.name = name //get from DB 
                    req.session.email = email //get form DB
                    res.json({ message: 'logged in successfully' }) 
                } else {
                    res.status(400).json({success: false, message: 'login failed, email or username doesnt match'})
                }
            } else {
                res.status(400).json({success: false, message: 'login failed, user doesnt exist'})
            }
    })
})

// Used for getting a logged in user when page is loaded
router.get('/', (req,res) => {
    const userId = req.session.userId
    const name = req.session.name
    const email = req.session.email
    console.log(email, 'this is a logged in user')
    res.json({
        'userId': userId,
        'name': name,
        'email': email
    })

})

// Delete cookies (for logout)
router.delete('/', (req,res) => {
    req.session.destroy()
    res.json({success: true})
})


module.exports = router

