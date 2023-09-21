let txt = document.getElementById("txtId");

txt.addEventListener("focus",function(){
    txt.style.backgroundColor="gold";
    txt.style.padding="20px 20px";    
});
txt.addEventListener("blur",function(e){    
    console.log(e.target.value);
    txt.value=e.target.value.toUpperCase();

});
// txt.addEventListener("focusin",function(){
//     console.log("Element FocuseIn.");
// });
// txt.addEventListener("focusout",function(){
//     console.log("Element Focuse Out.");
// });