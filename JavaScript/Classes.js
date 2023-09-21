


class Student{
    setDetails()
    {
        this.sid=101;
        this.sName="Rume";
        this.grade="A";
    }

    display()
    {
        console.log(this.sid, this.sName, this.grade);
    }
}



let stu=new Student();
stu.setDetails();
stu.display();

