//Sergio Matamoros Delgado
//Fecha: 03-10-2021

/*
Desarrollar un programa que permita cargar 5 números enteros y luego nos
informe cuántos valores fueron pares y cuántos impares.
Emplear el operador "%" en la condición de la estructura condicional.
if (valor%2==0)
El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0;
13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.
*/

//Var
let num = [];


for(let i=0;i<5;i++) {
    num[i] = prompt("Numero par " + i);
} 



for(let i=0;i<num.length;i++){
    if(esPar(num[i])) console.log(`El número ${num[i]} es par`);
    else console.log(`El número ${num[i]} es impar`);
}



//Si el numero es par devuelve true, si no, false.
function esPar(num) {
    if(num %2==0) return true; 
    else return false;
}















////////////////////////////////////
//Si el numero es primo devuelve true, si no false.
function esPrimo(num) {
    if(num == 0 || num == 1) return false;
    if(num==4) return false;

    for(let i=2;i<num/2;i++)
        if(num % i ==0)
            return false;

    return true;
}