const con = require('../database')

const getProfessor = (req,res)=>{
    const {id} = req.params
    const sql = `select * from professors where id = ${id};`
    
    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.length === 0) return res.status(404).json({success:false,msg:`no professor with id ${id}`})

        res.status(200).json({success:true,data:result})
    })
}

const getProfessors = (req,res)=>{
    con.query('select * from professors', (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})

        res.status(200).json({success:true,data:result})
    })
}

const createProfessor= (req,res)=>{
    const { id, last_name, first_name } = req.body
    const sql = `insert into professors (id, last_name, first_name) values (${id}, '${last_name}', '${first_name}');`

    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})

        const newProf = {
            id: id,
            last_name: last_name,
            first_name: first_name
        }
        res.status(201).json({success:true, data:newProf})
    })
}


const updateProfessor =  (req,res)=>{
    const {id} = req.params
    const {last_name, first_name} = req.body

    const sql = `update professors set last_name = '${last_name}', first_name = '${first_name}' where id = ${id};`
    
    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.affectedRows == 0) return res.status(404).json({success:false,msg:`no professor with id ${id}`})

        const updatedProf = {
            id: id,
            last_name: last_name,
            first_name: first_name
        }
        res.status(200).json({success:true, data:updatedProf})
    })
}

const deleteProfessor = (req,res)=>{
    const {id} = req.params
    const sql = `delete from professors where id = ${id}`

    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})
        if (result.affectedRows == 0) return res.status(404).json({success:false,msg:`no professor with id ${id}`})

        res.status(200).json({success:true, deleted:{id:id}})
    })
}


module.exports = {
    getProfessor,
    getProfessors,
    createProfessor,
    updateProfessor,
    deleteProfessor,
}