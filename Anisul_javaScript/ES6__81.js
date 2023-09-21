// const taskOne = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(`Promise 1 completed.`);
//         //reject(`Promise 1 is rejected.`);
//     })
// }

// const taskTwo = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`Promise 2 completed.`);
//         },2000)
//     })
// }
// const taskThree = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(`Promise 3 completed.`);
//     })
// }
// const taskFour = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(`Promise 4 completed.`);
//     })
// }


// taskOne()
//     .then((res) => console.log(res))
//     .then(taskTwo)
//     .then((res) => console.log(res))
//     .then(taskThree)
//     .then((res) => console.log(res))
//     .then(taskFour)
//     .then((res) => console.log(res))
//     .catch((error)=>console.log(error));

const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(`Task____1 is completed.`);
    })
}

const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Task____2 is completed.`);
        },2000)
        
    })
}
const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
        reject(`Task____3 not is completed.`);
    })
}
const taskFour = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(`Task____4 is completed.`);
    })
}

// taskOne()
//     .then((res)=>console.log(res))
//     .then(taskTwo)
//     .then((res)=>console.log(res))
//     .then(taskThree)
//     .then((res)=>console.log(res))
//     .then(taskFour)
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error));

const allTaskes = async () =>{
    try{
        const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();  // const t2 = await taskTwo(t1);______ we can pass values from t1 to t2.
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    }catch(e){
        console.log(e);
    }
}

allTaskes();