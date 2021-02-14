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
    console.log(parm, " This is Not a number");
  } else {
    console.log(parm, " OK, this is a number");
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
      resolve(searchEmployee);
    }
  });
};

getEmpleados(2).then((data) => {
  console.log(('Exercici-1 ->'), data);
});
/*
- Exercici 2
Crea una altra arrow function getSalario que rebi com a paràmetre 
un objecte emprat i retorni el seu salari.
*/
const getSalary = (obje) => {
  const id = obje.id;
  return new Promise((resolve, reject) => {
    let searchSalary = salaries.find((item) => item.id === id);
    //simlar tiempo asyncronía, como una petición fetch por ejemplo...
    setTimeout(() => {
      resolve(searchSalary);
    }, 500);
  });
};

getSalary({id:3})
  .then((resolved) => {
    console.log(('Exercici-2 ->'), resolved);
  })
/*
- Exercici 3
Invoqui la primera Promise getEmpleado i posteriorment getSalario, 
niant l'execució de les dues promises.
*/
const promisesAnidadas = (id) => {
  return new Promise((resolve, reject) => {
    let searchEmployee = employees.find((item) => item.id === id);
    //simlar tiempo asyncronía, como una petición fetch por ejemplo...
    setTimeout(() => {
      resolve(searchEmployee);
    }, 500);
  });
};

promisesAnidadas(2)
.then((resolved) => {
  return new Promise((resolve, reject) => {
    resolve(resolved);
  });
})
.then((resolved) => {
  let id = resolved.id;
  let searchSalario = salaries.find((item) => item.id === id);
  console.log(('Exercici-3 ->'), searchSalario.salary);
})

//Nivell 3
//- Exercici 1
//Fixi un element catch a la invocació de la fase anterior que capturi qualsevol error i l'imprimeixi per consola.
  .catch((err) => {
    console.log(err.message);
  });
 
  
  
 
