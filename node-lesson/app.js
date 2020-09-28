const express = require("express")
const exphbs  = require('express-handlebars');
const app = express()

const port = 3000
const bodyParser = require('body-parser')
const students = ["latchy", "ben", "anfii"]

(app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');)


// body parser middlewares:

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

app.get("/", (req, res) => {
    // res.send(`<h1> Hello world </h1>`)
    res.render('home', {
        student: students[0]
    })
})

app.get("/students", (req, res) => {
    res.send(students)
})

app.post("/add", (req, res) => {
    console.log(req.body)
    students.push(req.body.name)
    res.send(students)
})

// alternate middleware
app.post("/", (req, res, next) => {
    console.log("middle ware running")
    next()
}, (req,res) => {
    res.send(students)
})

// listen on specific port

app.listen(port, () => console.log(`listening on port ${port}`))