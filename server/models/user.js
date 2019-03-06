const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String, 
    lowercase: true, 
    unique: true, 
    index: true
  },
  image: String,
  hash: String
})

var User = mongoose.model('User', userSchema);

module.exports = User