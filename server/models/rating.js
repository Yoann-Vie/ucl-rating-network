const mongoose = require('mongoose')
const User = require('./User')

const Schema = mongoose.Schema

const ratingSchema = new Schema({
    user: User,
    rate: {type: Number, min: 0, max: 10}
})

module.exports = ratingSchema