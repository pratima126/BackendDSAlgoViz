const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');


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
app.use(cors({origin: "*"}))

// app.use(express.static('public'))

// app.get('/info', (req, res) => {
//     res.status(200).json({info: 'preset text'})
// })

app.post('/', (req, res) => {
    const {parcel} = req.body 
    console.log (parcel)
    if (parcel ) {
        return res.status (400).send({status: 'failed'})
    }
    res.status (200).send({status: 'received'})
})

// app.post('/api/employee/store', (req, res) => {
//     const { email}= req.body.email
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}` )
})
    
app.use('/api',AuthRoute)
app.use('/api/employee', EmployeeRoute)
 app.use('/api/quizroute', quizroute)