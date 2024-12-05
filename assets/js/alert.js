'use strict'



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let total = 0;

for (let key in salaries) {
    total += salaries[key];
}

alert(total);



function multiplyNumeric(obj) {
for (let key in obj) {
    if (typeof obj[key] === 'number') {
    obj[key] *= 2;
    }
  }
}
let menu = {
width: 200,
height: 300,
title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);



let calculator = {
a: 0,
b: 0,
  
read() {
    this.a = +prompt("Введите первое число:", 0);
    this.b = +prompt("Введите второе число:", 0);
},
  
sum() {
    return this.a + this.b;
},
  
mul() {
    return this.a * this.b;
    }
};
  
calculator.read();
alert(calculator.sum());
alert(calculator.mul());




function extractCurrencyValue(str) {
    return Number(str.slice(1));
}
alert(extractCurrencyValue("$120"));





let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert(names.join(', '));


let ages = [
    {age: +prompt("Первое число")},
    {age: +prompt("Второе число")},
    {age: +prompt("Третие число")}
]
let result = ages.reduce((accum, item)=>{
    return accum += item.age;
},0);
let sred = result / ages.length;
alert(sred);




// let user = new Object(); //синтаксис "конструктор объекта"
// let user = {}; //синтаксис "литерал объекта"



// let user = { // объект
//     name: "John", // под ключом "name" хранится значение "John"
//     age: 30 // как с именем
// }



// //получаем свойства объекта:
// alert(user.name);
// alert(user.age)

// delete user.age; //удалить



// let user = {name:"John", age: 30};
// alert("age" in user); // true, user.age есть
// alert("blabla" in user); // false, user.blabla нет


// for (key in object){
//     // тело цикла выполняется для каждого свойства  объекта
// }


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for (let key in user){
//     // ключи
//     alert(key); // name, age, isAdmin
//     // значения ключей
//     alert(user[key]); //John, 30, true
// }


// let user = {
//     name: "John",
//     age: 30
// };

// user.sayHi = function(){
//     alert("Привет!");
// };

// user.sayHi(); // Привет!



// эти объекты делают одно и то же

// user = {
//     sayHi: function(){
//         alert("Привет!")
//     }
// };

// user = {
//     sayHi(){//то же самое что и "sayHi: function(){...}"
//         alert("Привет!")
//     }
// };



// let user = {
//     name: "John",
//     age: 30,

//     sayHi(){
//         //"this" - это "текущий объект"
//         alert(this.name);
//     }
// };
// user.sayHi();

// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`


// function sum (a,b){
//     return a+b;
// }
// alert(`1+2 = ${sum(1,2)}.`); //1+2=3




// let str = `Hello`;
// //получаем первый символ
// alert (str[0]); //H
// alert (str.at(0)); //H

// //получаем последний символ
// alert(str[str.length - 1]); // o
// alert (str.at(-1)); // o




// for (let char of "Hello"){
//     alert(char); // H,e,l,l,o (char - сначала "Н" потом "е", потом "l" и т.д.)
// }




// let str = 'Hi';

// str = 'h' + str[1]; // заменяем строку

// alert (str); //hi



// alert('Interface'.toUpperCase()); //INTERFACE
// alert('Interface'.toLowerCase()); //interface

// alert('Interface'[0].toLowerCase()); // i

// let str = 'Widget with id';

// alert(str.indexOf('Widget')); //0 т.к. она в начале
// alert(str.indexOf('widget')); //-1 т.к. её нет

// alert(str.indexOf("id")); //1 т.к. нашли на позиуии 1 (..idget with id)

// Совпадения
// alert("Widget with id".includes("Widget")); //true

// alert("Hello".includes("Bye")); //false 


// let str = "stringify";
// //'strin', символы 0 до 5 (не включая 5)
// alert (str.slice(0,5));
// //'s', от 0 до 1 (без 1, т.е. позиция 0)
// alert(str.slice(0,1));  


// let str = "stringify";

// 2 одинаковых примера для substring
// alert(str.substring(2,6)); //"ring"
// alert(str.substring(6,2)); //"ring"

// //но не для slice:
// alert(str.slice(2,6)); //"ring"
// alert(str.slice(6,2)); //" " (пустота)


// let str = "stringify";
// //ring, 4 символа начиная с 2 позиции
// alert(str.substr(2,4));



// let fruits = ["Яблоко", 'Апельсин', 'Слива'];


// let fruits = ["Яблоко", 'Апельсин', 'Слива'];

// alert(fruits[0]); 
// alert(fruits[1]);
// alert(fruits[2]);


// fruits[2] = 'Груша';


// let fruits = ["Яблоко", 'Апельсин', 'Слива'];

// alert(fruits.length); // 3

//разные типы значений

// let arr = ['Яблоко', {name:"Джон"}, true, function() {alert('привет');}];

// push() - добавляет элемент в конец.
// const array = [1, 2, 3, 4];
// array.push(12) // 1, 2, 3, 4, 12


// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
// const array = [1, 2, 3, 4];
// array.shift() //2, 3, 4


// pop удаляет последний элемент.
// const array = [1, 2, 3, 4];
// array.pop() // 1, 2, 3


// unshift Добавляет элемент в начало массива.
// const array = [1, 2, 3, 4];
// array.unshift(7) //7, 1, 2, 3, 4


// let arr = ["Яблоко", 'Апельсин', 'Груша'];

// for (let i  = 0; i < arr.length; i++){
//     alert(arr[i]);
// }

// let fruits = ["Яблоко", 'Апельсин', 'Слива'];

//проходит по значениям
// for (let fruit of fruits){
//     alert(fruit);
// }



