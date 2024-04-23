import mysql from "mysql"

export const db = mysql.createConnection({
    host: "br404.hostgator.com.br",
    user: "smar0081_calendar_admin",
    password: "V._PfIFBgjz&R95Q",
    database: "smar0081_calendar"
})

//BANCO DE DADOS LOCAL

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "smar0081_calendar"
// })
