//String
//
const name = "Pranil";
const repoCount = 50;
console.log(name+repoCount+" Value");

//now we use `` instead of " "  cuase of STRING INTERPOLATION.
//## STRING INTERPOLATION:
//we can use other methods with input or other.

console.log(`My name is ${name.toUpperCase()} and repoCount is ${repoCount}`);

//We can declare String by using new keyword.

const user = new String('Anil');
console.log(user);
//here we can get .length as well as key pairs to the the above string.
console.log(user[2]); //key value pairs
console.log(user.length);
//Checks at given position what is present
console.log(user.charAt(1));//i.e, counting starts from 0.
//to check given element is at position then 
console.log(user.indexOf('i'));

//substring 
const name1 = name.substring(2,6); // here includes first value but excludes last value
console.log(name1);

//slice : we can put -ve values.
const name2 = name.slice(-6,4);
console.log(name2);

//trim and replace 
const user1 = "    RamPrakash   ";
//trim
console.log(user1.trim());  // trim removes empty space
const user2 = user1.trim();
//replace : it replaces current value by provided value, if current value is not presnt then it does not work.
const3 = user2.replace('Prakash','Chandra');
console.log("How replace works:",const3);


//includes : It gives is value presnt or not.Its output is in boolean format.
console.log(const3.includes('Ram'));


