let txtarea= document.getElementById("txtareaId");

console.clear();
txtarea.addEventListener("keydown",function(e){
    console.log("Key Down");
    if(e.repeat){
        alert("Don't repeat!");
    }
});

// txtarea.addEventListener("keypress",function(){
//     console.log("Key Press");
// });

//txtarea.addEventListener("keyup",function(e){   
    //console.log("Key Up");
    //console.log(e.key);
    //console.log(e.keyCode);
    //console.log(e.code);
    //console.log(e.shiftKey);
    //console.log(e.ctrlKey);
    //console.log(e.repeat); 
// });