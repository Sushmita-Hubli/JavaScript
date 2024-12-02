//Attribute is the additional information about the element . for example if we have a div tag and if we give it any id then that id is the attribute of div tag

//getting the attribute--> getAttribute(attr)
let div=document.querySelector("div");
console.log(div);

console.log(div.getAttribute("class"));
console.log(div.getAttribute("blabla"));

//setting the attribute--> setAttribute(attr,value)
console.log(div.setAttribute("div","bro"));

//style-->node.style
div.style.background="green";
div.style.fontSize="30px";
div.style.width="800px";



//Inserting elements using DOM Manipulation methods
//first we will create new element
let el1=document.createElement("button");
el1.innerText="click me1!";

let el2=document.createElement("button");
el2.innerText="click me2!";

let el3=document.createElement("button");
el3.innerText="click me3!";

let el4=document.createElement("button");
el4.innerText="click me4!";


div.append(el1);  //adds at the end of node//heremit is div
div.prepend(el2); //adss at the start of node
div.before(el3);//adds before the node(outside)
div.after(el4); //adds after the node(outside)

//Removing elements using DOM Manipulation methods
el3.remove();

//Question
//Create a <p> tag in html, give it a class and some styling.now create new class in CSS and try to append this class to the <p> element..solve this problem using classList
let para=document.querySelector(".para1");
//so now instead of using setAttribute() method, we will use classList bcoz setAttribute method completely overwrites the existing css with new class css but we want to append the new class not overwrite the existing one. so we use classList method
//to add new class in classlist we use .add("newclassname") method and to remove we use .remove("classname");
//now we want to append so we will use .add("classname") method
para.classList.add("newclass");