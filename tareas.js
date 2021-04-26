const inquirer = require("inquirer");
// const fs = require("fs");
// const tareas = fs.readFileSync("tareas.json");
// const listaTareas = JSON.parse(tareas);


const preguntas = () => {
  const p = [
    {
      type: "input",
      name: "idTarea",
      message: "Introduzca id de la tarea",
    },
    {
      name: "Tarea",
      type: "input",
      message: "Introduzca el nombre de la tarea",
    },
    {
      name: "Estado",
      type: "input",
      message: "Introduzca estado de la tarea",
    },
    {
      name: "Hora_inicio",
      default: Date(),
    },
    {
      name: "Hora_finalizacion",
      type: "input",
      message: "Introduzca hora finalizacion",
    },
    {
      name: "Usuario",
      type: "input",
      message: "Introduzca usuario",
    },
  ];

  return inquirer.prompt(p);
};

module.exports = { preguntas};

// async function crear() {
//   crearTarea(await preguntas());
// }

// const crearTarea = (file) => {
//   if (file.Estado.toLowerCase() == "acabada") {
//     file.Hora_finalizacion = Date();
//   }
//   listaTareas.push(file);
//   fs.writeFileSync("tareas.json", JSON.stringify(listaTareas, null, 2), {
//     flag: "w+",
//   });
// };

// const listarTareas = () => {
//   listaTareas.forEach(function (tarea) {
//     console.log(tarea);
//   });
// };

// const listarById = (id) => {
//   comprobar(id,(callback = (tarea) => {
//       console.log(tarea);
//     })
//   );
// };

// const eliminar = (id) => {
//   comprobar(id,(callback = (tarea,index) => {
//       listaTareas.splice(index, 1);
//       fs.writeFileSync("tareas.json", JSON.stringify(listaTareas, null, 2));
//       console.log(`El archivo con id: ${id} ha sido eliminado`);
//     })
//   );
// };

// const actualizar = (id, estado, horaFin) => {
//   comprobar(id,(callback = (tarea,index) => {
//     listaTareas[index].Estado = estado;
//     listaTareas[index].Hora_finalizacion = horaFin;
//     if (listaTareas[index].Estado.toLowerCase() == "acabada") {
//        listaTareas[index].Hora_finalizacion = Date();
//     }
//       fs.writeFileSync("tareas.json", JSON.stringify(listaTareas, null, 2));
      
//   }))
// };



// const comprobar = (id, callback) => {
//   let file = false;
//   listaTareas.forEach(function (tarea, index) {
//     if (tarea.idTarea == id) {
//       callback(tarea, index);
//       file = true;
//     }
//   });
//   if (file == false) console.log("Este archivo no existe");
// };

// module.exports = {
//   preguntas,
//   listarById,
//   eliminar,
//   crear,
//   listarTareas,
//   actualizar,
 
// };
