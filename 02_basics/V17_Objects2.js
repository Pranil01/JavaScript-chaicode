const obj1 = new Object();  //It gives singleton object
console.log(obj1);
const obj2 = {}
obj2.id=1780;
obj2.name="laptop";
obj2.price="1Lakh";
console.log(obj2)

const regularUser ={
    email:'Pranil@gmail.com',
    userName : {fullName:{
 firstName:"Pranil",
        lastName :"Kalyani"
    }
       
    }
}
// console.log(regularUser.userName.fullName.firstName) //we can acess objects inside objects in such way
//But what if object is empty then so wew use security optional chaining by adding (?)

const tar1={id : 1, name:"book",price:"100"}
const tar2={id : 2, name:"Notebook",price:"50"}
// const tar = {tar1,tar2};
const tar = Object.assign({},tar1,tar2)
console.log(tar);
const tar3 = {...tar1,...tar2}
console.log(tar3)

const user1 = [{
    id:1,
    email:"pranil14@gmail.com"
}]

console.log(user1);