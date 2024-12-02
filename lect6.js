//window object: it represents an open window in a browser. It is browser's object not JavaScript's and is automatically created by browser
//it is a global object with lots of properties and methods


//when a web page is loaded,the browser creates a Document Object Model (DOM) of the page
//console.log is used to print what user wants on the screen whereas console.dir is used to print special properties and methods of special objects like document
//window-->object-->html
//dom is tree like structure where each individual box is called as node
console.log(document.body.childNodes[1]);
console.dir(document.body.childNodes[1]);
document.body.style.background="green";


//DOM Manipulation
//1.selecting with id: document.getElementById("myId")
document.getElementById("heading").innerHTML="Hello";
//2.Selecting with class: document.getElementByClassName("myClass")
let classdiv=document.getElementsByClassName("divclass");
console.log(classdiv); //we get html collection as output
console.dir(classdiv);  //we get html collection as output
//3.selecting with tag: document.getElementByTagName("p")
let head=document.getElementsByTagName("h1");
console.log(head);
console.dir(head);
//Query selector
//let queryselector=document.querySelector("myid/myclass/tag");//selects anything based on either class or id or tag name  //returns first element
let querySelector=document.querySelector("p");
console.log("");
console.dir(querySelector);
console.log(querySelector);
//document.querySelectorAll("myclass/myid/tagname") //returns a NodeList
let allele=document.querySelectorAll("p");
console.dir(allele);
console.log(allele);

//using query selector using class name
let classquery=document.querySelectorAll(".divclass");
console.log("");
console.dir(classquery);  //op Nodelist(3)
console.log(classquery);  //op  NodeList(3) [div.divclass, div.divclass, div.divclass]

//using query selector using id name
let idquery=document.querySelector("#heading");
console.log("");
console.log("haha");
console.dir(idquery);  //op h1#heading which further shows the properties and special methods related to it
console.log(idquery);  //op <h1 id="heading">Hello</h1>

//properties for DOM Manipulation
//1.TAG NAME
console.log("");
console.log("haha");
console.log(document.getElementById("heading").tagName); //op H1



//suppose we have div and script in a body . we further have img,h1 in div then we call body as the parent node of div and script . and div is parent node of img,h1,p,div.here img,h1 are child nodes of div but descendants of body. div and script are child nodes of body. Here img and h1 are siblings . similarly , div and script are siblings
//firstChild property: it is the read only property of Node interface .It returns the Node's first child in the tree or returns null if the node has no children.
console.log("");
console.log(document.body.firstChild);
//lastChild is opposite of firstChild property
console.log("");
console.log(document.body.lastChild);
//the DOM tree consists of three types of nodes : 1. text nodes 2. comment nodes  3. element nodes
//inside Dom we will be always working on element nodes only
//we can get children of a node in following way
console.log(document.querySelector("div").children);



//2.innerText: returns the text content of the element and all its children
console.log(document.querySelector("div").innerText);//returns only text content of all the childrens of div element


//3.innerHTML: returns the plain text or HTML contents in the element
console.log(document.querySelector("div").innerHTML);// all along with tags inside the div element will be shown as output


//setting the inner text of an element using the propert two and property three
document.querySelector("div").innerText="abcd";//previous it had h1 , p,p and p so after executing this code, all that will be replaced only with text: abcd
console.log("");
console.log(document.querySelector("div"));

console.log("");
console.log("using innerHTML now");
document.querySelector("div").innerHTML="haha";
console.log(document.querySelector("div"));
console.log("");

//innerHTML can be used to add tags inside your HTML which is not possible using innerText
//innerText returns all text contained by an element and all its child elements. innerHtml returns all text, including html tags, that is contained by an element.


//4.TEXTcONTENT: RETURND TEXTUAL CONTENT EVEN FROM HIDDEN ELEMENTS
console.log("printing hidden element");
console.log(document.getElementById("hiddenele").innerText);//no output is shown
console.log(document.getElementById("hiddenele").textContent);//now the output is visible

//Nodelist works like array
//question is to create 3 divs with same class name and then change the text inside each div using the properties of DOM Manipulation
let divs=document.querySelectorAll(".box");
console.log("");
console.log(divs);
console.log("first div value before changing its content : ",divs[0].innerText)
console.log("first div before changing innerHTML",divs[0]);
console.log("");
console.log(divs[0].innerText="blabla");
console.log("first div ",divs[0]);
console.log(divs[1].innerText="Shivani");
console.log("second div ",divs[1]);
console.log(divs[2].innerText="brombrom");
console.log("third div ",divs[2]);
console.log("");
console.log("printing all divs using for of loop");
for(divi of divs)
{
    console.log(divi);
}





