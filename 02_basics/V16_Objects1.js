//singleton 
// Object.create : it is used to create singleton object
//singleton means unique object of its own type i.e,when we create object by using constructor is know as singleton 

//object literals
const user1 = {
    name:"Pranil",
    age:24,
    location:'Pune'
}
console.log(typeof(user1));
//object has key and value pair by using key we can acess value bydefault key is an integer type
console.log(user1.name);
console.log(user1['name']);

//write a symbol in type of object

let mysym = Symbol("PK")
let obj1 = {
    company : 'LHL',
    Location:"Mumbai",
    [mysym] : 'HB', //this  is way by which we can declare symbil in form of object
}
console.log(obj1)
obj1.Location="Pune";//here we changing value 
Object.freeze(obj1)//it used to oveerirde on currenyt value
console.log(obj1)