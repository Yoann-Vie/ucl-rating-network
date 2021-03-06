const mongoose = require('mongoose')
const Rating = require('./rating')

const Schema = mongoose.Schema

const goalSchema = new Schema({
    name: String,
    minute: {type: Number, min: 0, max: 150},
    score1: {type: Number, min: 0},
    score2: {type: Number, min: 0},
    ratings: [Rating]
})

module.exports = goalSchema