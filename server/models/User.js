const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  bio: String,
  image: String,
  hash: String,
  salt: String
})

module.exports = userSchema