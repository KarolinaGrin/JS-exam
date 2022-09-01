/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


const sum = new Function('a', 'b', 'return a + b');

console.log(sum(5, 10));

const susubtraction = new Function('a', 'b', 'return a - b');

console.log(susubtraction(5, 10));

const multiplication = new Function('a', 'b', 'return a * b');

console.log(multiplication(5, 10));

const division = new Function('a', 'b', 'return a / b');

console.log(division(5, 10));