// let div = document.querySelector("#div");
// let p = document.querySelector("#p");

// div.style.background="gray";
// div.style.color="white";
// div.style.height="100px";
// div.style.width="200px";

// p.addEventListener("dragstart",(e)=>{
//     e.dataTransfer.setData("Text",e.target.id)
// })

// div.addEventListener("dragover",(e)=>{
//     e.preventDefault();
// })

// div.addEventListener("drop",(e)=>{
//    let text = e.dataTransfer.getData("Text");
//    div.appendChild(document.querySelector(text));
//    e.preventDefault();
// })





function currentTime(){
    let d = new Date();
    let shift="";

    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    
    if(h>=12){
        shift=" pm";
    }else{
        shift=" am";
    }
    
    h=h==0 ? h=12:h=h;
    h=h>12 ? h=h-12 : h=h;
    h=h<10 ? h="0"+h: h=h;
    m=m<10 ? m="0"+m: m=m;
    s=s<10 ? s="0"+s: s=s;

    let time=h+":"+m+":"+s+shift;

    let timeFild=document.querySelector("#time");
    timeFild.innerHTML=time;
    setInterval(currentTime,1000);
}
currentTime();


