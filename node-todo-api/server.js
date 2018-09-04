const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('../.git/keys').mongoURI
const app = express()
const Todo = require('./models/Todo')
const User = require('./models/User')

mongoose.connect(db).then(() => console.log("MongoDB is connected")).catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/makeTodo', (req, res) => {
  const newTodo = new Todo({
    text: "new todo",
    completed: false
  })
  newTodo.save().then(todo => {
    res.json(todo)
  }).catch(err => {
    res.json(err)
  })
})

app.get('/users', (req, res) => {
  User.find().then(users => {
    res.json(users)
    // res.json({timestamp: users[0]._id.getTimestamp()})
  })
})

app.get('/makeUser', (req, res) => {
  const newUser = new User({
    name: "Bill",
    age: 25,
    location: "San Francisco"
  })

  newUser.save().then(user => {
    res.json(user)
  })
})

app.listen(3000, () => console.log("Listening on port 3000"))
