const score = 400;
console.log(score,typeof(score));

//when we declare number as object form then it gives its type in console.
const Num1 = new Number(100) 
console.log("Num1:",Num1);
console.log("Type of NUM1",typeof(Num1.toString()),Num1.toString());
const Num2 = (Num1.toString());//converting NUm to string 
console.log(Num2.length);
//toFixed(1):by using tofixed we get digit after number
console.log(Num1.toFixed(1));
//to precise: it give accurate approx value Value is between {1 to 21},value provided in it up to that 
//values will be ProgressEvent.
const val1= 234.5689
console.log(val1.toPrecision(4));

//toLocaleString(): It is used to print the value with in , as like us standard as default 
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //above provide indian format 

//Math 
console.log(Math)
//abs : It provide absolute value i.e, positive value as output
console.log(Math.abs(-6787));
//round:provides appx. value
console.log(Math.round(67.67));
//ceil : Provide nearest greater value
console.log(Math.ceil(69.78));
//floor: Provide nearest smallest value,
console.log(Math.floor(67.90));
