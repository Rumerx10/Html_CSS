class Animal
{
    constructor(color)
    {
        this.color=color;
    }

    printColor()
    {
        console.log(this.color);
    }
}

class Cat extends Animal
{
    constructor(color,food)
    {
        super(color);
        this.food=food;
    }

    eating()
    {
        console.log("Eating: "+this.food);
    }

    display()
    {
        this.printColor();
        this.eating();
    }
}

d=new Cat("Gray","Fish");
d.display();