const express = require('express')
const router = express.Router();
const Round = require('../models/round')

router.post('/rate/match', (req, res) => {
    const team1_key = req.body.team1_key
    const team2_key = req.body.team2_key
    const year = req.body.year
    const round = req.body.round
    const rating = {
        rate: req.body.rating,
        user: req.user
    }

    Round.findOne({ year: year, name: round })
        .then((item) => {
            let findedMatch = {}
            item.matches.map((match) => {
                if (match.team1.key === team1_key && match.team2.key === team2_key) {
                    if (match.ratings.length <= 0) {
                        match.ratings = [rating]
                    } else {
                        let isExisting = false
                        match.ratings.map((existingRating) => {
                            if (existingRating.user.username === req.user.username) {
                                isExisting = true
                                existingRating.rate = rating.rate
                            }
                        })

                        if (!isExisting) {
                            match.ratings.push(rating)
                        }
                    }

                    findedMatch = match
                }
            })
            item.save()

            res.status(200).send(findedMatch)
        })
        .catch((error) => console.log('Error while retrieving rounds details: ' + error))
})

module.exports = router