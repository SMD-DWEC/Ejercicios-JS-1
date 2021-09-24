//Sergio Matamoros Delgado
//Fecha: 24-9-2021

//Enunciado: Escribe un programa que pida una frase y escriba las vocales que aparecen

let input = undefined;
let vocales = undefined;

input = prompt("Escriba una frase");


input = input.toLocaleLowerCase();

document.write('Vocales: ');

//Array de palabras:
let palabrasPermitidas = [
    ['a','e','i','o','u'],
    ['á','é','í','ó','ú'],
    ['ä','ë','ï','ö','ü'],
    ['â','ê','î','ô','û']
]

for(i=0;i<=input.length;i++) {
    if(allowed(input.charAt(i) )){ //input.charAt(i) == palabrasPermitidas 
        console.log(input[i]);
        document.write(`${input[i]}`);
    }
}


function allowed(palabra) {
    for(i=0;i<=palabrasPermitidas.length;i++) {
        console.log(palabrasPermitidas[i])
        if(palabra == palabrasPermitidas[i]) {
            console.log("entra")
            return true;
        }
    }
    return false;
}