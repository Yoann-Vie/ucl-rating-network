const mongoose = require('mongoose')
const Team = require('./team')

const Schema = mongoose.Schema

const matchSchema = new Schema({
    date: Date,
    team1: Team,
    team2: Team,
    score1: Number,
    score2: Number,
    goals1: Array,
    goals2: Array,
    group: String
})

module.exports = matchSchema