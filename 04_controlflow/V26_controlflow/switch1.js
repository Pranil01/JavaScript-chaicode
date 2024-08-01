// syntax for switch cases
// switch (key){
//    case value:
//     break;

//     default:
//         break;


// }

const month=3;

switch(month){
    case 1:
        console.log("1st month")
        break;

        case 2:
            console.log("2nd month")
            break;
           
            case 3:
                console.log("3rd month")
                break;

                default:  //default is like else in if else
                    console.log("Not month")
                    break;
                
}

//false values:
//false,0,BigInt 0n,-0,"",nll,NAN,undefined

//truth values:
//"0",'false',' ',[],{},function (){}

const userEmail = "pranil.@gmail.com"
if(userEmail.length ===0){
    console.log("Empty mail")
}
else{
    console.log("Not Empty mail")
}

//const empty objects 
const emptyObject ={}
if(Object.keys(emptyObject).length===0)
{
    console.log("Object is empty")
}

//Nullish coalasing operator (??) : null /undefined

let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10; //10
val1 = undefined?? 10;

console.log(val1)


//ternary ooperator and nullish coalasing operator are different

//Ternary operator
//Condition ? true:false

const iceT = 100
iceT >80? console.log("More than 80"):console.log("Less than 80 ")

