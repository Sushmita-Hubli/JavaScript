//Functions in JS
function myfunc(msg) //here msg is a parameter
{
    console.log(msg);
    console.log("");
}
myfunc(11);
myfunc("Sushmita Hubli"); //here "Sushmita Hubli" is a argument

function add(x,y)
{
    //here x and y (parameters) are local variables i.e they have block scope
    return x+y;
}
console.log(add(1,1));


//Arrow functions:compact way of writing a function. Arrowfunction are part of Modern JS
//syntax
/*
const functionName=(param1,param2 ...)=>{
    //do some work}
*/
const arrowsum=(a,b)=>
{
    return a+b;
};
console.log("");
console.log(arrowsum); //op is function definition which is (a,b)=>{return a+b;}
console.log(arrowsum(2,3));
//it is always not necessary to pass any argument in a arrow function. below is an example
let printhello=()=>
{
    console.log("hello");
}
let printhello1=(msg)=>
    {
        console.log(msg);
    }
    
printhello1("Turkey");
printhello1=22;
console.log(printhello1);

//vowel practice problem
function findnoofvowels(msg)
{
    let count=0;
    for(const alpha of msg)
    {
        if(alpha==='a'||alpha==="e"||alpha==="i"||alpha==="o"||alpha==="u")
        {
            count++;
        }
    }
    return count;
}
console.log(findnoofvowels("aaaeeuhh"));//6
//same using arrow function
const vowelcheck=(msg)=>
{
    let count=0;
    for(let id of msg)
    {
     
       if(id==="a"||id==="e"||id==="i"||id==="o"||id==="u")
        {
            count++;
        } 
    }
    console.log(count);
}
vowelcheck("aaaeeuhh");




//few important array methods frequently used

//forEach loop is used only for arrays
//forEach Loop in Arrays  --> called when we need to perform certain action on every element of the array.
//generally forEach loop can have 3 parameters: which is val(array element),id(index of element) and the array itself
//arr.forEach(callBackFunction)
//Callback  Function:here,it is a function to execute for each element in the array
//callback function is a function which is passed as an argument to another function
//syntax
/*
arr.forEach((val)=>{
    console.log(val);});
*/
//example
let arr=[1,2,3,4,54];
arr.forEach((val)=>  //here val is each value of an array
{
 console.log(val);
});

let cities=["pune","delhi","mumbai"];
cities.forEach((val,idx,arr)=>
{
    console.log(val,idx,arr);
})

cities.forEach((val,idx)=>
    {
        console.log(val,idx);
    })


//Interview quest: what is a Higher order function/METHOD?: Higher order function/method is a function which takes a function as an argument or returns a function as its result. here ForEach is a HOF(hIGHER ORDER FUNCTION/method)

//practice question printing square of each value using foreach loop
arr.forEach((val)=>
{
    console.log(val**2);
})
//another way using arrow function
let calcsquare=(num)=>
{
   console.log(num*num);
}
arr.forEach(calcsquare);

//some important array methods
//map:similar to forEach method but here it returns new result . that is output is a new array
//foreach just calculates some operations and returns whereas map function returns a new array as an output
//even here we can pass 3 arguments which can be value, index or array itself
arr.map((val)=>
{
    console.log(val*2);
});
//returning new array using map function
let newarr=arr.map((value)=>
{
    return value*2;
})
console.log(" ");
console.log(arr);
console.log(newarr);


//filter method-->creates new array of elements that gives true for a condition/filter
//eg.all even elements in an array
let arr1=[2,4,5,7,66,55,45,46];
let newarr1=arr1.filter((value)=>
{
    return value%2===0;
});
console.log("");
console.log("arr1 is ",arr1);
console.log("arr1 after filtering for even numbers is ",newarr1);

//reduce method-->performs some operations and reduces the array to a single value.it returns that single value
let reducedarray=arr1.reduce((res,curr)=>  //here res is result and curr is current value in an array . initially res=element on 0th index of array and curr=element on 1st index of an array 
{
    return res+curr;
});
console.log("reduced value is ",reducedarray);
//finding maximum element of array
let reducedarray1=arr1.reduce((res,curr)=>  //here res is result and curr is current value in an array . initially res=element on 0th index of array and curr=element on 1st index of an array 
{
    return res>curr?res:curr;
});
console.log("max ele using reduce method is",reducedarray1);
