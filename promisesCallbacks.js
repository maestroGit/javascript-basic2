/*
Nivell 1
- Exercici 1
Crear una function que retorni una Promise que invoqui
 la funcion resolve() o bé reject() que rep.
 Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.
 */
function retornPromise(param) {
  if (typeof param !== "number") {
    return Promise.reject("error");
  }
  /* do something that takes time, and then call resolve/reject (callbacks) */
  return new Promise(function (resolve) {
    resolve("retornPromise recibida");
  });
}
retornPromise(5)
  .then((x) => console.log(x))
  .catch(() => console.log("error en retornPromise"));

const promesa = Promise.resolve(2);
console.log(promesa);
promesa
  .then((item) => item + 2)
  .then((item) => Promise.resolve(item + " promesa resuelta"))
  .then((item) => Promise.reject("error en promesa "))
  .then((item) =>
    console.log("Este then no se llama por porque reject llama a catch ")
  )
  .catch((e) => console.log(e));

/*
//Exercici 2
Crear una arrow function que, rebent un paràmetre 
i una function callback, li passi a la funció un missatge o 
un altre (que s'imprimirà per consola) en funció del paràmetre.
*/
const callbackk = function callbackk (parm) {
  if (typeof parm !== "number") {
    console.log(parm);
    console.log(parm+" this is Not a number");
  } else {
    return;
  }
};

const devueleMensaje = (parm, callback) => {
  return callback(parm);
};

devueleMensaje('vvv',callbackk);

/*
Nivell 2
- Exercici 1
Donats els objectes emprats i salaris, 
creu una arrow function getEmpleado que retorni una Promise 
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

/*
- Exercici 2
Creu una altra arrow function getSalario que rebi com a paràmetre 
un objecte emprat i retorni el seu salari.


- Exercici 3
Invoqui la primera Promise getEmpleado i posteriorment getSalario, 
niant l'execució de les dues promises.
*/
