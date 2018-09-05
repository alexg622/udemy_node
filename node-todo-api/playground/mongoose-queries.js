Todo.find({_id: id}).then(todos => {
  console.log(todos);
})

Todo.findOne({_id: id}).then(todos => {
  console.log(todos);
})

Todo.findById(id).then(todo => {
  console.log(todo);
})

Todo.remove({}).then(result => {
  console.log(result);
})

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: id}).then(todo => {
  console.log(todo);
})

Todo.findByIdAndRemove(id).then(todo => {
  console.log(todo);
})
