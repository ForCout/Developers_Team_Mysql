const inquirer = require("inquirer");
let t = require("./tareasql.js");

function loopMenu() {
  const menu = () => {
    inquirer
      .prompt({
        type: "rawlist",
        name: "opcion",
        message: "Opcion elegida :",
        choices: [
          "Crear",
          "Actualizar",
          "Borrar",
          "Listar todas",
          "Lista por Id",
          "Salir",
        ],
      })

      .then(({ opcion }) => {
        if (opcion === "Crear") {
          t.crear().then(menu);
        } else if (opcion === "Borrar") {
          inquirer
            .prompt({
              name: "id",
              message: "Entra el id?",
              type: "input",
            })
            .then(({ id }) => {
              t.eliminar(id);
              menu();
            });
        } else if (opcion === "Listar todas") {
          t.listarTareas();
          menu();
        } else if (opcion === "Lista por Id") {
          inquirer
            .prompt({
              name: "id",
              message: "Entra el id?",
              type: "input",
            })
            .then(({ id }) => {
              t.listarById(id);
              menu();
            });
        } else if (opcion === "Actualizar") {
          inquirer
            .prompt([
              {
                name: "id",
                message: "Entre el id de la tarea a modificar?",
                type: "input",
              },
              {
                name: "estado",
                message: "Modifique el estado",
                type: "input",
              },
              {
                name: "horaFin",
                message: "Modifique la hora de finalizacion",
                type: "input",
              },
            ])
            .then(({ id, estado, horaFin }) => {
              console.log("Esta es la tarea antes de ser  modificada");
              t.listarById(id);
              t.actualizar(id, estado, horaFin);
              console.log("Esta es la tarea despues de ser modificada");
              t.listarById(id);
              menu();
            });
        }
      });
  };
  menu();
}
loopMenu();