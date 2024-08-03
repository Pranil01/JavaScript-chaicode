//for of
//[""][""][""]
//[{}][{}][{}]
//High order array of loops
const arr = [1,2,3,4,5]

for(num of arr)
{
    console.log(num)
}

const greet = "Good Morning sir"
for(const greetings of greet){
    console.log(`greeting as ${greetings}`)
}
//Map
//map stored as key value pair and stores unique values

const map = new Map();
map.set("IN","INDIA")
map.set('uk',"United Kingdom")
map.set("USA","United states of America")
console.log(map)