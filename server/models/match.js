const mongoose = require('mongoose')
const Team = require('./team')
const Rating = require('./rating')
const Comment = require('./comment')
const Goal = require('./goal')

const Schema = mongoose.Schema

const matchSchema = new Schema({
    date: Date,
    team1: Team,
    team2: Team,
    score1: {type: Number, min: 0},
    score2: {type: Number, min: 0},
    goals1: [Goal],
    goals2: [Goal],
    group: String,
    ratings: [Rating],
    comments: [Comment]
})

module.exports = matchSchema