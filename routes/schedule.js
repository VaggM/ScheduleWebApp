const express = require('express')
const router = express.Router()

const getSchedule = require('../controllers/schedule')

router.route('/')
    .get(getSchedule)

module.exports = router