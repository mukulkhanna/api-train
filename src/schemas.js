const mongoose = require('mongoose')
const Schema = mongoose.Schema

const theOfficeSchema = new Schema({
  quote: String,
  character: String
},{ versionKey: false })

const gotSchema = new Schema({
  quote: String,
  character: String
},{ versionKey: false })

const shiffmanSchema = new Schema({
  quote: String,
  src: String
},{ versionKey: false })

module.exports.theOffice = mongoose.model('theOffice',theOfficeSchema,'The Office')
module.exports.shiffman = mongoose.model('shiffman',shiffmanSchema,'Shiffman')
module.exports.got = mongoose.model('got',gotSchema,'GameOfThrones')
