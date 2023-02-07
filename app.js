// node.js modules
const express = require('express')
const app = express()

// api handlers
const professors = require('./routes/professors')
const subjects = require('./routes/subjects')
const lessons = require('./routes/lessons')
const schedule = require('./routes/schedule')

// main website page folder
app.use('/', express.static('./front-end'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/api/professors', professors)

app.use('/api/subjects', subjects)

app.use('/api/lessons', lessons)

app.use('/api/schedule', schedule)

app.listen(8000, ()=>{
    console.log('8000 is up')
})
