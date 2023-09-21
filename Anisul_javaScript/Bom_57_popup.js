

// function welcomeMessage(){
//     let h1 = document.createElement("h1");
//     let text;  
//     let userName = prompt("Name: ");
//     if(userName == null || userName==""){
//         text="No name found.";
//     }else{
//         text=userName;
//     }
//     let textNode= document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// }

// welcomeMessage();

//let btn = document.querySelector("button");
// btn.addEventListener("click",show);
//btn.addEventListener("click",time);

// function show(){
    
//     setTimeout(()=>{
//         let p = document.querySelector("p");
//         p.innerHTML="This is setTimeOut() funtion .";
//     },4000);
// }


// function Mytime(){
//     let d=new Date();
//     let h=d.getHours();
//     let m=d.getMinutes();
//     let s=d.getSeconds();

//     if(h>12){
//         h=h-12;
//     } 
//     if(h==0){
//         h==12;
//     }
//     h=(h<10) ? h="0"+ h:h;
//     m=(m<10) ? m="0"+ m:m;
//     s=(s<10) ? s="0"+ s:s;

//     let time=h+":"+m+":"+s;

    
//     document.querySelector("p").innerHTML=time;
//     setTimeout(time,1000);      
// }

// Mytime();

