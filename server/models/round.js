const mongoose = require('mongoose')
const db = require('../libs/db')
const Match = require('./match')

const Schema = mongoose.Schema

const roundSchema = new Schema({
    name: String,
    matches: [Match]
})

module.exports = db.model('2017_2018_rounds', roundSchema)