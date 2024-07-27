//function name should be such as by reading it we know what it do

//... is rest or spread operator depends on functionality
//... by providing it we can get all values : In below it is rest operator
function calculateprice(val1,val2,...num1){
    return num1;
}

//in above case how much variable provided that we take one by one value and remaining values are stored 
//in rest operator
console.log(calculateprice(9,8,1999,2000,2001));

//How to pass object in function look below 

const user = {
    userName:'Pranil',
    age: '21'
}

function handleObject (anyobject){
console.log(`user name is ${anyobject?.userName} and his age is ${anyobject?.age}`)
}

// handleObject(user) or we can directly pass object in above as below
handleObject(
    {
        userName:'Shiv',
        age:'14',
    }
)

//passing of array in function which is also object.

const MyArray = [23,24,25,21,12,95]
function arraypass(anyobject){
console.log(anyobject[2])
}
arraypass(MyArray)//how we pass data 


