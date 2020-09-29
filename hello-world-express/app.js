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



// greeter route
app.get("/greeter", (req, res) => {
    res.send("Hello world!")
})

// greeter/name route
app.get("/greeter/:person", (req, res) => {
    // res.render('home', {
    //     person: req.params
    // })
    res.send(`hello ${req.params.person}`)
})

// coinflip route

app.get("/coinflip", (req, res) => {
    const options = ["heads", "tails"]
    const randomChoice = Math.floor(Math.random() * options.length)

    res.send(options[randomChoice])
})

app.get("/coinflip/:number", (req, res) => {
    const options = ["heads", "tails"]
    let heads = 0
    let tails = 0
    let params = req.params.number
    let randomChoice = 0

    for (let i = 0; i < params; i++){
        randomChoice = Math.floor(Math.random() * options.length)
        if (randomChoice === 0){
            heads++
        } else if (randomChoice === 1){
            tails++
        }

    }


    res.send(`heads was returned ${heads} times, tails was returned ${tails} times `)
})



app.listen(port, () => console.log(`listening on port ${port}`))