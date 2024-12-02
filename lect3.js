//loops
//1.for
for(let i=1;i<=5;i++)
{
    console.log(i);
}


//for-of Loop used to traverse a string or array
let strVal="haha";
for(let val of strVal)
{
    console.log(val);
}


//for-in Loop used to traverse a object
let Student = {
    name:"Sushmita",
    age:22,
    cgpa:8.8,
    isPass:true
};
for(let key in Student)
{
    console.log("key=",key,"value = ",Student[key]);

}



//Strings
let str="haha";
let str2='sush';
console.log("length of string is  ",str2.length);
console.log("1st character of str2 is ",str2[0]);


//Template literals
let specialString=`hahaspecialstring`;
console.log(typeof specialString);
let obj={
    item:"pen",
    cost:10
};
console.log("the cost of ",obj.item," is ",obj.cost," rupees");//one way of showing output
//we can show output in one more way with the help of template literals in the following way:
let output1=`the cost of ${obj.item} is ${obj.cost} rupees`;  //makes code easier to read
console.log(output1);

//template literals is a way to have embedded expressions in strings
//to create strings by doing substitution of placeholders ex: `String text ${expression} haha` is called as string interpolation

console.log(`Hello Sushmita ${1+2+3}`);


//escape characters
console.log("Apna\nCollege")
let str1='haha\nhaha';
console.log(str1.length);// \n is counted as one character only
console.log("Apna\tCollege");


//few String Methods in JS
let str3=" heLLo ";
let str4="hello sush"
console.log(str3);
let newstr=str3.toUpperCase();
console.log(str3);  //note when we use methods on string, it doesnt change the string because strings are immutable in js. instead it returns a new string with modified text or content
console.log(newstr);

console.log("lowercase ",str3.toLowerCase());

console.log(str3.trim()); //removes whitespaces from starting and end of the string

console.log(str4.slice(1,3));
console.log(str4.slice(1));
console.log(str4);

console.log(str3.concat(str4));

console.log(str3.replace('L','l'));

console.log(str3.charAt(1));




