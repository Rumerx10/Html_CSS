

for(let i=0; i<3; i++){
    document.getElementsByClassName("btn")[i].addEventListener("click",function(){
    let btnText=this.innerHTML;
    document.getElementsByTagName("h1")[0].innerHTML=btnText+" clicked";
    });

}