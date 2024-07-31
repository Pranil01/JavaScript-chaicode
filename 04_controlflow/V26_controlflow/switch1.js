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