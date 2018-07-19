const express = require('express')
const bodyParser = require('body-parser')

var connection = require('./db')
var cors = require('cors')
var theOffice = require('./schemas').theOffice
var shiffman = require('./schemas').shiffman

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
var port = process.env.PORT || 3000

app.set('json spaces', 2)

app.use('/',express.static(__dirname + '/../public/dist'))
app.use('/info/shiffman',express.static(__dirname + '/../public/dist'))
app.use('/info/got',express.static(__dirname + '/../public/dist'))
app.use('/info/theoffice',express.static(__dirname + '/../public/dist'))
app.use('/upload/quotes',express.static(__dirname + '/../public/dist'))

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get('/theoffice/quotes',(req,res) => {

  if(req.query.count){
    if(!req.query.character){
      theOffice.find({},'-_id',function (err, quotes) {
        if (req.query.count > quotes.length) {
          res.send({Error:"Please try a lower count value. 😕"})
        }
        else {
          var subset = []
          for (var i=0;i<req.query.count;i++) {
            subset.push(quotes[i])
          }
          res.send(subset)
        }
      })
    }

    else if(req.query.character){
      theOffice.find({character:req.query.character},'-_id',function (err, quotes) {
        if (req.query.count > quotes.length) {
          res.send({Error:"Please try a lower count value. 😕"})
        }
        else{
          var subset = []
          for (var i=0;i<req.query.count;i++) {
            subset.push(quotes[i])
          }
          res.send(subset)
        }
      })

    }
  }

  else if (req.query.character) {
    theOffice.find({character: req.query.character},'-_id',function (err, quotes) {
      if (err) return console.error(err);
      res.send(quotes);
    })
  }

  else if(!req.query.character && !req.query.count) {
    theOffice.find({},'-_id',function (err, quotes) {
      if (err) return console.error(err);
      res.send(quotes);
    })
  }

})

app.get('/theoffice/quotes/random',(req,res) => {

  if(!req.query.character){
    theOffice.find({}, '-_id', function (err, kittens) {
      if (err) return console.error(err);
      res.send(kittens[getRandomInt(kittens.length)]);
    })
  }

  else if(req.query.character){
    theOffice.find({character:req.query.character}, '-_id', function (err, kittens) {
      if (err) res.send(err);
      res.send(kittens[getRandomInt(kittens.length)]);
    })

  }
})

app.post('/theoffice/quotes',(req,res) => {
  console.log("Received")
  console.log(req.body.quote)
  console.log(process.env.DBAPIKEY)
  if (req.body.apiKey == process.env.DBAPIKEY){
    var entry = new theOffice({
      quote: req.body.quote,
      character: req.body.character
    })
    console.log(entry)
    entry.save()
    res.send("SERVER: Successful 🌈")
  }
})

app.get('/shiffman/quotes',(req,res) => {
  if(!req.query.count) {
    shiffman.find({},'-_id',function (err, quotes) {
      if (err) return console.error(err);
      res.send(quotes)
    })
  } else if(req.query.count){
    theOffice.find({},'-_id',function (err, quotes) {
      if (req.query.count > quotes.length) {
          res.send({Error:"Please try a lower count value. 😕"})
        }
        else {
          var subset = []
          for (var i=0;i<req.query.count;i++) {
            subset.push(quotes[i])
          }
          res.send(subset)
        }
      })
    }
  })

app.get('/shiffman/quotes/random',(req,res) => {

  shiffman.find({}, '-_id', function (err, kittens) {
    if (err) return console.error(err);
    res.send(kittens[getRandomInt(kittens.length)]);
  })

})

app.post('/shiffman/quotes',(req,res) => {
  if (req.body.apiKey == process.env.DBAPIKEY){
    var entry = new shiffman({
      quote: req.body.quote,
      src: req.body.src
    })
    console.log(entry)
    entry.save()
    res.send("SERVER: Successful 🌈")
  }
})

app.listen(port, () => console.log('Example app listening on port 3000!'))
