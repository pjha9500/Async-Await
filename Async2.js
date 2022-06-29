



console.log("hello");
let post=[
    {title:"post one", body:"This is post one"},
    {title:"post two", body:"this is post two"}
]
function getpost()
{
    setTimeout(() => {
        let output="";
        for(let i=00;i<post.length;i++)
        {
            output+=`<li>${post[i].title}</li>`
        }
        document.body.innerHTML=output;
        
    }, 0);
}
getpost();


async function creatpost(val) {

    let cpost= new Promise ((resolve,reject) => {
        post.push(val);
        resolve();
    })

    await cpost;
    getpost();
    

}
async function deletes()
{
    let del= new Promise((resolve, reject) => {
        setTimeout(() => {
            let length=post.length;
            let result;
            if(length>0)
            {
                post.pop();
                resolve("removed");
            }
            else{
               
                console.log("Array is Empty now");
                resolve();
            }
            
        }, 3000);
    })
    let result=await del;
    
    
    getpost();
    return result;
    
}
creatpost({title:"post three", body:"this is post three"});
deletes().then((m)=>console.log(m));



// creatpost({title:"post three", body:"this is post three"})
// .then(function(){getpost()})
// .catch(error=>console.log(error));
// creatpost({title:"post four", body:"this is post four"})
// .then(getpost)
// .catch(error=>console.log(error));
// creatpost({title:"post five", body:"this is post five"})
// .then(getpost)
// .catch(error=>console.log(error));

// console.log(post.length);



// creatpost({title:"post six", body:"this is post six"})
// .then(function()
// {
//     getpost();
//     deletes();
//     getpost();

// })
// .catch();
