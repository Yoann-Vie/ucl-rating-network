const mongoose = require('mongoose')
const db = require('../libs/db')
const Match = require('./match')

const Schema = mongoose.Schema

const roundSchema = new Schema({
    name: String,
    year: {type: Number, min: 2016, max: 2018},
    matches: [Match]
})

module.exports = db.model('ucl_rounds', roundSchema)