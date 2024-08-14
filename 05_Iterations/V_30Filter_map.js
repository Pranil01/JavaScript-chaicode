const coding = ['js','ruby','python','java','cpp']

//foreach  ::  forEach does not return any value
// const values = coding.forEach((item)=>
//     console.log(item)
// )
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]
const num = myNums.filter((nums)=>(nums>4))
console.log(num)

//when ever we use {} return must have to write .
const num1 = myNums.filter((num)=>{
return num >5;
})
console.log(num1)

const num2 = []
myNums.forEach((num)=>{
    if(num>2){
num2.push(num)
    }
})
console.log(num2)

const myBooks = [
    {'id':'1','name':'science','price':'200','edition':'2000'},
    {'id':'2','name':'Math','price':'210','edition':'2000'},
    {'id':'3','name':'English','price':'195','edition':'2001'},
    {'id':'4','name':'History','price':'180','edition':'2002'},
    {'id':'5','name':'Geography','price':'210','edition':'2000'},
    {'id':'6','name':'Marathi','price':'230','edition':'2005'},
    {'id':'7','name':'Hindi','price':'220','edition':'2005'},
    {'id':'8','name':'sanskrit','price':'215','edition':'2004'},
]

const book2 = myBooks.filter((book)=>book.name=='science')
console.log(book2)
const book1 = myBooks.filter((book)=>{
    return book.price>200;
})
console.log(book1)

const book3 = myBooks.filter((bk)=>{
    return bk.price>200 && bk.edition=='2000'
})
console.log(book3)