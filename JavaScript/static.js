class Test
{
    static a=10;
    b=20;
    
    static m1()
    {
        console.log("This is Static method.")
    }

    m2()
    {
        console.log("This is non static method.");
    }
           
}

console.log(Test.a);
Test.m1();
console.log("___________________________");
let obj= new Test();
console.log(obj.b);
obj.m2();