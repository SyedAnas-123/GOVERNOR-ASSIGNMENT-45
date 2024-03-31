var string1 = "apple";
var string2 = "banana";
var number1 = 10;
var number2 = 20;
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Test for equality with strings: apple == banana (False)");
console.log(string1 == string2);
console.log("Test for inequality with strings: apple != banana (True)");
console.log(string1 != string2);
// Tests using the lowercase function
console.log("Test using the lowercase function: Is 'APPLE' equal to 'apple' (True)");
console.log("APPLE".toLowerCase() === "apple");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests:");
console.log("10 == 20 (False)");
console.log(number1 == number2);
console.log("10 != 20 (True)");
console.log(number1 != number2);
console.log("10 > 20 (False)");
console.log(number1 > number2);
console.log("10 < 20 (True)");
console.log(number1 < number2);
console.log("10 >= 10 (True)");
console.log(number1 >= number1);
console.log("10 <= 20 (True)");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("Test using 'and' operator: 10 > 5 and 20 < 25 (True)");
console.log(number1 > 5 && number2 < 25);
console.log("Test using 'or' operator: 10 < 5 or 20 > 25 (False)");
console.log(number1 < 5 || number2 > 25);
// Test whether an item is in an array
console.log("Test whether 3 is in the array [1, 2, 3, 4, 5] (True)");
console.log(array.includes(3));
// Test whether an item is not in an array
console.log("Test whether 6 is not in the array [1, 2, 3, 4, 5] (True)");
console.log(!array.includes(6));
