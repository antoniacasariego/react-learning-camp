/* 
 * Clase 6
 * Ejercicios Prácticos 
 */

// 1: Declara una variable utilizando const con el valor de tu nombre y otra 
// utilizando let con el valor de tu edad. Imprime ambos valores por consola.

const userName = "Antonia";
let age = 21;

console.log(userName);
console.log(age);

// 2: Utiliza un template de string para crear una cadena que incluya tu nombre
// y edad de manera legible. Por ejemplo: "Hola, me llamo Juan y tengo 30 años."

const mensaje = `Hi, my name is ${userName} and I am ${age} years old.`;
console.log(mensaje);

// 3: Crea una función que tome dos números como parámetros y devuelva el
// resultado de sumarlos. Utiliza una arrow function para definir la función.

const sumResult = (num1, num2) => num1 + num2;
console.log(sumResult(5, 10));

// 4: Crea un array de números y utiliza el método map para duplicar cada 
// número del array. Luego, imprime el nuevo array por consola.

const numbers = [1, 2, 3, 4, 5, 6];
const doubles = numbers.map(number => number * 2);
console.log(numbers, doubles);

// 5: Utiliza el método filter para filtrar los números pares del array
// creado en el ejercicio anterior. Imprime el nuevo array por consola.

const even = numbers.filter(number => number % 2 === 0);
console.log(even);

// 6: Crea una función que tome un array de números como parámetro y
// devuelva la suma de todos ellos. Utiliza el método reduce para
// implementar la función.

function reduceF(accumulator, current) {
    return accumulator + current; 
}
const sum = numbers.reduce(reduceF, 0);
console.log(sum);

// 7: Utiliza el operador spread para combinar dos arrays en uno solo.

const first = [10, 20, 30];
const second = [40, 50, 60];
const combine = [...first, ...second];
console.log(combine);

// 8: Crea un objeto con información sobre una película, incluyendo 
// título, género y año de estreno. Utiliza el destructuring para extraer
// esta información en variables separadas

const favoriteMovie = { title: "Her", genre: "Romance/Sci-fi", year: 2013};
const {title, genre, year} = favoriteMovie;
console.log(title, genre, year);

// 9: Crea una función que tome un objeto como parámetro y devuelva una
// cadena con información legible sobre la película. Utiliza templates
// de strings y destructuring para obtener los valores del objeto.

function cinema(movie){
    const {title, genre, year} = movie;
    return `The title of the movie is "${title}", it is a ${genre} film released in ${year}.`;
}
console.log(cinema(favoriteMovie));

// 10: Crea una función que tome un número como parámetro y simule un error
// si el número es negativo. Utiliza try-catch para manejar el error e
// imprimir un mensaje de error por consola.

function tester(number){
    try{
        if(number < 0){
            throw err
        }
    } 
    catch(err){
        console.log("Error: número negativo")
    }
}
tester(-5);
