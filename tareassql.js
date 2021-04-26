
let mysql = require('mysql');
let preg = require('./tareas.js');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'devteam',
    password: 'devpwd',
    database: 'tareas'
});

const salir = () => connection.end();

async function crear() {
    crearTarea(await preg.preguntas());
}

const crearTarea = (file) => {
    if (file.Estado.toLowerCase() == 'acabada') {
        file.Hora_finalizacion = Date();
    }
    let sql = `INSERT INTO tarea(idTarea, tarea, estado, horaInicio, horaFinal, usuario) VALUES('${file.idTarea}', '${file.Tarea}', '${file.Estado}', '${file.Hora_inicio}', '${file.Hora_finalizacion}', '${file.Usuario}')`;
    connection.query(sql, function (err, result) {
        if (err) console.log(err);

        // if (err) throw err;
        console.log(result);
    });
};

const listarTareas = () => {
    let sql = `SELECT idTarea, tarea, estado, horaInicio, horaFinal, usuario FROM tarea`;
    connection.query(sql, function (err, result) {
        if (err) console.log(err);

        // if (err) throw err;
        console.log(result);
    });
};

const listarById = (id) => {
    let sql = `SELECT idTarea, tarea, estado, horaInicio, horaFinal, usuario FROM tarea WHERE idTarea = ${id}`;
    connection.query(sql, function (err, result) {
        if (err) console.log(err);

        // if (err) throw err;
        console.log(result);
    });
};

const eliminar = (id) => {
    let sql = `DELETE FROM tarea WHERE idTarea = ${id}`;
    connection.query(sql);
    if (err) console.log(err);

    // if (err) throw err;
    console.log(result);

};

const actualizar = (id, estado, horaFin) => {
    comprobar(id, (callback = (tarea, index) => {
        listaTareas[index].Estado = estado;
        listaTareas[index].Hora_finalizacion = horaFin;
        if (listaTareas[index].Estado.toLowerCase() == 'acabada') {
            listaTareas[index].Hora_finalizacion = Date();
        }
        fs.writeFileSync('tareas.json', JSON.stringify(listaTareas, null, 2));

    }))
};



const comprobar = (id, callback) => {
    let file = false;
    listaTareas.forEach(function (tarea, index) {
        if (tarea.idTarea == id) {
            callback(tarea, index);
            file = true;
        }
    });
    if (file == false) console.log('Este archivo no existe');

};

module.exports = { crear, salir, listarTareas, listarById, eliminar, actualizar };