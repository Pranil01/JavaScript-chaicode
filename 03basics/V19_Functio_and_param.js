//function
//If we have to day same work repetedly then we go for function

//Initiation of function

function MyName (){
    console.log("P")
    console.log("r")
    console.log("a")
    console.log("n")
    console.log("i")
    console.log("l")
}
//myName is reference and executed as bellow by giving ()
// MyName()

//function to add two numbers

function addnumbers(num1,num2)
{ 
   console.log(   num1+num2)
}

//parameters and arguments
//at function declaration time we passes parameters and at the time of 
//function call we passes arguments

let result = addnumbers (4,5);
console.log(result)//here is not value 

function add(Num1,Num2){
let result1=Num1+Num2;
console.log("Rushi:")
return result1
//any thing after return wiil be neglected
console.log("pranil")

}
const res1 = add (4,15);
console.log("result : "+res1)


function userName(userName1 = 'sam'){
    if(!userName1){
        console.log("Please enter userName")
        return;
    }
    return `${userName1} just loggedin`;
}
console.log(userName());