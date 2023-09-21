
function Student(name,id,program,age,cgpa,lang){
    this.name=name;
    this.id=id;
    this.program=program;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display=function(){
        console.log(this.name);
        console.log(this.id);
        console.log(this.program);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);        
    }
}


let student1=new Student("Rume",21303201,"Bcse",24,3.26,["Arabic","English","Bangla"]);
let student2=new Student("Hasan",18106071,"Bsce",23,3.32,["Arabic","English","Bangla"]);
let student3=new Student("Rume",21303201,"EEE",22,3.40,["Arabic","English","Bangla"]);


student1.display();
student2.display();