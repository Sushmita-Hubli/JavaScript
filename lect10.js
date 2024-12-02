//ASYNC WAIT>> PROMISE CHAINS >> CALLBACK HELL


//SYNCHRONOUS: CODE RUNS IN A PARTICULAR SEQUENCE OF INSTRUCTIONS GIVEN IN THE PROGRAM. EACH INSTRUCTION WAITS FOR THE PREVIOUS INSTRUCTION TO COMPLETE ITS EXECUTION

//ASYNCHRONOUS: Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesnt block the code

function hello()
{
    console.log("hell0 fellow");
}
console.log("one");
console.log("two");

setTimeout(hello,1000);//here hello is a callback function

setTimeout(()=>{
    console.log("hello"); 
},4000);//The setTimeout() method calls a function after a number of milliseconds

console.log("three");
console.log("four");

//output till now  is : one,two,three,four,hell0 fellow , hello


//A callback is a function passed as an argument to another function
function sum(a,b)
{
    console.log(a+b);
}
function calculator(a,b,sumCallback)
{
    sumCallback(a,b);
}
calculator(1,2,sum);//here sum is a callback function  . ok so whenever we pass a function as callback we have to make sure we dont pass parenthesis we write only name of the function. bcoz if we write parenthesis , then it means we are executing the function there itself and it wont act like a callback function and will cause an error

//one more Way
calculator(3,3,(a,b)=>{
    console.log(a+b);
})

function getData(dataId)
{
    setTimeout(()=>{
        console.log("data ",dataId);
    },4000);

}
getData(556);

//Callback Hell: nested callbacks stacked below one another forming a pyramid structure(Pyramid of Doom).This style of programming becomes difficult to understand and manage
//lets assume this function returns data along with its id after 2 seconds of searching from the database



function getData1(dataId,getnextData)
{
    setTimeout(()=>{
        console.log("data ",dataId);
        if(getnextData)
        {
            getnextData();
        }
    },3000);
}

getData1(1,()=>{
    getData1(2);
});

//callback hell
getData1(3,()=>{
    getData1(4,()=>{
        getData(5,()=>{
            getData(6,()=>{
                getData(7);
            })
        });
    })
})

//so it becomes very complicated to understand line no 68-77 coz of callback nesting
//callback hells are tackled using promises
