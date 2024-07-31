//if

// if(condition){
    
// }
//<,>,!,==,>=,<=,!=,===
//== : It checks only value not datatype
//But === : It checks both value and datatype
if(2=='2'){
    console.log("executed for double")
}
if(2==='2'){
    console.log("executed for tripple")
}


const target =200;
if(target>100){
    const power = 150;
    console.log(`Power is: ${power}`)
}
// console.log(`Power is: ${power}`)   Power has bloick scope so it can print only within block


//Implisit Scope
const ab =100;
if(ab==100) console.log("Implisit scope")
//if(ab==100) console.log("Implisit scope"),console.log("Hello"); It can also exexute but bad pratice


//we can also use if ,else if,else
//&& used for both should true and || is used to check least one value should be true
userloggedIn = true;
debitcard = true;
if(userloggedIn&&debitcard){
    console.log("User logged in")
}