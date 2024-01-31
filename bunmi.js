console.log("Hello Bunmi");
// variables
// variables are names used to store data in javascript
// variable declare: var, let, const.
// creating variable
// declarator name, variable name = value
var day = "monday";
let age = 30;
console.log(day);
console.log(age);
const isMarried = false;
// varaible name cannot begin with number, except alphabet neither can it start with any other sign except dollar sign $ and underscore_
// in js we use camelCase method naming convention
const _date = "29/01/2029";
console.log(_date);
let $atmPin = 4223;
console.log($atmPin, isMarried);
// var can be re-declared and reassigned
var bmi = 23.8;
console.log(bmi);//23.8
// redeclaring
var bmi = 22.5;
console.log(bmi);//22.5
// reassigning 
bmi = 21.7;
console.log(bmi);//21.7

// 
// let cannot be re-declared but can be reassigned
let middleName = "bunmi";
console.log(middleName);//bunnmi
// redeclaring 
// let middleName = "omu"

// reassigning 
middleName = "omu"
console.log(middleName);//omu
// const doesnt allow for redeclaration or reassigning
// let isMarried = True;
// isMarried = true;

// DATA TPES IN JAVASCRIPT
// - String
// - Number
// - Boolean
// - null/undefined
// - Array
// - Object
// - BigInt
// - Symbol

// - String
// its not only perculiar to javascript but also in evry other programming language.
// strings are data that are stored inside quotation("") be it single(') or double quote("")
let month = 'january'
console.log(month);

let fruit = "apple";
console.log(fruit);

// Numbers
const gravity = 9.8
const x = "55"
console.log(gravity, typeof gravity);

console.log(bmi+gravity);
console.log(gravity+x);

console.log(x/gravity);
console.log(month/gravity);

// Boolean true/false
console.log(isMarried);
const isLoggedIn = false;

if (isLoggedIn) {
    console.log("welcome to my world");
}

// null/undefined
let food
console.log(food)
food = null;
console.log(food);

// array
// array is a collection of items enclosed in a square bracket
const arr = ["keyboard", 10,false, null, [1,3,4]]
console.log(arr);
const fruits = ["mango", "pawpaw", "banana", "apple"]
console.log(fruits);

//objects
// object is a data structure that stores data in key-value pairs. e.g. key1-value1
const myobj= {
    carbohydrate: "Garri",
    protein: "Beef",
    fatAndOil: "",
    vitamin: "orange",
    water: "watermelon",
    minerals: "Sea food",
}

// task
const bio = {
    firstName: "Idowu",
    lastName: "Bunmi",
    age: 30,
    gender: "female",
    isMarried: true,
    skills: ["proficient in typing", "sales marketing", "fashion design"],
    occupation: "enterprenuer",
address: {
city: "shomolu", 
state: "lagos"}
}

// assigment
// from the object above, print to the console the following:
// full name = "John Doe"
// topskill = "javascript"
// city

// console.log(blard)

// Assignment
// From the object above, print to the console the folloeing:

const fName = bio.firstName
const lName = bio.lastName
const fullName = fName + " " + lName
console.log("Full Name:", fullName);

// string properties and methods 
// properties - length, index
// strings methods-toUpperCase, toLowerCase, concat, split, slice, trim, replace, substring. etc

const sch = "techstudio academy"
const str3 = "My name is ";
const fullStatment = "";
// length
const strLen = sch.length
console.log(strLen);

// index and indexOf
console.log("d in 'techstudio' has index of", sch.indexOf ("d"));
console.log("character at index 7 is",sch[7]);

// toUpperCase/toLowerCase
console.log(sch.toLocaleUpperCase());
console.log(sch.toLowerCase());
// concatination method of strings 
// concat method
const concatStrings = str3.concat(fullName)
console.log(concatStrings);
// plus method
const concatString2 = str3 + fullName
console.log(concatString2);
// template literal
const tem =`Hi there!, ${str3} ${fullName}, i am ${age} years old`
console.log(tem);

// split

console.log(sch.split("e"));

console.log(tem.split(","));

// slice(start, end) 0, 1, 2, etc
console.log(tem.slice(0,30) + "...");
// substrings method 
console.log(tem.substring(0,30) + "...");

// operators
// - arithemetic 
// - assigment
// - comparison
// - logical

// Arithmetic operators +,-,*,**,/,%,++,--
let y = 20;
let z = -10;
let agg = Number(x) + y - z;
console.log(agg);
console.log(x, typeof x);

let a = 20;
let b = 3;
let answer = a % b;
console.log(answer);
 let bring = 25 % 4;
 console.log(bring);

//  assigment operator: =,  +=, -=, /=
// assigment operator are used to assign values to variables
// one single equals to are used to assign variables

const mySiblings = {
    firstBorn: "bunmi",
    secondBorn: " abayo",
    thirdBorn: "rotimi",
    fourthBorn: "monsuru",
    lastBorn: "ramon",
}
console.log(mySiblings);

// += and -= are used for adding and substracting existing variables
let n = 8
console.log(n);
// n = n + 10
n += 10
console.log(n);
// n = n - 20
n -= 20
console.log(n);
// n = n / 2
n /= 2

console.log(n);

// Logical operators: &&, ||, !
const T = true
const F = false
const isAdult = true
console.log(age);
console.log(age >= 28);
// &&: all condition must be true 
if(age >= 35 || isAdult && !isMarried){
    console.log("you can take alcohol");
    // &&(loagical and)
    // console.log(T && T); true
    // console.log(T && F); false
    // console.log(F && T); false
    // console.log(F && F); false
}
// || (logical or)
    // console.log(T || T); true
    // console.log(T || F); true
    // console.log(F || T); true
    // console.log(F || F); false

    // ! (logical not)
let pwd = "mypassword123#";
if(pwd.length >11 && pwd.includes("#")){
    console.log("strong password");
} else{
    console.log("your password is not strong enough");
}
// comparison operator (== loose), ===, (!=, !==,reverse) <, >, <=, >=
// == loose comparison: compares the values of the variables and not data types
console.log(x);
let newNum = 55

console.log(x == newNum);
// === strict compares the values of the variables and thier data types.
console.log(x === newNum);

// math methods: floor, cell, random, min, max, 
// math.floor( works with whole number i.e the number before the whole number, and shows zero)
let num1 = 9.64577
Math.floor(num1)
console.log(Math.floor(num1));

// ceil(math.ceil round up the decimal point to the nearest WHOLE NUMBER and doesnt show zero )
Math.ceil(num1)
console.log(Math.ceil(num1));

// random
Math.random
console.log(Math.random() * 1000000);
const ranNum = Math.random() * 1000000 ;
const OTP = Math.floor(ranNum)
console.log(`Enter your secret code ${OTP} to continue`);

const num = Math.random() * 6;
const dice = Math.ceil(num)
console.log(dice);