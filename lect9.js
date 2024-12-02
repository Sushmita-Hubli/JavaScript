const student={
    fullname:"sushmita",
    age:22,
    printmarks: function()
    {
        console.log("name = ",this.fullname); //this.fullname=student.fullname
    }
};

console.log(student);
console.log(student.fullname);
console.log(student.printmarks());

//js object is a entity having state and behavior
//js objects have a special property called prototype.Prototype is a reference to an object
//so whenever we create a js object it has a special property called prototype. and this prototype property is itself a object . means a object has a another object inside it called ad prototype object which has some by default functions and properties
//so all the objects in js inherit the properties and behavior of this prototype object
//for example, when we create a array , and we try to push elements inside the array using push method, we dont write push method to push inside the array it is present by default . this behavior of push is inherited by the array object from the prototype object when an array object is created


//we can create our own prototypes i.e we can set prototype using __proto__
const employee={
    //two ways to define function inside a object
    //first one is written often during programming
    calcTax()
    {
        console.log("tax rate is 10%");
    },
    calcTax2: function()
    {
        console.log("tax rate is 10%");
    }
};

const shivani={
    salary:50000
}
console.log("");
console.log(shivani);
//shivani madhe employee bhettoy aplyala ithe
shivani.__proto__=employee;
console.log(shivani);
console.log(shivani.calcTax());


//if object and prototype have same method, object's method will be used
const sushmita=
{
    salary:80000,
    calcTax()
    {
        console.log("tax is 20%");
    }

}
sushmita.__proto__=employee;

console.log("for sushmita ",sushmita.calcTax());

//class
//class is a program-code template for creating objects. those objects will have some state(variables) and some behaviour (functions) inside it.
class Car{
//constructor
constructor()
{
    console.log("creating new object");
}

    start()
    {
        console.log("start");
    }
    stop()
    {
        console.log("stop");
    }
    setBrand(brand)
    {
        this.brandName=brand; //The this keyword refers to the current instance of the Car class. So, when you call setBrand on an instance of Car, this points to that particular instance.
        //In JavaScript, you can create properties on an object dynamically. This means that if you assign a value to a property that doesn’t yet exist, JavaScript will create that property for you.
//In your setBrand method, when you use this.brandName = brand;, the brandName property is added to the suzuki instance of Car at runtime.
    }
}

let suzuki=new Car();
suzuki.start();
suzuki.stop();
suzuki.setBrand("fortuner");
console.log(suzuki);

class Car1
{
    constructor(brand)
{
    console.log("creating new object");
    this.brand=brand;
}

    start()
    {
        console.log("start");
    }
    stop()
    {
        console.log("stop");
    }

}
let brv=new Car1();  //here brand will be set as undefined coz we've invoked default constructor which doesnt set a brand 
console.log("car1 is ",brv);
let brv2=new Car1("honda");//here brand will be set as honda coz we are calling parameterized constructor
console.log("car 2 is ",brv2);
//properties can be changed later in following way
let brv3=new Car1();
brv3.brand="HONDA!";
console.log("brv 3 is ", brv3);

//inheritance
//passing down properties and methods from parent class to child class with the help of keyword "extends"
class Person{
    constructor()
    {
        this.species="Homo sapiens";
    }
    eat()
    {
        console.log("eat");
    }
    sleep()
    {
        console.log("sleep");
    }
    work()
    {
        console.log("do nothing");
    }
}
class Engineer extends Person
{
   
code()
{
    super.eat();
    console.log("code");
}
work()
{
    console.log("love yourself");
}
}

let sushmita1=new Engineer();

sushmita1.sleep();
sushmita1.code();


//if parent class and child class has asame methods , then the method of child class will get executed this is called as method overriding
sushmita1.work();

//super keyword is used to call the constructor of its parent class to access the parent's properties and methods
class University
{
constructor(uniname)
{
    this.uniname=uniname;
    console.log("this is university");
}
printuniname()
{
    console.log("uninmae is ",this.uniname);
}
}


class College extends University{
constructor(uniname,collegename)
{
    super(uniname);
     this.college=collegename;
    console.log("'This is college");
}
printcollegename()
{
    console.log("college name is ",this.college);
}
}

let a=new College("Northeastern University","College of Engineering");
a.printcollegename();
a.printuniname();

//very imp note: Calling super() is mandatory in JavaScript before using this in a derived (child) class. In Java, it's automatically called if not explicitly written, but in JavaScript, you must explicitly call super() in the constructor of a subclass, whether or not the parent class has a parameterized constructor.
//If you don’t call super() in the child class's constructor, JavaScript will throw a runtime error. JavaScript enforces this because the this keyword in a subclass cannot be used until super() has been called, as it sets up the inheritance chain.
//In JavaScript, calling super() must happen before using this in the constructor of the child class. It does not necessarily have to be the first line, but it must be called before any access to this. JavaScript doesn't require it to be the literal first line, but practically, it must come before any reference to this for the constructor to work correctly.



//error handling with try-catch block
let c=5;
let d=0;
try{
    console.log("c divide by e is ",c/e);

}
catch(err)
{
    console.log(err);
}
//unlike java, in javascript any number/0 is infinity and this is not an error in js
console.log("c divide by d is ",c/d);
console.log("hello");