//single line comment

/*gjgug
jgugug
nbkju
Multiline comment*/

//operators

//Arithematic operators

let a=5;
let b=2;
console.log("a+b = ",a+b);
console.log("a+b ="+(a+b));

console.log("a-b = ",a-b);

console.log("a = ",a,"&b = ",b);

console.log("a*b = ",a*b);

console.log("a/b = ",a/b);  //op is 2.5

//modulus give remainder
console.log("a%b = ",a%b);

//exponentiation (note: this is not a valid operator in java language)
console.log("b raised to 2 = ",b**2);

//unary arithematic operators
console.log(a++); //op 5   //this is so bcoz first the value is printed and then its value is changed
console.log(a--); //op 6
console.log(++b);   //3
console.log(--b);   //2


//Assignment operators (=,+=,-=,*=,/=,%=,**=)
//if left=right , then always value propagates from right to left

//comparison operators -op is always boolean (== equal to , != not equal to , >= greater than or equal to , <= less than or equal to , > greater than , < less than , ===equal to & type , !== not equal to & type)
//diff between == and ===
let num1=5;
let b1="5";
console.log("num1==b1 : ",num1==b1); //op will be true bcoz when we have a number stored in a string , then js first converts it into a number and then compares it with the number a
//but this default behaviour of js is not a good programming practice so we always compare a string and a number with === operator as follows
console.log("num1===b1 : ",num1===b1);//op will be false
//== checks just value whereas === checks value as well as data type
//same is the case with !==


//logical operators(&& , || , !)


//conditional statements(IF, IF-ELSE)
//ternary operators example: let s= age>18?"adult":"not adult";


//alert("hello"); //one time popup
//console.log(prompt("hello")); //used to take user input

//exercise
let m=prompt("Enter a number: ");
if(m%5===0)
{
    console.log("number is a multiple of 5");
}
else
{
    console.log("number is not a multiple of 5");
}




