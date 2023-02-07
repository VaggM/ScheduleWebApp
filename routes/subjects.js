const express = require('express')
const router = express.Router()

const {
    getSubject,
    getSubjects,
    createSubject,
    updateSubject,
    deleteSubject
} = require('../controllers/subjects')

router.route('/')
    .get(getSubjects)
    .post(createSubject)

router.route('/:id')
    .get(getSubject)
    .put(updateSubject)
    .delete(deleteSubject)

module.exports = router