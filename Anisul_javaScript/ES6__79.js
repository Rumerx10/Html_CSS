// function square(x){
//     console.log(`Square of ${x} : ${x*x}`);
// }
// function higherOrderFunciton(num,callBack){
//     callBack(num);
// }
// higherOrderFunciton(6,square);


const taskOne = (callback)=>{
    console.log("Task__1");
    callback();
}

const taskTwo = (callback)=>{
    setTimeout(()=>{
        console.log("Task__2");
        callback();
    },1200);
    
}
const taskThree = (callback)=>{
    console.log("Task__3");
    callback();
}
const taskFour = (callback)=>{
    console.log("Task__4");
    callback();
}
const taskFive = ()=>{
    console.log("Task__5");
}

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            });
        });
    });
});