class Student
{
    constructor()
    {
        let name,age;
    }

    setName(name)
    {
        this.name=name;
    }
    getName()
    {
        return this.name;
    }

    setAge(age)
    {
        this.age=age;
    }

    getAge()
    {
        return this.age;
    }

}


let obj= new Student();
obj.setName("RUme");
obj.setAge(24);

console.log(obj.getName());
console.log(obj.getAge());
