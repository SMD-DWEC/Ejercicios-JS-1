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
        //this.leerSueldo();

        window.onload = this.iniciar.bind(this);
    }

    iniciar() {

        let nombres = undefined;
        let sueldos = 0;
        let contadorSueldosBasicos = 0;
        let contadorSueldosAltos = 0;
        

        let i = 0;
        do {
            nombres = prompt("Nombre empleado: ");
            do {
                sueldos = prompt("Sueldo: ");
            } while(!(sueldos > 0) || !(sueldos >= 100));

            //nombres = "Test"+Math.floor(Math.random()*20);
            //sueldos = Math.floor(Math.random()*400)+100;

            this.addEmpleado(nombres,sueldos);
            i++;
        } while(i<=4);
        

        //Recorre los empleados y busca los salarios de los mismos.
        for(let sueldos of this.empleados) {
            if(sueldos["sueldo"] >= 100 && sueldos["sueldo"] <=300) contadorSueldosBasicos++;
            else if(sueldos["sueldo"] > 300) contadorSueldosAltos++;

            console.log(`Nombre: ${sueldos["nombre"]} \nSalario: ${sueldos["sueldo"]}`);
        }

        console.log(`Hay un total de ${contadorSueldosBasicos} empleados que cobran entre 100 y 300$ y un total de ${contadorSueldosAltos} empleados que cobran 300$ o más`);
    }
    //Añade al array de empleados el nombre y el sueldo del mismo
    addEmpleado(nombre, sueldo) {
        this.empleados.push(new Empleados(nombre,sueldo));
    }
}

new App();