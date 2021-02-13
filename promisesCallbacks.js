/*
Nivell 1
- Exercici 1
Crear una function que retorni una Promise que invoqui
 la funcion resolve() o bé reject() que rep.
 Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.
 */
const promise = new Promise((resolve, reject) => {
  return 5 > 6 ? resolve("Ok all rigth") : reject("Something is wrong");
});

promise.then(
  (resolved) => {
    console.log(resolved);
  },
  (error) => {
    console.log(error);
  }
);

/*
//Exercici 2
Crear una arrow function que, rebent un paràmetre 
i una function callback, li passi a la funció un missatge o 
un altre (que s'imprimirà per consola) en funció del paràmetre.
*/

const devuelMensaje = (num, callback) => {
  callback(num);
};

const esNum = (parm) => {
  if (typeof parm !== "number") {
    console.log(parm, " this is Not a number");
  } else {
    console.log(parm, " OK, it is a number");
  }
};

devuelMensaje(5, esNum);

/*
Nivell 2
- Exercici 1
Donats els objectes employees i salaries, 
crea una arrow function getEmpleado que retorni una Promise 
efectuant la cerca en l'objecte pel seu id.
*/
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmpleados = (id) => {
  return new Promise((resolve, reject) => {
    let searchEmployee = employees.find((item) => item.id === id);
    if (!searchEmployee) {
      reject(`El empleado con id ${id} no existe`);
    } else {
      resolve(searchEmployee.name);
    }
  });
};

getEmpleados(2).then((data) => {
  console.log(`El empleado es: `, data);
});

/*
- Exercici 2
Creu una altra arrow function getSalario que rebi com a paràmetre 
un objecte emprat i retorni el seu salari.
*/
const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    let data = salaries.find((ite) => ite.id === id);
    if (!data) {
      reject(`El id ${id} no existe`);
    } else {
      resolve(data);
    }
  });
};

getSalario(2).then((data) => {
  console.log(`salario del ${data.id} `, `es `, data.salary);
});

/*
- Exercici 3
Invoqui la primera Promise getEmpleado i posteriorment getSalario, 
niant l'execució de les dues promises.
*/
