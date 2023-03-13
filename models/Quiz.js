const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({

  question:{
type: String
  },
  a:{
    type: String
  },
  b:{
    type: String
  },
  c:{
    type: String
  },
  d:{
    type: String
  },
   answer:{
   type: String
   }
}, {timestamps: true})

const Quiz= mongoose.model('Quiz',quizSchema)
module.exports = Quiz