/*
Variables y Operadores
Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/
console.log('Ejercicio 1');
// A
var a1 = 4;
var a2 = 5;
var a3 = a1 + a2;
console.log('La variable 1 es:'+ a1);
console.log('La variable 2 es:'+ a2);
console.log('La suma de las variables es:'+ a3);
// B
var b1 = 'Radium';
var b2 = 'Rocket';
var b3 = b1 + ' ' + b2;
console.log('La variable 1 es:'+ b1);
console.log('La variable 2 es:'+ b2);
console.log('La suma de las variables es:'+ b3);
// C
var c1 = b1.length + b2.length;
console.log('La suma de las letras de las variables es:'+ c1);
/*
Strings
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('Ejercicio 2');
//A
var s1 = 'murcielago';
console.log('La cadena es: ' + s1);
console.log('La cadena en mayuscula:' + s1.toUpperCase()); 
//B
s2 = s1.substring(0,5);
console.log(s2);
//C
s3 = s1.substring(7,10);
console.log(s3);
//D
s4 = s1.substring(0,1).toUpperCase() + s1.substring(1,10).toLowerCase();
console.log(s4);
//E
s5 = 'radium rocket';
console.log('La nueva cadena con espacio en blanco es: ' + s5);
s6 = s5.indexOf(" ");
console.log('La posicion del primer espacio en blanco en la cadena es: ' + s6);
//F
s7 = 'califragilistico espialidoso';
s8 = s7.substring(0,1).toUpperCase() + s7.substring(1,s7.indexOf(" ") + 1).toLowerCase() + s7.substring(s7.indexOf(" ") + 1,s7.indexOf(" ") + 2).toUpperCase() + s7.substring(s7.indexOf(" ") + 2).toLowerCase();
console.log(s8);
/*
Arrays
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
 Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse)
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
console.log('Ejercicio 3');
//A
array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array1[4] + " " + array1[10]);
//B
array1.sort()
console.log(array1);
//C
array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array1.unshift('First');
array1.push('Last');
console.log(array1);
//D
array1.pop();
array1.shift();
//E
array1.reverse();
console.log(array1);
//F
array1 = array1.join('-');
console.log(array1);
//G
array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array1.slice(4,11));
/*
*/


