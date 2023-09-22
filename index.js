// 1. Ways to print JavaScript
// console.log("hello world");
// alert("me");
// document.write("this is document write")


// 2. JavaScript console API
// console.log("hello world", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("this is error");

// 3. JavaScript Variabels
// What are variabels? - Containers to store data values

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// Data typesin JavaScript 

// Number
var num1 = 455;
var num2 = 56.8;

// console.log(num1+num2)

// String
var str1 = "This is a string"
var str2 = "This is also string"

// console.log(str1)
// console.log(str2)

//Objects
var marks = {
    ravi: 34,
    raju: 45,
    harry: 99,

}

// console.log(marks)

// Booleans 

var a = true;
var b = false;

// console.log(a,b);

// var und = undefined;
var und;
console.log(undefined);

var n = null;
// console.log(n);

/*
At a very high level, there are tow type of
Data type in Javascript

1.Primitive data types: undefined, null,Booleans,string,number,symbol
2. Reference data types: Arrays and Objects

*/

var arr = [1,2,"tahir",4,5]

// console.log(arr);

// Operators in JavaScript

// Arithmetic

var a = 100;
var b = 10;
// console.log("The value of a+b", a+b);
// console.log("The value of a-b", a-b);
// console.log("The value of a*b", a*b);
// console.log("The value of a/b", a/b);

// Assingment Operators
var c = b;
// c += 2;
// c -= 2;
c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators

var x = 34;
var y = 56;

// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);

// Logical Operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// finction in Jvascript
// Dry do not repeat yourself

function avg(a,b) {
    c = (a + b)/2;
    return c;
}

c1 = avg(4, 6);
c2 = avg( 14, 16);
// console.log(c1, c2);

// Conditionala in Javascript
var age = 1;

// if - else statement
// if(age > 8){
//     console.log('you are not kid');
// }

// else{
//     console.log('you are kid')
// }

var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for (var i = 0;i<arr.length; i++){
//     console.log(arr[i])
// }

arr. forEach(function(element){
    console.log(element)

})