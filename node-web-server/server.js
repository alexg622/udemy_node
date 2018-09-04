const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'hbs')

// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// })

hbs.registerPartials(__dirname + "/views/partials")
app.use(express.static(__dirname + "/public"))

app.use((req, res, next) => {
  let now = new Date().toString()
  let log = `${now}: ${req.method} ${req.url}`

  console.log(log)
  fs.appendFile('server.log', log + '\n', err => {
    if (err) {
      console.log("Unable to append server.log");
    }
  })
  next()
})

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper("screamIt", (text) => {
  return text.toUpperCase()
})

app.get(('/'), (req, res) => {
  res.send({
    name: "Alex",
    likes: [
      "biking",
      "cities"
    ]
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: "About Page",
  })
})

app.get('/home', (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to my website"
  })
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Unable to handle request"
  })
})


app.listen(port, () => console.log(`server is up on port ${port}`))
