const express = require('express')
const router = express.Router()

const {
    getProfessor,
    getProfessors,
    createProfessor,
    updateProfessor,
    deleteProfessor
} = require('../controllers/professors')

router.route('/')
    .get(getProfessors)
    .post(createProfessor)

router.route('/:id')
    .get(getProfessor)
    .put(updateProfessor)
    .delete(deleteProfessor)

module.exports = router