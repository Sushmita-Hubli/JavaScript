//async and await
//async function always returns a promise

async function hello()
{
    console.log("hello");
}//automatically returns a promise
hello();

//await pauses the execution of its surronding async function until the promise is settled
//await keyword can be used only inside a async function


function api()
{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("weather data");
        resolve(200);
       },2000); 
    });
}

async function getweatherdata()
{
    await api();//1st call
    await api();//2nd call
}
getweatherdata();

//use of async await to resolve getData problem 
//this code is very easy to understand for the new developers and is a very readable code

function getData1(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data ",dataId);
            resolve("success");
        },3000);
    })
    
}

async function  getAlldata()
{
    await getData1(1);
    await getData1(2);
}
getAlldata();


//immediately invoked function expression: iife is a function that is called immediately as soon as it is defined. i mean line no 50 is not necessary to write in this case. it can be executed only once
(async function  getAlldata()
{
    await getData1(3);
    await getData1(4);
})();