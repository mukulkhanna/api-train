const mongoose = require('mongoose')
require('dotenv').config()

module.exports = mongoose.connect(process.env.URI, {
  auth: {
    user: process.env.USER,
    password: process.env.PASS
  },
  useNewUrlParser: true
})

