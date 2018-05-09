// 1.Write the function printInt(n) taking one parameter 
// n and print all natural numbers from 1 to n in console.

function printInt(n) {
	for(var i=1;i<=n;i++){
		console.log(i);
	}
}

// printInt(5)

// 2.Write the function printIntRev(n) taking one parameter n and  
// print all natural numbers in reverse in console (from n to 1).
function printIntRev(n) {
	for (var i = n; i>=1; i--){
		console.log(i)
	}	
}

// printIntRev(10)

// 3. Write the function checkInput(x) taking one parameter 
// x and return the string ‘number’ if x is a number; 
// return the string ‘string’ if x is a string; 
// and return boolean if x is a boolean. Otherwise returns -1. 
function checkInput(x) {
	// if(typeof x == "number") {
	// 	return typeof x;
	// } else if (typeof x == "string") {
	// 	return typeof x;
	// } else if (typeof x == "boolean") {
	// 	return typeof x;
	// } else {
	// 	return -1;.
	// }
	var type = typeof x;
	// if (type == 'number' || type == 'string' || type == 'boolean') {
	// 	return type
	// } else {
	// 	return -1;
	// }
	switch (type) {
		case "number":
			// statements_1
			return type;
			break;
		case "string":
			// statements_2
			return type;
			break;
		case "boolean":
			// statements_3
			return type;
			break;
		default:
			// statements_def
			return -1;
			break;
	}

}

// console.log(checkInput(null));

//4. Write the function simpleEvenAdding(num) taking a number and add up all the even numbers 
// from 1 to num. 
function simpleEvenAdding(num){
	//simple adding
	var result = 0;
	// for (var i = 1; i <= num; i++){
	// 	if (i % 2 == 0) {
	// 		result += i;
	// 	}
	// }

	for (var i=0;i<=num;i+=2){
		result += i;
	}

	return result;
}

// console.log(simpleEvenAdding(5));

//Write the function letterCapitalize(str) taking a string and 
//capitalize the first letter of each word. The given words will be separated by only one space
function letterCapitalize(str){
	var splitedArray = str.split(" ")

	var newString = "";

	// for(var i=0;i<splitedArray.length;i++){
	// 	newString += " " + splitedArray[i][0].toUpperCase() + splitedArray[i].slice(1);
	// }

	// return newString.slice(1);

	splitedArray.forEach(function(element){
		// statements
		newString += " " + element[0].toUpperCase() + element.slice(1);
	});

	return newString.slice(1);
}

// console.log(letterCapitalize("hello world good morning hi yes"));


//Write the function simpleReverse(str) {(str) 
// taking a string and return the string in reversed order. 
function simpleReverse(str){
	// var myArray = str.split("").reverse();
	// var newString = "";
	// for(var i=0; i< myArray.length; i++) {
	// 	newString += myArray[i];
	// }
	// return newString;
	return str.split("").reverse().join('');
}

// console.log(simpleReverse("welcome"))


// 7. Write the function findDiff(arr) taking an array of numbers as parameter 
// and return the difference between the maximum number and the minimum number 
function findDiff(arr) {

	if(arr.length==0){
		return 0;
	}
	var max = Math.max.apply(null,arr)
	var min = Math.min.apply(null,arr)
	// var max = arr[0];
	// var min = arr[0];
	// for (var i = 0; i< arr.length; i++){
	// 	if(arr[i]>max){
	// 		max = arr[i];
	// 	}

	// 	if(arr[i]<min){
	// 		min=arr[i];
	// 	}
	// }

	return max - min
}

// console.log(findDiff([1,2,200,100,3,30]));

// 8 Write the function timeConvert(num) taking a number as parameter and 
// return the number of hours and minutes the parameter converts to. 
// Separate the number of hours and minutes with a colon.
function timeConvert(num) {
	return parseInt(num / 60) + ":" + num % 60;
}

// console.log(timeConvert(80));

// Write the function findStr(str, long) taking two strings as parameters and 
// return how many str you can find in long. Assume Str is not empty string.
function findStr(str, long){
	// var myArray = long.split("");
	// var counter = 0;
	// for(var i=0;i<myArray.length;i++){
	// 	if(myArray[i] == str) {
	// 		counter++;
	// 	}
	// }

	// return counter;
	// for(var i =0;str.length + i <= long.length;i++) {
	// 	if(long.slice(i,str.length + i) === str) {
	// 		counter++;
	// 	}
	// }
	// return counter;

	return long.split(str).length. - 1
}

console.log(findStr("hi", "hiihhihijiminhihidasdhhi"))

// console.log(findStr("bob", "bobob"))

//10.Write the function selfDividingNumbers(left, right) 
// taking two number bound as parameters and
//  returns an array of every possible self dividing number between 
// them, including the bounds. 
function selfDividingNumbers(left, right) {
	let myArray = [];

	for(let i=left; i<= right;i++){
		if (isSelfDividing(i)){
			myArray.push(i);
		}
	}

	return myArray;
}

function isSelfDividing(num){
	// split num into digits
	var myArray = num.toString()..split("")
	// use num % each digit == 0 to check if they are divisible
	for(let i = 0;i<myArray.length;i++){
		if(num % parseInt(myArray[i]) != 0){
			return false;
		}
	}

	return true;
}

console.log(selfDividingNumbers(5,22));