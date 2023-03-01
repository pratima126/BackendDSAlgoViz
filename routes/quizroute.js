const { Router } = require('express')
const express = require('express')
const router = express.Router()

const quizcontroller = require('../controllers/quizcontroller')

router.get('/', quizcontroller.index)
router.post('/store', quizcontroller.store)

module.exports = router