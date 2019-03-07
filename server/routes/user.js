const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.get('/user/:username', (req, res) => {

    User.findOne({ username: req.params.username })
        .then((item) => {
            res.status(200).send(item)
        })
        .catch((error) => console.log('Error while retrieving rounds details: ' + error))
})

module.exports = router