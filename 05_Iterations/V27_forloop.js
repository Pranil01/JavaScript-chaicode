//Iteration i.e, loops

for(let index =0;index<10;index++)
{
    const element = index;
    console.log("Index Value:",index)
}

//We can write loop inside loop
//print table 1 to 10;

for(let i=1;i<=10;i++)
{
    // console.log(`Table of : ${i}`)

    for(let j =1;j<=10;j++){
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ["Pranil","Shiv","Som","Swap","Mayur"]
for(i=0;i<myArray.length;i++)
{
    const element= myArray[i]
    console.log(element)
}


//break and continue

for(i=1;i<=10;i++)
{
    if(i==5)
    {
        console.log("Detected 5")
        break;
    }
  
    console.log(i)
}
for(i=1;i<=10;i++)
    {
        if(i==5)
        {
            console.log("Detected 5")
            continue;
        }
      
        console.log(i)
    }