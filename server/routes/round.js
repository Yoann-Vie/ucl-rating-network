const express = require('express')
const router = express.Router();
const Round = require('../models/round')

router.get('/rounds', (req, res) => {

    Round.find({ year: req.query.year }).sort({ 'matches.date': -1 })
        .then((rounds) => {

            rounds.map((round) => {

                round.matches.map((match) => {

                    let tabAvg = 0;
                    match.ratings.map((rating) => {

                        tabAvg += rating.rate
                    })
                    match.avgRate = tabAvg/match.ratings.length
                })
            })
            res.status(200).send(rounds)
        })
        .catch((error) => console.log('Error while retrieving rounds details: ' + error))
})

module.exports = router


