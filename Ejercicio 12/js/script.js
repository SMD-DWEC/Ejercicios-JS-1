//Sergio Matamoros Delgado
//Fecha: 24-9-2021

//Enunciado: Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let input = prompt("Escriba una frase");

let vocales = 0;


input = input.toLocaleLowerCase();

document.write('Vocales: ');


for(let i=0;i<input.length;i++) {
    if(allowed(input.charAt(i) )){
        document.write(`${input[i]}, `);
    }
}

document.write('<br><br><br>Nº de vocales: '+vocales);


//Comprueba que la palabra esté en la lista de admitidas, entonces
//devuelve true.
function allowed(palabra) {
    let palabrasPermitidas = [
        'a','e','i','o','u',
        'á','é','í','ó','ú',
        'ä','ë','ï','ö','ü',
        'â','ê','î','ô','û'
    ];

    for(let i=0;i<palabrasPermitidas.length;i++) {
        if(palabra == palabrasPermitidas[i]) {
            vocales++;
            return true;
        }
    }
    return false;
}