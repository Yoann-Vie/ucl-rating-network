const mongoose = require('mongoose')
const User = require('./user')

const Schema = mongoose.Schema

const ratingSchema = new Schema({
    user: User.schema,
    rate: {type: Number, min: 0, max: 10}
})

module.exports = ratingSchema