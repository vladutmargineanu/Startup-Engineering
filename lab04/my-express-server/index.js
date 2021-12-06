const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')

const app = express()

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

let db = null

app.get('/api/courses', function (req, res) {
  db.collection('courses').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send({
      courses: result
    })
  })
})

mongodb.MongoClient.connect('mongodb://localhost:27017/demo', (err, client) => {
  if (err) return console.log(err)
  console.log('Connected to database')
  db = client.db('university-db');
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
})
