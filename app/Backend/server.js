
// import des modules 
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

//colors 
const colors = require('colors')

// Initialisation d'Express
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//route
app.use('/api/goals', require('./routes/goalroutes'))



app.listen(port, () => {
console.log(`Server started on ${port}`)
})