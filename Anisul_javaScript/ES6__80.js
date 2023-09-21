console.log("Welcome");


const promise1 = new Promise((resolve,rejecte)=>{
    //let promiseComplete=true;

    //if(promiseComplete){
        setTimeout(()=>{
            resolve(`Pormise 1 is completed.`);
        },2000)
        
    //}
    // else{
    //     rejecte(new Error(`Promise 1 is not completed.`));
    // }
});


const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Pormise 2 completed.`);
    },1000);
    
});

// promise1
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error.message);
// })

// promise2.then((res)=>{
//     console.log(res);
// });

//Promise.all([promise1,promise2]).then(([res1,res2]) => console.log(res1,res2));

Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
})



console.log("End");