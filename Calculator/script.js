user_input = document.querySelector("#display");
buttons = document.querySelectorAll("button")

buttons.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        pressedBtn = e.target.textContent;
        if(pressedBtn === "C" || pressedBtn=== "AC"){
            user_input.innerHTML = "";
        }else if(pressedBtn === "DEL"){
            user_input.innerHTML = user_input.innerHTML.slice(0,-1)
        }else if(pressedBtn === "="){
            user_input.innerHTML = eval(user_input.innerHTML)
        }else if(pressedBtn === "+/-"){
            user_input.innerHTML = Math.abs(eval(user_input.innerHTML))
        }else{
            user_input.innerHTML += e.target.textContent
        }
        user_input.scrollLeft = user_input.scrollWidth;
    })
});