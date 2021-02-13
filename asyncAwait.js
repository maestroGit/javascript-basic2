// Nivell 1
// Exercici 1
/* 
Crea una arrow function getEmpleado que retorni una Promise efectuant la cerca 
en l'objecte employees pel seu id. Crea una altra arrow function getSalario que rebi
com a paràmetre un objecte emprat i retorni el seu salari.
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

const getEmployees = (id) => {
  return new Promise((resolve, reject) => {
    let searchEmployee = employees.find((item) => item.id === id);
    //simlar tiempo asyncronía, como una petición fetch por ejemplo...
    setTimeout(() => {
      resolve(searchEmployee);
    }, 1000);
  });
};

getEmployees(3)
  .then((resolved) => {
    //console.log(resolved);
    return new Promise((resolve, reject) => {
      resolve(resolved);
    });
  })
  .then((resolved) => {
    let id = resolved.id;
    let searchSalario = salaries.find((item) => item.id === id);
    console.log(searchSalario.salary);
  })

  .catch((err) => {
    console.log(err.message);
  });

//- Exercici 2
// Crea una funció asíncrona que, rebent un id d'empleat,
// imprimeixi per pantalla el nom de l'empleat i el seu salari

async function fetchingData(id) {
  const employeesFetched = await getEmployees(id);
  //console.log(employeesFetched,'async');
  let idd = employeesFetched.id;
  let searchSalario = salaries.find((item) => item.id === idd);
  console.log(employeesFetched.name, searchSalario.salary);
}
fetchingData(3);
