require('dotenv').config()
const app = require('express')()
// **OR
// const express = require('express')
// const app = express()

app.get('/', (req, res)=>{
    // console.log(req)
    // res.send('I am from Home Page')
    res.json({
        message : "Welcome to the Home Page",
        status : "success"
    })
})

app.get('/about', (req, res)=>{
    // res.send('I am from About Page')
    res.json({
        message : "Welcome to the About Page",
        status : "200"
    })
})

app.get('/contact', (req, res)=>{
    res.send('I am from Contact Page')
})



const Port  = process.env.PORT || 3000
app.listen(Port, (req, res)=>{
    console.log(`Server is running on port ${Port}`)
})


