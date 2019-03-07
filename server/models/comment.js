const mongoose = require('mongoose')
const User = require('./user')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    date: Date,
    user: User.schema,
    comment: String
})

module.exports = commentSchema