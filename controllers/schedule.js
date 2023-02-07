const con = require('../database')

const getSchedule = (req,res)=>{
    const {season} = req.query

    let sql = "select subjects.semester as semester, subjects.kiklos as kiklos, schedule.tmima as tmima, schedule.day as day, schedule.hours as hours, " +
                "subjects.name as subject, professors.last_name as prof_last_name, professors.first_name as prof_first_name , schedule.classroom as classroom " +
                "from schedule join subjects on schedule.subject = subjects.id join professors on schedule.professor = professors.id "

    if (season === "spring") {
        sql = sql + "where subjects.semester = 2 or subjects.semester = 4 or subjects.semester = 6 or subjects.semester = 8 " 
    }
    else if (season === "winter") {
        sql = sql + "where subjects.semester = 1 or subjects.semester = 3 or subjects.semester = 5 or subjects.semester = 7 or subjects.semester = 9 " 
    }

    sql = sql + "order by subjects.semester "
    
    con.query(sql, (err, result)=>{

        if (err) return res.status(500).json({success:false,msg:err})

        res.status(200).json({success:true,data:result})
    })
}

module.exports = getSchedule