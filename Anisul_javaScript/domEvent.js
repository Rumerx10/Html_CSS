// console.clear();
// let inp=document.querySelector("input[name=inpName]");
// inp.addEventListener("change",function(event){
//     console.log(event);
//     console.log(event.target.className);
//     console.log(event.target.id);
//     console.log(event.target.name);
//     console.log(event.type)
//     console.log(event.target.type);
//     console.log(event.target.value);
// });

let checkBoxs = document.querySelectorAll("input[type=checkbox]");
console.log(checkBoxs);

Array.from(checkBoxs).map(checkBox=>{
    checkBox.addEventListener("change",function(e){
        if(e.target.checked){
            console.log(e.target.value);
        }
    });
})

// function checkBoxHandler(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }
