const myNums = [1,2,3,4,5,6,7,8,9,10]
//What is map() in JavaScript? In JavaScript, 
//map() is a method of the Array object.
// It creates a new array by calling a function on every element 
//of the original array and storing the results in a new array.
// map() returns the new array, and the original array is unchanged.
const num1 = myNums.map((num)=>(num+10))
console.log(num1)

const num2 = myNums.map((num)=>num*10)
.map((num)=>(num+1))
.filter((num)=>num>50)

console.log(num2)