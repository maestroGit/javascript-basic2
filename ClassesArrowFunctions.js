//Nivell 1
//Exercici 1
//Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.
(() => { console.log( 14 + 6); })();   

//Nivell 2
//Exercici 1
//Crear una arrow function que, rebent un paràmetre,
//retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
let makeObj = (param) => { 
    return {value: param};
}
console.log(makeObj('hola'));

//Exercici 2
//Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat.
//La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. 
//Invocar el mètode decirNombre des de fora de la classe.

class Persona {
    constructor(nom){
        this.nom = nom;
    }
    decirNombre(){
        console.log(this.nom);
    }
};

let humano = new Persona('luis');
humano.decirNombre();

//Nivell 3
//Exercici 1
//Crear una function creadora d'objectes, abstraient la definició de les classes. 
//Invocar-amb diferents definicions.