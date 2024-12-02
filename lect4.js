//Arrays
let arr1=[1,2,3,4,"string"]; //array with different type of information
console.log(arr1);
//but generally it is good practice to store only similar type of data inside an array
//for example:
let arr2=[11,22,33,12,134]; //this is a good practice
console.log(arr2); //op will be array as well as length of array will be displayed
console.log(arr2.length)//property gives length of array
console.log(typeof (arr2)); //op is object
console.log(arr2[0])//op will be value at 0th position which is our 1st element of an array
console.log(arr2[5]); //op will be undefined bcoz array index out of bounds
arr2[0]=990;
console.log(arr2[0]);

//arrays are mutable in js whereas strings are immutable in js
console.log("Printing array elements: ")
for(let i=0;i<arr2.length;i++)
{
    console.log(arr2[i]);
}

console.log("Printing array elements using for of loop: ")
for(let i of arr2)
{
    console.log(i);
}

console.log("Printing array elements using for in loop: ")
for(let i in arr2) //i acts like a key
{
    console.log(arr2[i]);
}

let cities=["delhi","MUMbai"];
for(let idx of cities)
{
    console.log(idx.toUpperCase());
}

//practice question
let price=[250,645,300,900,50];//create new array to store final price after applying 10% of offer
//so we cant use for of loop to solve this question bcoz for of loop provides array value and not the index . we need array index to make changes in the array so we will use for loop
for(let pr=0;pr<price.length;pr++)
{
    price[pr]=price[pr]-(price[pr]/10);
}
//printing new price
for(let pr of price)
{
    console.log(pr);
}


//Array Methods -->changes original array coz arrays in js are mutable
//push()-->add to end,pop()-->delete from end and return,toString()-->converts array to string
let fruits=["melon","berries"];
fruits.push("litchi"); //adding single item
console.log("");
console.log(fruits);
fruits.push("mango","papaya","apple");//adding multiple values
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

console.log("");
console.log(fruits);
console.log(fruits.toString());
console.log("");
console.log(arr2.toString());

//concat()-->joins multiple arrays and returns result. it doesnt make changes in original array it just returns new result
console.log(fruits.concat(cities));
console.log(fruits.concat(cities,arr2));

//unshift()-->adds element to start of an array
fruits.unshift("pear");
console.log("");
console.log(fruits);
console.log(fruits.unshift("apricot")); //op will be length of new array
console.log(fruits);

//shift()-->deletes element from the start of an array
fruits.shift();
console.log("");
console.log(fruits);
console.log(fruits.shift());//returns the element which is popped
console.log(fruits);
console.log("");

//slice(startidx,endidx) --> returns a piece of array
console.log(fruits.slice(1,3));//idx 1 to idx=3-1=2
console.log(fruits.slice(1));//idx 1 to end

//splice(startIdx,delcount,new ele1,new ele2....)-->used for adding, deleteing and replacing elements in an array-->also it changes original array
console.log("");
console.log(fruits);
//console.log(fruits.splice(1,2,"grape"));//returns elements which are getting popped
fruits.splice(1,2,"grape");
console.log("fruits after splicing ",fruits);
fruits.splice(0,1,"apricot","pear","watermelon");
console.log("fruits after splicing ",fruits);
//adding element at a position 1 using splice metgod
fruits.splice(1,0,"peru");
console.log(fruits);
//deleting element using splice
fruits.splice(1,1); //1st index vrcha 1 element delete kar
console.log(fruits);
//replacing element using splice
fruits.splice(1,1,"tararara"); //mhnje 1st position vrchya 1 element la delete karun tikde tararara liha
console.log(fruits);
//one more interesting thing here
console.log("\n");
fruits.splice(2); //delets all the elements from index 2 and changes the original array
console.log(fruits);
fruits.splice();//if we dont pass anything inside as the parameter then nothing will be changed and original array remains as it is
console.log("\\n");
console.log(fruits);


