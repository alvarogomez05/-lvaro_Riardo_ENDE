// let nombre = "alvaro";
// const edad = 18;

// let otrouser = "paco";

// alert("HOLA MUNDO DESDE JS " + nombre);

// console.log("HOLA MUNDO DESDE JS PERO EN LA CONSOLA " + (nombre * otrouser))

// for (let index = 0; index < 10; index++) {
//     console.log(otrouser)
// }

// const user= {
//     nombre: "caca",
//     direccion: "palacio 34",
//     sueldo:1550
// }

// console.log("Me llamo "+(user.nombre))
// console.log(`Me llamo  ${user.nombre} vivo en ${user.direccion} y cobro ${user.sueldo + 150 } de los cuales 150 son de horas extra`)

/***************************************************/

// ejercicio 1

// let numero1 = -4
// let numero2 = 5

// if(numero1 < numero2) {
//     console.log("numero1 no es mayor que numero2");
//    }
//    if(numero2 > 0) {
//     console.log("numero2 es positivo");
//    }
//    if(numero1 < 0) {
//     console.log("numero1 es negativo o distinto de cero");
//    }
//    if(numero1+1 != numero2) {
//     console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
//    }


// EJEMPLO
//pedir un lavor
// let num1 = prompt("Introduce un valor");
//  num1 = parseInt(num1);

// let num2 = prompt("otro valor");
//  num2= parseInt(num2);

//  if(typeof num1 === "number" && typeof num2 === "number" ){
//     console.log('Los dos vaores son numericos')
//     if(num1===num2){
//         console.log('los numeros son igules')
//     }else{
//         if(num1 > num2)
//             console.log('El primero es mayor')

//         if(num1 < num2)
//             console.log('El segundo es mayor')
//     }
//  }else{
//     console.log('No tienen el mismo valor')
//     if(typeof num1 !== "numero")
//         console.log('El primero no es un numero')
//     if(typeof num2 !== "numero")
//         console.log('El segundo no es un numero')
//  }

// Ejercicio 2 2. Pedir dos números. Si los valores son numéricos e impares, mostrar por consola los valores
// pares entre ambos números.


// let num1 = prompt("Introduce un valor");
//  num1 = parseInt(num1);

// let num2 = prompt("otro valor");
//  num2= parseInt(num2);


//  if(typeof num1 === "number" && typeof num2 === "number"){
//     if(num1%2 != 0 && num2%2 != 0){

//         for(let index = num1 ; index < num2; index++){
//             console.log(index)
//         }

//     }
//  }


 // Ejercicio 3 con funciones
//  3. Programa que pide 2 números y halla su potencia. La potencia se debe realizar mediante
// productos y debemos asegurarnos de que los valores con los que trabajamos son numéricos
// y positivos.


//  function loadNumber(text) {
//     return parseInt (prompt(text))
// }

//  let base = loadNumber("Introduce la base");
//  let exponente = loadNumber("Introduce el exponente");
//  let acu=1;

//  for( i = 1 ; i <= exponente ; i++){
//     acu*=base;
//  }

//  console.log(acu)


// EJERCICIO 4
// 4. Realizar un programa que pida un número y compruebe si es un valor numérico, positivo y
// menor que 10. Si el valor es válido, mostrar por consola todas las tablas de multiplicar desde
// el 1 hasta el valor introducido.










//FUNCIONES

// //sintaxis de una funcion de flecha para hacer una potencia

// const power = (base,exponente) => {

//     let acu = 1;

//     for( i = 1 ; i <= exponente ; i++){
//         acu*=base;
//      }

//      return acu;
// }

// console.log(`El resultado de elevar ${base} por ${exponente} es ${power(base,exponente)}`)

// //sintaxis de una funcion con "function" para hacer una potencia

// function pow (base, exponente){
//     let acu = 1;

//     for( i = 1 ; i <= exponente ; i++){
//         acu*=base;
//      }

//      return acu;
// }


let edad = [1,2,3,4,5,6,7,8,9,20];

//mostrar de uno en uno el array
for( i =0; i<edad.length; i++){
    console.log(edad[i]);
}

for(const edades of edad){
    console.log(`El contenido es ${edades}`)
}

for(const i in edad){
    console.log(`El contenido de la posicion ${i} es ${edad[i]}`)
}

console.log(edad)

edad[0]=99;

console.log(edad)

let nombre = ["Alvaro","Daniel","Ricardo","Oscar"];

console.log(nombre)

let peso = [7.8,2.7,12.4,9.55,1.12];

console.log(peso)



/******************************/


function loadNumber(text) {
    return parseInt (prompt(text))
}

const array=[];
let acu=0;


const recorrido= (longitud) =>{
    for(i=0;i<5;i++){
        array[i]= loadNumber("Introduce un numero para la posicion "+(i+1))
        acu+=array[i]
      }
}

recorrido(5,"Introduce el valor")

console.log(array)


// for(const arr of array){
//     acu+=arr;
// }

console.log(`La media es ${acu/array.length}`)