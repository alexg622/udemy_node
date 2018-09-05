const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true 
  }
})

module.exports = User = mongoose.model('user', UserSchema)
