const con = require('../database')

const getSubject = (req,res)=>{
    const {id} = req.params
    const sql = `select * from subjects where id = ${id};`
    
    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.length === 0) return res.status(404).json({success:false,msg:`no subject with id ${id}`})

        res.status(200).json({success:true,data:result})
    })
}

const getSubjects = (req,res)=>{
    con.query('select * from subjects', (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})

        res.status(200).json({success:true,data:result})
    })
}

const createSubject = (req,res)=>{
    const { id, name, semester, kiklos } = req.body
    const sql = `insert into subjects (id, name, semester, kiklos) values (${id}, '${name}', ${semester}, ${kiklos});`

    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})

        const newSubject = {
            id: id,
            name: name,
            semester: semester,
            kiklos: kiklos
        }
        res.status(201).json({success:true, data:newSubject})
    })
}


const updateSubject =  (req,res)=>{
    const {id} = req.params
    const {name, semester, kiklos} = req.body
    
    const sql = `update subjects set name = '${name}', semester = ${semester}, kiklos = ${kiklos} where id = ${id};`
    
    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.affectedRows == 0) return res.status(404).json({success:false,msg:`no subject with id ${id}`})

        const updatedSubject = {
            id: id,
            name: name,
            semester: semester,
            kiklos: kiklos
        }
        res.status(200).json({success:true, data:updatedSubject})
    })
}

const deleteSubject = (req,res)=>{
    const {id} = req.params
    const sql = `delete from subjects where id = ${id}`

    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.affectedRows == 0) return res.status(404).json({success:false,msg:`no subject with id ${id}`})

        res.status(200).json({success:true, deleted:{id:id}})
    })
}


module.exports = {
    getSubject,
    getSubjects,
    createSubject,
    updateSubject,
    deleteSubject
}