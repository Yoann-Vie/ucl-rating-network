const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teamSchema = new Schema({
    key: String,
    name: String
})

module.exports = teamSchema