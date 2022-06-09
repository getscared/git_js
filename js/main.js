"use strict";

// arr - object
console.log("arr" + " - object");

// 45
console.log(4 + "5");

// 9
console.log(4 + +"5");

// Инкремент и декримент

let incr = 10,
  decr = 10;

// Постпрефиксное добавление 1 или отнимание 1
incr++;
decr--;

console.log(incr);
console.log(decr);

let incr = 10,
  decr = 10;

// Префиксное использование

console.log(++incr);
console.log(--decr);

// Вывод остатка от вычисления

console.log(5 % 2);

// Сравнение

console.log(2 * 4 == 8);
console.log(2 * 4 == "8");

// Строгое сравние. По значению и типу данных

console.log(2 * 4 === "8");
console.log(2 * 4 === 8);

// Оператор И &&

const isCheced = true,
  isClosed = true;

console.log(isCheced && isClosed);

const isCheced = true,
  isClosed = false;

console.log(isCheced && isClosed);

// Оператор ИЛИ ||

const isCheced = true,
  isClosed = false;

console.log(isCheced || isClosed);

const isCheced = true,
  isClosed = true;

console.log(isCheced || isClosed);

// Оператор отрицания !. Меняет true на false и на оборот
