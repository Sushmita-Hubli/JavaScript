//null means empty value
//undefined means no value

//var, let and const 

//var can be re-declared and updated. A global scope variable
//in below example, 3 different containers will be formed with the name ex1 which is not a good practice
var ex1="Hello";
var ex1="Jammu";
var ex1=34;


//let cannot be re-declared but it can be updated. A block scope variable. needs not be initialized while declaration
//in below example, only one container of name ex2 will be formed but the value is updated each time new value is stored in ex2
let ex2=23;
ex2="Jammu";
ex2="Abhishekh!";

//const cannot be re-declared or updated. A block scope variable. always needs to be initialized while declaration

