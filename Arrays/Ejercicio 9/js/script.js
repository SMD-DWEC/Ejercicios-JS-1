//Sergio Matamoros Delgado
//Fecha: 05-10-2021

/*Realizar el siguiente ejercicio utilizando Arrays asociativo.
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
según su saldo, sabiendo que:
Estado de la cuenta 'Acreedor' si el saldo es >0.
'Deudor' si el saldo es <0.
'Nulo' si el saldo es =0.

b) La suma total de los saldos acreedores.
*/

let datos = {};
let acreedores = 0;


//num cuenta, nombre, saldo.
for(let i=0;i<2;i++) {
    datos["numCuenta"] = prompt("Numero de cuenta: ");
    if(datos["numCuenta"] < 0) {
        console.error("Has ingresado en el número de cuenta un num negativo");
        datos = {};
        break;
    }
    datos["nombre"] = prompt("Nombre: ");
    datos["saldo"] = prompt("Saldo: ");
    
}

for(let dato in datos){
    estadoCuenta();

    console.log(datos)
}

function estadoCuenta(){
    let estado = undefined;

    if (datos["saldo"] > 0) { 
        estado = "Acreedor"; 
        acreedores += datos["saldo"];
    }
    else if (datos["saldo"] < 0) estado = "Deudor";
    else if (datos["saldo"] == 0) estado = "Nulo";
    else estado = "Error";
    

    console.log(`Estado de la cuenta con número ${datos["numCuenta"]}: ${estado}`);
}

console.info(`La suma de los acreeedores es total a: ${acreedores}`);
