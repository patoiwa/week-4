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
If Else
Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/
console.log('Ejercicio 4');
//A
random_a = Math.random();
console.log('El numero aleatorio es: ' + random_a);
if (random_a >= 0.5){
    alert('Greater than 0.5');
}else{
    alert('Lower than 0.5');
}
//B
Age = Math.random() * 100;
console.log('El numero aleatorio es: ' + Age);
if (Age < 2){
    alert('"Bebe"');
}else if ((Age >= 2) && (Age <= 12)){
    alert('"Niño"');
}else if ((Age >= 13) && (Age <= 19)){
    alert('"Adolescente"');
}else if ((Age >= 20) && (Age <= 30)){
    alert('"Joven"');
}else if ((Age >= 31) && (Age <= 60)){
    alert('"Adulto"');
}else if ((Age >= 61) && (Age <= 75)){
    alert('"Adulto mayor"');
}else if (Age >= 76){
    alert('"Anciano"');
}
/*
For
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/
console.log('Ejercico 5');
//A
arrayFor = ['radium', 'rocket', 'javascript', 'web', 'developer']
for (i = 0; i<=4; i++){
    alert(arrayFor[i]);
}
//B
for (i = 0; i<=4; i++){
    arrayFor[i] = arrayFor[i].substring(0,1).toUpperCase() + arrayFor[i].substring(1).toLowerCase()
    alert(arrayFor[i]);
}
//C
sentence = "";
for (i = 0; i<=4; i++){
    if (i<4){
        sentence += arrayFor[i] + "-";
    }else{
        sentence += arrayFor[i];
    }    
}
alert(sentence);
//D
arrayEmpty = [];
for (i = 0; i<=9; i++){
    arrayEmpty[i] = i;
}
console.log('Arreglo de 10 repeticiones: ' + arrayEmpty);
/*
Funciones
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/
console.log('Ejercicio 6');
//A
function suma(a,b){
    return a + b;  
}
console.log('Los numeros son 5 y 6');
a = suma(5,6);
console.log('La suma es: ' + a);
//B
function sumaValidate(a,b){
    if ((typeof a != "number") || (typeof b != "number")){
        alert("Error: at least one of the parameters was not a number");
        return NaN;
    }else{
        return a + b;
    }
}
sumaValidate(6, 'kksjsjsk')
//C
function validate_integer (a){
    if( a % 1 === 0){
        return true;
    }else{
        return false;
    }
}
console.log('el numero 1.5 es entero: ' + validate_integer(1.5)); 
//D
function suma_integer_validate(a,b){
    if ( (typeof(a) === "number") && typeof(b) === "number"){
        if( a % 1 != 0 ){
            alert('Error: first number is not an integer');
            return Math.round(a);
        }else if ( b % 1 != 0 ){
            alert('Error: second number is not an integer');
            return Math.round(b);
        }else{
            return a + b;
        }   
    }else{
        alert("Error: at least one of the parameters was not a number");
        return NaN;
    }
}
suma_integer_validate(1, 1.8);
//E
function suma_integer_validate_v2(a,b){
    if ( (typeof(a) === "number") && typeof(b) === "number"){
        if(!(validate_integer(a))){
            alert('Error: first number is not an integer');
            return Math.round(a);
        }else if (!(validate_integer(b))){
            alert('Error: second number is not an integer');
            return Math.round(b);
        }else{
            return a + b;
        }   
    }else{
        alert("Error: at least one of the parameters was not a number");
        return NaN;
    }
}
suma_integer_validate_v2(1, 1.8);