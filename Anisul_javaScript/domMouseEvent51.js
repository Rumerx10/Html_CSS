const div = document.querySelector(".mouseEvent");

//click, dblclick,mousedown,mouseup,mouseleave,;

// div.addEventListener("click",function(e){
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log("Inner Html = "+e.target.innerHTML);
//     console.log("Text Content = "+e.target.textContent);
//     console.log("Inner Text = "+e.target.innerText);
// });

// div.addEventListener("dblclick",function(){
//     console.log("Double click");
// });

// div.addEventListener("mousedown",function(){
//     console.log("mouse down");
// });

// div.addEventListener("mouseup",function(){
//     console.log("mouse up");
// });

// div.addEventListener("mouseleave",function(){
//     console.log("mouse leave");
// });

// div.addEventListener("mousemove",function(e){
//     console.log("mouse moved");
//     console.log("clientX = "+e.clientX+", clientY = "+e.clientY);
//     console.log("offsetX = "+e.offsetX+", offsetY = "+e.offsetY);  
// });

// div.addEventListener("mouseover",function(){
//     console.log("mouse over");
// });

const btns = document.querySelectorAll(".btn");
console.log(btns);
// Array.from(btns).map(elemetn=>{
//     elemetn.addEventListener("click",function(e){
//         console.log(e.target.innerHTML);
//     });
// });
//          ______________or_______________
Array.from(btns).map(btn=> 
    btn.addEventListener("click",function(e){
    console.log("clicked");
    console.log(e.target.innerHTML);
}));