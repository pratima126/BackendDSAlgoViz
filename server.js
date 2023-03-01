const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/employee')
const quizroute = require('./routes/quizroute')

const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb://0.0.0.0:27017/testdb',{useNewUrlParser:true, useUnifiedTopology : true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
console.log("database connection established")
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}` )
})
    
app.use('/api',AuthRoute)
app.use('/api/employee', EmployeeRoute)
 app.use('/api/quizroute', quizroute)