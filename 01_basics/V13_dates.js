//1st date i.e, 1 jan 1970: Date calculates in ms

let myDate = new Date();
// console.log(myDate);//date
// console.log(myDate.toString());//it gives day,date and time
// console.log(myDate.toDateString());//it gives day and date
// console.log(myDate.toLocaleDateString());// gives date in format of "MM/DD/YYYY"
// console.log(myDate.toLocaleString());// gives date in format of "MM/DD/YYYY and time"
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(typeof(myDate)) //object


let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

//TimeStamp : above used in js for creating quiz, stopwatch,1st,2nd winner,

let myStamp = Date.now();
console.log(myStamp.toLocaleString());

console.log(Math.floor(Date.now()/1000))