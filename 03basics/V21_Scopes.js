//SCopes :
//scopes start with let,var,const

//scope is due to :{}
let num1=100;
if(true){
    let num1=10;
    const num2=20;
    var num3=15;
    console.log("Inner a:",num1)
}
var num3 = 300
console.log(num1)
// console.log(num2)
console.log(num3)//above example tell us that scope of var is global

//why we have to avoid var?
//cause when we use var with same varibles at that time cause problem

//from above we know that let and const has functionlmscope
// but var has global scope


for (let i =1; i<arraypass.length;i++)
{
    let element = arraypass[i];
}
