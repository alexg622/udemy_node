const Todo = require('../models/Todo')

const todo = new Todo({
  text: "Some text here",
  completed: false
})

todo.save().then(res => {
  console.log("here");
})

// todo.save().then(success => {
//   console.log(success)
// }).catch((err) => {
//   console.log(err)
// })
//
// Todo.find().then(todos => {
//   console.log(todos);
// })
