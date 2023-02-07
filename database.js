const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "172.17.0.1",
    port: "3306",
    user: "vaggm",
    password: "pass",
    database: "schedule_eee"
})
  
con.connect(function(err) {
    if (err) console.log(err.message)
    else console.log('connected to db')
})

module.exports = con
