class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("hello, my name is " + this.name);
    }
}

const adam = new Person("Adam", 33);
adam.greet();

const patricia = new Person("Patricia", 25);
patricia.greet();

