const form = document.querySelector("form");
const name = form.querySelector("#name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(event){
     event.preventDefault();
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);
    
    const UserInformation={
        name: name.value,
        email: email.value,
        password: password.value
    };
    console.log(UserInformation);
    name.value="";
    email.value="";
    password.value="";
}