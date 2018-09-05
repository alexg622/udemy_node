const express = require('express')
const router = express.Router()
const Todo = require('../../models/Todo')
const _ = require('lodash')

router.post("/todos", (req, res) => {
  let newTodo = new Todo({
    text: req.body.text
  })

  newTodo.save().then(doc => {
    res.json(doc)
  }, e => {
    res.status(400).json(e)
  })
})

router.get('/todos', (req, res) => {
  Todo.find().then(todo => {
    res.json(todo)
  }).catch(err => res.status(400).json(err))
})

router.get('/todos/:todoId', (req, res) => {
  Todo.findById(req.params.todoId)
    .then(todo => {
      res.json(todo)
    })
    .catch(err => res.json(err))
})

router.delete('/todos/:todoId', (req, res) => {
  Todo.findByIdAndRemove(req.params.todoId).then(result => {
    res.json(result)
  }).catch(err => res.json(err))
})

router.patch('/todos/:todoId', (req, res) => {
  let id = req.params.todoId
  let body = _.pick(req.body, ['text', 'completed'])

  Todo.update({_id: id}, {text: req.body.text, completed: req.body.completed})
    .then(todo => res.json(todo))
})

module.exports = router
