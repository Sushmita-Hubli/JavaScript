  // Single click button event
  document.getElementById('singleClickBtn').addEventListener('click', function() {
    alert('Single Click: hmm');
});
//one more way for above code //eventhandler code
/*
  document.getElementById('singleClickBtn').onclick=()=>{//code};

*/

// Double click button event
document.getElementById('doubleClickBtn').addEventListener('dblclick', function() {
    alert('Double Click: haha');
});

// Mouse hover event
document.getElementById('hoverDiv').addEventListener('mouseover', function() {
    alert('Mouse hovered!');
});


//inline events is when event is handled in html itself 
//eg <button onclick="console.log('button clicked')">Click me</button>
//priority of js code> priority of inline code

//Event Object: it is a special object that has details of the event . all event handlers have access to the Event Object's properties and methods
//e.target-->tells the target element on which event has happened,e.type-->tells the type of event like click,dblclick,etc..,e.clentX-->tells the horizontal position where even has ocuured,e.clientY-->tells the vertical position where event has occured are few properties of event object


let btnonclick=document.getElementById("onclickbutton");
btnonclick.onclick=()=>
{
    console.log("hello");
}
//if we define same evenhandler two times , then last one will be executed in this case

btnonclick.onclick=(e)=>
{
console.log(e);
console.log(e.target);
console.log(e.type);
console.log(e.clientX);
console.log(e.clientY);
}




//Event Listeners
//best way to handle event is by wring the code as below
/*node.addEventListener(event,callback(){//code});*/

document.getElementById("onclick2btn").addEventListener('click',function(){
    console.log("on click 2 event is executed handler 1");
})

//if we define same evenhandler two times , then both event listener will be executed in sequence
document.getElementById("onclick2btn").addEventListener('click',function(){
    console.log("on click 2 event is executed handler 2");
});

document.getElementById("onclick2btn").addEventListener('click',function(){
    console.log("on click 2 event is executed handler 3");
});



//removing event listener
/*node.removeEventListener(event, callback)*///note, the callback reference should be same to remove
//now we want to remove this handler so we write a constant method and then call it inside the onclick method so it becomes easy for us to remove this event in future
const handler4=()=>
{
    console.log("on click 2 event is executed handler 4");

}
document.getElementById("onclick2btn").addEventListener('click',handler4);

    //removing 
    document.getElementById("onclick2btn").removeEventListener('click',handler4);



    //practice question

    /*
    let currmode="light";
let modebtn=document.getElementById("modechange");
modebtn.addEventListener('click',function(){
   if(currmode==="light")
   {
       document.body.style.background="black";
       currmode="dark";
   }
   else if(currmode==="dark")
   {
    document.body.style.background="white";
    currmode="light";
   }
})
*/

let currmode1="light";
let modebtn2=document.getElementById("changemode2");
modebtn2.addEventListener('click',function()
{
    if(currmode1==="light")
    {
        document.body.classList.remove("light"); 
        document.body.classList.add("dark")
        currmode1="dark";
    }
    else if(currmode1==="dark")
    {
        document.body.classList.remove("dark"); //it is important to remove a existing class before adding a new class in order to see the output
        document.body.classList.add("light")
        currmode1="light";
    }
})

