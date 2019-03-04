const mongoose = require('mongoose')
const db = require('../libs/db')

const Schema = mongoose.Schema

const movieDetailSchema = new Schema({
    title: String,
    year: {type: Number, min: 1850},
    releaseDate: Date
})
db.model('movieDetail', movieDetailSchema)

module.exports = db.model('movieDetail', movieDetailSchema)