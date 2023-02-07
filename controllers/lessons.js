const con = require('../database')

const getLesson = (req,res)=>{
    const {id} = req.params
    const sql = `select * from schedule where id = ${id};`
    
    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.length === 0) return res.status(404).json({success:false,msg:`no lesson with id ${id}`})

        res.status(200).json({success:true,data:result})
    })
}

const getLessons = (req,res)=>{
    con.query('select * from schedule', (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.length === 0) return res.status(404).json({success:false,msg:`no lessons created on the database yet`})

        res.status(200).json({success:true,data:result})
    })
}

const createLesson = (req,res)=>{
    const { id, day, hours, subject, professor, classroom, tmima } = req.body
    
    const sql = `insert into schedule (id, day, hours, subject, professor, classroom, tmima) values (${id}, '${day}', '${hours}', ${subject}, ${professor}, '${classroom}', ${tmima});`

    con.query(sql, (err, result)=>{

        if (err) return res.status(404).json({success:false,msg:err})

        const newLesson = {
            id: id,
            day: day,
            hours: hours,
            subject: subject,
            professor: professor,
            classroom: classroom,
            tmima: tmima
        }
        res.status(201).json({success:true, data:newLesson})
    })
}


const updateLesson =  (req,res)=>{
    const {id} = req.params
    const {day, hours, subject, professor, classroom, tmima} = req.body
    
    const sql = `update schedule set day = '${day}', hours = '${hours}', subject = ${subject}, professor = ${professor}, classroom = '${professor}', tmima = ${tmima} where id = ${id};`
    
    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.affectedRows == 0) return res.status(404).json({success:false,msg:`no lesson with id ${id}`})

        const updatedLesson = {
            id: id,
            day: day,
            hours: hours,
            subject: subject,
            professor: professor,
            classroom: classroom,
            tmima: tmima
        }
        res.status(200).json({success:true, data:updatedLesson})
    })
}

const deleteLesson = (req,res)=>{
    const {id} = req.params
    const sql = `delete from schedule where id = ${id}`

    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.affectedRows == 0) return res.status(404).json({success:false,msg:`no lesson with id ${id}`})

        res.status(200).json({success:true, deleted:{id:id}})
    })
}


module.exports = {
    getLesson,
    getLessons,
    createLesson,
    updateLesson,
    deleteLesson
}