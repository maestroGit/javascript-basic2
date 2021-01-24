//Nivell 1
// Exercici 1
// Crear una funció que imprimeixi en consola el nom d'usuari sent invocada externament i passant el nom com a paràmetre.
function printConsol(param) {
  console.log(param);
}
printConsol("Javier");

//Nivell 2
// Exercici 1
// Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals,
// creant les variables i referenciant en la impressió de l'missatge
let user = "Juan";
let surname = "Ruiz";
console.log(`Nombre: ${user}; Apellido: ${surname}`);

// Exercici 2
// Invocar la funció mitjançant template literals
function show(param) {
  return param;
}
printConsol("Javier");

console.log(`Nombre: ${show("Pepito")}`);

//Nivell 2
// Exercici 1
// Crear una matriu de funcions i invocar cada funció de l'array recursivament perquè imprimeixi per pantalla els números de l'1 a el 10

let bucleOne = () => {
  let num = 0;
  for (i = 0; i < 10; i++) {
    num++;
    console.log(num);
  }
};

let bucleTwo = () => {
  let num = 0;
  for (i = 0; i < 10; i++) {
    num++;
    console.log(num);
  }
};

let bucleThree = () => {
  let num = 0;
  for (i = 0; i < 10; i++) {
    num++;
    console.log(num);
  }
};

let matriuFuncion = [bucleOne(), bucleTwo(), bucleThree()];

let recursiva = (index) => {
  if (index < 2) {
    matriuFuncion[index];
    index = index + 1;
    recursiva(index);
  } else {
    console.log(index + "Fin, caso base");
  }
};
recursiva(0);
//caso base: caso al que toda función recursiva tiene que acabar llegando para dar por resuelto el caso
//caso recursivo: Que suele ser una función que es capaz de autoinvocarse

//- Exercici 2
// Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi per pantalla el nom d'usuari rebut com a paràmetre
let myAnonima = (function (param) {
  console.log(param);
})('javi');

myAnonima;
