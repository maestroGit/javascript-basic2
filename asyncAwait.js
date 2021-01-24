// Nivell 1
// Exercici 1
/* 
objectes Empleados i Salarios, creu una arrow function getEmpleado
que retorni una Promise efectuant la cerca en l'objecte 
pel seu id. Creu una altra arrow function getSalario que rebi
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

const getEmpleados = (id) => {
  return new Promise((resolve, reject) => {
    resolve(employees);
  });
};
getEmpleados(2).then((data) => {
  data.forEach((element) => console.log(element));
  //console.log(data)
});

// Exercici 2
/*
Creu una funció asíncrona que, rebent un id d'empleat, 
imprimeixi per pantalla el nom de l'empleat i el seu salari
*/
const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    resolve(salaries);
  });
};
getSalario(2).then((data) => {
  data.forEach((element) => console.log(element));
});

async function showName(id) {
  const nombres = await getEmpleados();
  const salarios = await getSalario();
  for (let item of nombres) {
    if (item.id === id) {
      //console.log(" Y el nombre del id: " + id + " es: " + item.name);
      const salarioId = item.name;
      for (let item of salarios) {
        if (item.id === id) {
          console.log("El salario del id nº: " + id + " es: " + item.salary+".Y su nombre es: "+ salarioId);
          const nombreId = item.salary;
        }
      }
    }
  }
}

showName(3);
