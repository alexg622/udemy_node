const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('../.git/keys').mongoURI
const app = express()
const Todo = require('./models/Todo')
const User = require('./models/User')
const todos = require('./routes/api/todos')

mongoose.connect(db).then(() => console.log("MongoDB is connected")).catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', todos)

app.get('/test', (req, res) => {
  res.send("working")
})

app.listen(3000, () => console.log("Listening on port 3000"))
