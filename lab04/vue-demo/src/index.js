global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const express = require('express')
const mongodb = require('mongodb')

const cors = require('cors')
const app = express()
app.use(cors)

let db = null

app.get('/api/courses', function (req, res) {
  db.collection('courses').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send({
      courses: result
    })
  })
})

mongodb.MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) return console.log(err)
  console.log('Connected to database')
  db = client.db('university-db');
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
})

