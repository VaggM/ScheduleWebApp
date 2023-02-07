const express = require('express')
const router = express.Router()

const {
    getLesson,
    getLessons,
    createLesson,
    updateLesson,
    deleteLesson
} = require('../controllers/lessons')

router.route('/')
    .get(getLessons)
    .post(createLesson)

router.route('/:id')
    .get(getLesson)
    .put(updateLesson)
    .delete(deleteLesson)

module.exports = router