//primitive data type(7)
let age=24;
console.log(typeof(age)); //output is number

let price=22.5;
console.log(typeof(price));//op is number

let name1="Sushmita";
console.log(typeof(name1));//op is string

let x;
console.log("x = "+x);//op is x = undefined
console.log(typeof(x));//op is undefined

let bull=true;
console.log(typeof(bull));//op is boolean

let y=null;
console.log("y = "+y);//op is y = null
console.log(typeof(y));//op is object

let m=BigInt("123");
console.log("m = "+m); // op is m= 123
console.log(typeof(m)); //op is bigint



//non-primitive data types is Object which further has Arrays and Functions

//in Object , the data is stored in key-value pair
/*
{
age:24,
name:"Rohan"
}
*/
const Student={
    name:"Sushmita",
    age:22,
    cgpa:8.8,
    isPass:true
};
console.log(Student);   //op is 
/*
{name: 'Sushmita', age: 22, cgpa: 8.8, isPass: true}
*/
//here age , name are keys and 'Sushmita',22 are values
console.log(typeof(Student));// op is object
console.log("age of student is : "+Student.age);
console.log("age is using diff method than previous is : "+Student["age"]);
Student["age"]=Student["age"]+8;
console.log(Student["age"]);
Student["name"]="Sayali";
console.log(Student["name"]);
console.log(typeof Student);    //op is object
console.log(typeof Student["age"]);  //op is number

//if object is of const type, then we can update the value of its keys 
//but if any data is of const type then we cannot update it

var myString = "A,B,C";var myTextArray = myString.split(',');
console.log(myTextArray);

