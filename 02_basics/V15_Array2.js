const marvel = ['Iron_man','Doctor_Strange','Hulk','Captain_America',"thor"]
const dc = ['Batman','superman']
// marvel.push(dc)
//push can add array in side array 
console.log(marvel);
marvel.concat(dc)//concat cam also add array inside array
console.log(marvel)

//diffrence between concat and push
//concat doesnot change original arry while push changes original array.

const all_heros = [...marvel,...dc]  //it gives array i.e, single array in provided oder
console.log(all_heros)

const another_arr= [1,2,3,[4,5,6],[6,7,8,[9,1]]]
//to keep above in single array we have method named as flat it provide as it is array by removing []
const real_arr = another_arr.flat(Infinity); 
console.log(real_arr,"real-Arr")

console.log(Array.isArray("PRANIL"))
console.log(Array.from("Pranil"),Array.isArray(Array.from("Pranil"))); //from () converts present elemnt in to array 

console.log(Array.from({name:"Pranil"}))  //name can not be converted in to array so it gives [] array i.e, empty array
//In some cases .from() is not able to break name in to string

const score1=20;const score2= 19; const score3= 19.5;
//.of() creates dingle array from provided elements

console.log(Array.of(score1,score2,score3));


