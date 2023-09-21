const input = document.querySelector("#inputId");
const p = document.querySelector("#pId");




input.addEventListener("copy",function(){
    p.innerHTML="You have copied.";
});

input.addEventListener("paste",function(){
    p.innerHTML="You have pasted.";
});

input.addEventListener("cut",function(){
    p.innerHTML="You have cutted.";
});