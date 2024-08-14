//The array reduce in JavaScript is a predefined method used to
// reduce an array to a single value by passing a callback function 
//on each element of the array. It accepts a function executed on all
// the items of the specified array in the left-to-right sequence. 
//The returned single value is stored in the accumulator.

const myNums = [1,2,3]
//shopping card
const sum = myNums.reduce(function(acc,current){
    return acc+current;
},0)
console.log(sum)
//arrow

const total = myNums.reduce((acc,curr)=> acc+curr,0)
console.log(total)


const shoppingCart = [
    {
        'item':'js',
        'price':400
    },
    {
        'item':'java',
        'price':500
    },
    {
        'item':'py',
        'price':400
    },
]

const totalCourse = shoppingCart.reduce((acc,pr)=> acc+pr.price ,0)
console.log(totalCourse)