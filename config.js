
let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "devteam",
    password: "devpwd",
    database: "tareas"
});

con.connect(function (err) {
    console.log("Connected!");
    con.query("DROP TABLE tarea IF EXISTS", function (err, result) {
        if (err) throw err;
        console.log(result)
    });
})



con.connect(function (err) {
    console.log("Connected!");
    con.query("CREATE DATABASE tareas", function (err, result) {
        if (err) throw err;
        console.log("Database created")
    });
})

con.connect(function (err) {
    var sql = "CREATE TABLE tarea (idTarea INT PRIMARY KEY, tarea VARCHAR(255), estado VARCHAR(255), horaInicio DATETIME, horaFinal DATETIME, usuario VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created")
    });
})

