//promises is for "eventual" completion of task. It is an object in JS. 
//syntax: let promise=new Promise((resolve,reject)=>{//code})

let promise =new Promise((resolve,reject)=>{
    console.log("i am a promise");//IT IS THE FIRST LINE THAT GETS EXECUTED IN CONSOLE
});
console.log(promise);
/*
when you print object of Promise class we get 

[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
*/
//promise has three states : 1.pending-->result is undefined  2. fullfilled-->promise is fullfilled 3.rejected-->promise is rejected
let promise1 =new Promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve(123);
})//promise gets compulsoryly fulfilled no matter what and promiseResult will be 123 and promiseState will be fulfilled
console.log(promise1);

let promise2=new Promise((resolve,reject)=>{
    console.log("i am a promise");
    reject("haha rejected");//output will be shown in the form of an error message

});
console.log(promise2);//promiseResult will be haha reject and promiseState will be rejected

function getData2(dataId,getnextData)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2 ",dataId);
            resolve("success");
            if(getnextData)
            {
                getnextData();
            }
        },3000);
    })
}
getData2(3);

//usually we get promises we dont create them in web dev. we just need to learn how to use these promises 
//there are two methods to use promises : promise.then((res)=>{...})  , promise.catch((err)=>{...})
//if promise is fullfilled and then we want to do something then we use .then() method on promise object
//if promise is rejected and then we want to do something then we use .catch() method on promise object   


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("getting promise");
        resolve("success");
    });
};
let promise3=getPromise();
promise3.then((res)=>{
    console.log("promise fullfilled successfully!! ",res);
})


const getPromise1=()=>{
    return new Promise((resolve,reject)=>{
        console.log("getting promise");
        reject("rejected");
    });
};
let promise4=getPromise1();
promise4.catch((res)=>{
    console.log("error ",res);
})



function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success1");

        },4000);
    });
}


function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success2");

        },4000);
    });
}

//promise chaining
console.log("fetching data1...");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("fetching data2...");
asyncFunc2().then((res)=>{
        console.log(res);
    });
});

//now solving callbackhell we faced previously
//this makes code more readable than callback method

function getData1(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data ",dataId);
            resolve("success");
        },3000);
    })
    
}

getData1(1).then((res)=>{
    console.log(res);
    getData1(2).then((res)=>{
        console.log(res);
    })
});

getData1(3).then((res)=>{
    getData1(4);
}).then((res)=>{
    getData1(5);
}).then((res)=>{
    console.log("successsushi");
})





