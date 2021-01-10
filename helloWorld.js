console.log("Hello World");
console.log("Hello World");
var someText="Hello World";


/*This method will grab the html 
tag with a specific tag and 
changes the inner html content
*/ 

/*document.getElementById("someText").innerHTML="This is the new text";

//Funstions in javascript
function someThing()
{
	var name= prompt("What is your name?");
	return "Hello "+name;
}

document.getElementById("someText").innerHTML=someThing();
*/

/*
The main difference between var and let
is that is var is function scoped and 
let is bracket scoped.
In other words var is valid inside a 
function and uses the hoisting. 
Whereas, let is bracket scoped and can be
inside a bracket only.
Here is an example.
*/
//This exmple is for explaining var and hoisting.
function someFunction()
{
	/*
	Here javascipt will by default 
	instantiate a var at the begining 
	of the function. This is called 
	hoisting. Javascript will have 
	var i;. This is why var has function
	scope.
	*/
	for(var i=0; i<100; i++)
	{
		console.log(i);
	}
}


function anotherFunction()
{
	/*
	let as said above has a bracket scope.
	That means let cannot be used outside
	the bracket its defined in. Here in this
	var i cannot be used outside the for loop
	or let a outside the if condition. It will
	crash and give the error. 
	*/
	for(let i=0; i<100; i++)
	{
		/*
		NOTE:- let can be used inside if 
		condition since if condition is 
		inside for loop.
		*/ 
		console.log(i);
		if(i==99)
		{
			let a=1;
			console.log(a);
		}
	}
}

//anotherFunction();


//Javascript arrays.
//1. Instantiation
var arr= new Array();	//Way 1
var newArr=[];

//2. Adding elements in the array
for(let i=0; i<10; i++)
{
	arr[i]=i;
	newArr[i]=i;
}

console.log(arr, newArr);

//Common array methods
var num=arr.pop();	//Removes the last element of the array.
console.log(num, arr);

arr.push("Aryan");	//Adds an element to end of the array.
console.log(arr);

console.log(arr.length);	//Gives the length of the array.

console.log(arr.slice(1,11));	//Slicing similar to slice in python.

//Objects in javascript. Basically dictionaries.
//1.Creating an object. You can also write functions in the object as well.
let person=
{
	firstName:"Aryan",
	lastName:"Pandhare",
	age:20,
	employment:"None",
	personInfo: function()
	{
		return this.firstName+"\n"+this.lastName+"\n"+this.age+"\n"+this.employment;
	},
};

//2.Accessing the data from the object.
console.log(person['age']);
console.log(person.firstName);
console.log(person.personInfo());

