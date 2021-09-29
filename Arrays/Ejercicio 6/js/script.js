//Sergio Matamoros Delgado
//Fecha: 29-9-2021

/*
En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
realizar un programa que lea los sueldos que cobra cada empleado e informe
cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
Además el programa deberá informar el importe que gasta la empresa en sueldos
al personal.
*/

//import {Empleados} from './empleados.js';

class Empleados {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
}


class App {

    constructor() {
        this.empleados = [];
        //this.crearEmpleados(5);
        this.leerSueldo();

        window.onload = this.iniciar.bind(this);
    }

    iniciar() {

        let nombres = undefined;
        let sueldos = 0;

        let i = 0;
        do {
            nombres = prompt("Nombre empleado: ");
            sueldos = prompt("Sueldo: ");

            this.addEmpleado(nombres,sueldos);
            i++;
        } while(i<=4);
        
        this.leerEmpleado();

    }
    //Crea un empleado con un nombre especifico
    addEmpleado(nombre, sueldo) {
        this.empleados.push(new Empleados(nombre,sueldo));
    }

    leerEmpleado(){
        for(let empleados of this.empleados) {
            console.log(empleados);
        }
    }


    /*crearEmpleados(num) {
        for (let i = num; i <= num; i++) {
            this.empleados.push(new Empleados());
        }
    }*/

    leerSueldo() {
        for(let empleado of this.empleados) {
            empleado.sueldo = 100;
        }

    }

}

new App();