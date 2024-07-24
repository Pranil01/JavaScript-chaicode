//array
//Type of array in js is Object,We can store hetrogenous data in array,
//as well as they are resizable
//When we create copy of array in js then it is shallow copy

//Shallow and deep?
//shallow copy:Shallow copy of object shares same refernces of properties changes in original value
//deep copy : it doesn't share same refernce of properties original array remains unchanged

const arr1 = [1,2,3,4,5,"Hi","Hello"] //hetrogenous data
console.log(arr1,"arr1")
// console.log(arr1[0])  //gives value at provided position
const ar2 = arr1;
ar2.push(0)//push adds a value at last in array 
// here as we know the array creates shallow copy so we added elemnt in 
// copied variavble it is also get added in original elements 

// console.log(ar2,"&",arr1);

// console.log(arr1.length);  //provide length of array
console.log(arr1.unshift(-1),arr1);//unshift adds elemnt at first position

//pop : It deletes last most element from array
console.log(arr1.pop())

const ar3 = ar2.join()//It converts array in to string
console.log(ar3,typeof(ar3));

//slice and splice
console.log("A",arr1)
const arr2=arr1.slice(1,3) //slice give array positions including 1st and excluding last
console.log('A',arr1,"arr1") //slice does not deletes original 
//splice=It includes first as well as last position so  and cut elements from original
//array
console.log(ar2)
const arrr2 = arr1.splice(1,3)
console.log(arrr2,"arrr2");
console.log(arr1)//splice seprates provided value from original value
//diff between splice and slice is p bole to 1 more so splice includes both start as well as end position but
//slice includes start position and excludes last position



