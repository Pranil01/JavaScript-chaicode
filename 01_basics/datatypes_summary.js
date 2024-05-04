//Primitive : 7 types 
//it also known as call by value i.e, changed in its value can'nt change original value 
//Eg:1] String 2] Number 3]boolean 4]undefined 5]Null 
//6]Symbol:- value to make unique symbol is used  7]Bigint:- value can'nt covered in Number.


//Q1}  javascript is statically typed or dynamically typed language?
//Statically typed means during declaration there must be define datatype of variable and 
// dynamically typed means there is no need to define datatype of variable.
//so in js there is no need to define variable type so it is dynamicaaly typed language.
//typescript is statically typed language for safety

const score = 100;//Number 
const num =100.5;//Number
const isLoggedIn = true; //boolean
const temprature = null ;//null
let email;//undefined  or 
let email1=undefined;//it also undefined
const id = Symbol("123")  //it is symbol
//# Symbol makes every value unique either their values also  same it makes unique them
const id1 = Symbol("123") //here id and id1 have passed same value lets compare their their values
console.log(id===id1);//false
console.log(id==id1);//false

const bigNum = 7558399642n  //bigInt
//Non-Primitive:
//It also known as call by reference
//Eg: 1]Array 2]Objects 3]Functions


const heros = ["Shaktiman","Hatim","Sonpari","JuniorG"] // Aray
let myObj = {
    name : "Pranil", // Object
    age:23,
}

const myFunction = function(){
    console.log("Hello Pranil");
}

// when we have to check the data type of variable then we use typeof 
console.log(typeof(bigNum)); 
//#  when we check the typeof null is object
console.log(typeof(temprature));// object  type 
//hii 



