let btn = document.querySelector("button");
btn.addEventListener("click",showTime);




function showTime(){
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();

    let time=h+":"+m+":"+s;

    document.querySelector("p").textContent=time;

    setTimeout(showTime,1000);

}