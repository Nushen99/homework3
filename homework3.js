 //A function that takes at least three arguments and returns the result of some set of operations using those arguments
 const math = function(a,b,c) {
 	const operation = (a/b-c)*3;
 	return operation;
 };



 //A function that takes no arguments and returns something

 const country = function() {
 	return "Armenia";

 };



 //A function that takes arguments, does something but does not return anything

 const addNumbers = function (d,e,f,g,h) {
 	const result= d+e+f+g+h;
 };


 //A function that takes three strings and returns the string that is the longest.
const theLongestString = function(s1,s2,s3) {
	if(s1.lenght>s2.lenght && s1.lenght>s3.lenght)
         return s1;
      if(s2.lenght>s1.lenght && s2.lenght>s3.lenght)
         return s2;
      return s3;
};


//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const numbers = function(numb1,numb2) {
	if(numb1===numb2)
		return 0;
	if(numb1>numb2)
		return 1;
	return -1;
};


// A multiply function (that multiplies the two given arguments together and returns the result)

const multiply = function(arg1,arg2) {
	return arg1*arg2;
};


//A divide function (that divides the first argument by the second and returns the result) 

const divide = function(a,b) {
	return a/b;
};

//A triangleArea function that takes base and height as input and returns the area of a triangle without
const triangleArea = function(base, height) {
	return divide(multiply(base, height), 2);
};

//A function called numLength that takes a number and returns the number of characters in the number
const numLength = function(a) {
   	const b = a + ' ';
   	return b.length - 1;
   };



//A function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1. 
const stringNumber = function(st1, st2, num){
	const lengthTwoStrings = st1.length + st2.length;
	if(lengthTwoStrings > num){
		return(1);
	} else {
		return(-1);
	}
};


//A function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.
const runStuff = function (num1,num2,string) {									 //calculates areas of rectangle || triangle
 	if(string === 'rectangle') {
 		return num1*num2
 	}
 	else if (string ==='triangle'){
 		return triangleArea(num1, num2)
 	}
 	else {return -1}
 };




