window.addEventListener("load",function(){
    console.log("load");
});

window.addEventListener("unload",function(){
    console.log("unload");
});

window.addEventListener("scroll",function(){
    console.log("scroll");
});

window.addEventListener("resize",function(){
    console.log("resize");
    const width= window.outerWidth;
    const height= window.outerHeight;
    console.log(width);
    console.log(height);
});

const details = document.querySelector("details");
details.addEventListener("toggle",function(e){
    console.log("Toggled");
    console.log(e.target.open);    
});