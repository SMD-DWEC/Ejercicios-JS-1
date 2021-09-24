//Sergio Matamoros Delgado
//Fecha: 24-9-2021

//Enunciado: Escribe un programa que pida una frase y escriba las vocales que aparecen
let input = prompt("Escriba una frase");


input = input.toLocaleLowerCase();

document.write('Vocales: ');


for(let i=0;i<input.length;i++) {
    if(allowed(input.charAt(i) )){
        document.write(`${input[i]}, `);
    }
}

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
            return true;
        }
    }
    return false;
}