//Sergio Matamoros Delgado
//Fecha: 03-10-2021

/*
Realizar un programa que permita cargar dos listas de 3 valores cada una.
Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
(mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un
algoritmo.
*/

let lista1 = [2,2,3];

let lista2 = [2,2,3];


let resultado1=0;
let resultado2=0;

for(let i=0;i<lista1.length;i++)
    resultado1 += lista1[i];

for(let i=0;i<lista2.length;i++)
    resultado2 += lista2[i];

if(resultado1 > resultado2) console.log("La lista 1 es mayor que la lista 2.");
else if(resultado1 < resultado2) console.log("La lista 2 es mayor que la lista 1.");
else if(resultado1==resultado2) console.log("Las listas son iguales");
