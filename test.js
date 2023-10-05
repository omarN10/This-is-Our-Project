//testing triggering a function based on condition

let num1 = 10;
let num2 = 20;
let total = num1 + num2;
let trigger1 = () => {
	document.write("testing the total function");
	alert("this line to test the first function");
	console.log(`total is ${num1}+${num2} = ${total}`);
	// return `total is ${num1}+${num2} = ${total}`;
};
let function2 = () => {
	console.log("testing second function");
};

let str1 = "add";

if (str1 == "add") {
	trigger1();
} else {
	function2();
}
