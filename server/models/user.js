const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  image: String,
  hash: String, 
  salt: String
})

var User = mongoose.model('User', userSchema);

module.exports = User