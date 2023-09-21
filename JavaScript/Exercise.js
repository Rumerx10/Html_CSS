
// document.getElementById("demo1").innerHTML="This is Dynamic text message";
// document.getElementById("demo2").innerHTML="Hello RUme!";
// document.getElementById("upload_btn").onclick=message;

// let a=10, b=20;
// let result=0;
// // ______________________funciton in java script______________________
// function message()
// {
//     let myTxt=document.getElementById("txt_fild").value;
//     document.getElementById("paragraph").innerHTML=myTxt;
// }

// function addition()
// {
//    return a+b;    
// }
// console.log(addition());





// // ______________________Object in java script______________________
// let person =
// {
//     fname:"Kamrul",
//     lname:"Hasan",
//     age:24,
//     height: 5.3,
//     weight:46
// };


// let employee=
// {
//     name:"Rume",
//     id:1810,
//     age:24,
//     basic_salary:50000,
//     profession:"Engineer",

//     bonus: function(){
//         let calculated_bonus=this.basic_salary*(10/100);
//         return calculated_bonus;
//     }

// };

// // ______________________Operation of Object______________________
// console.log(person.fname);
// person.mariatual_status="unmarried";
// console.log(person.mariatual_status);
// delete person.mariatual_status;
// console.log(person.mariatual_status);
// console.log(person.age);

// // ______________________for in loop in javaScript______________________
// for(x in person){
//     console.log(x+": "+person[x]);
// }
// employee.name="Hasan Rume";
// // for(x in employee){
// //     console.log(x+": "+employee[x]);
// // }
// // delete employee.age;
// // console.log(employee.age);


// //______________________Array in java script______________________

// let myArray=["Banana","Mango", "Orange","Goaba"];
// let myArr=[1,2,3,4];

// for(element of myArray){
//     console.log(element);
// }
// for(ele of myArr){
//     console.log(ele);
// }
// console.log(typeof (myArray));

// //______________________Date() in java script______________________


let d=new Date();
console.log(d);

console.log(d.getDate());
console.log(d.getMonth()+1);
console.log(d.getFullYear());
console.log(d.getUTCFullYear());

console.log(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());