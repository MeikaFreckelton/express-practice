const express = require("express")
const exphbs  = require('express-handlebars');
const app = express()

const port = 3000
const bodyParser = require('body-parser')


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/greeter", (req, res) => {
    res.send("Hello world!")
})

app.get("/greeter/:person", (req, res) => {
    // res.render('home', {
    //     person: req.params
    // })
    res.send(`hello ${req.params.person}`)
})


app.listen(port, () => console.log(`listening on port ${port}`))