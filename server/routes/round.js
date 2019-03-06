const express = require('express')
const router = express.Router();
const Round = require('../models/round')

router.get('/rounds', (req, res) => {

    Round.find(req.query)
        .then((items) => {
            res.status(200).send(items)
        })
        .catch((error) => console.log('Error while retrieving rounds details: ' + error))
})

module.exports = router