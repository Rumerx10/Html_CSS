class Student{
    constructor(name,id){
        this.name=name;
        this.id=id;    }

    set myName(name){
        this.name=name;
    }
    get myInfo(){
        return this.id+"     "+this.name;
    }

}

let o1 = new Student("Rume",181);

console.log(o1.id);
console.log(o1.name);

o1.myName="Hasan";
console.log(o1.name);

console.log(o1.myInfo);