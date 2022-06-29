console.log("Person:1 shows ticket");
console.log("Person:2 shows ticket");

let preMovie= async ()=>
{
let person3ticket= new Promise((resolve,reject)=>
{
    setTimeout(() => {
        resolve('ticket');
        
    },3000);
})

let getpopcorn= new Promise((resolve, reject) => {
    resolve(`popcorn`);
})
let getbutter=new Promise((resolve, reject) => {
    resolve(`butter`);
})
let getColdDrinks=new Promise((resolve, reject) => {
    resolve('got the Cold-Drinks lets go');
    
});
let ticket=await person3ticket;
let [popcorn,butter,colddrinks]=await Promise.all([getpopcorn,getbutter,getColdDrinks]);
console.log("person 3 bought ",popcorn,butter,colddrinks);
return ticket;

}
preMovie().then((m)=>console.log(`Person 3 shows${m}`));

