const mongoose = require('mongoose')
const db = require('../libs/db')

const Schema = mongoose.Schema

const roundSchema = new Schema({
    name: String,
    matches: Array
})

module.exports = db.model('2016_2017_rounds', roundSchema)