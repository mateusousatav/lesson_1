/*Lab 1 — Function Parameters & Return Values
Write a function calculateRectangleArea(length, width) that returns the area of a rectangle.
Then write a function calculateCircleArea(radius) that returns the area of a circle (πr²).
Test cases:
console.log(calculateRectangleArea(5, 10)); // 50
console.log(calculateCircleArea(3)); // 28.27 (approx)

Extension: Add input validation — if any parameter is negative, return "Invalid input".
*/

calculateRectangleArea = (length, width) => {
    if(length < 0 || width < 0) {
        return "Invalid input";
    } else {
        return "The area of the rectangle is: " + (length * width);
    }
}

calculateCircleArea = (radius) => {
    if(radius < 0) {
        return "Invalid input";
    } else {
        return "The area of the circle is: " + (Math.PI * radius * radius);
    }
}

console.log(calculateRectangleArea(5, -10)); // 50
console.log(calculateCircleArea(12)); // ~452.39 

/*Lab 2 — Conditional Logic in Functions
Objective: Use conditionals inside a function to handle multiple cases.
Prompt:
Create a function gradeCategory(score) that returns a letter grade based on this scale:

90–100 → “A”
80–89 → “B”
70–79 → “C”
60–69 → “D”
Below 60 → “F”

Test cases:
console.log(gradeCategory(95)); // "A"
console.log(gradeCategory(72)); // "C"
console.log(gradeCategory(58)); // "F"

Extension: Modify the function to return "Invalid score" if input is not between 0 and 100.
*/

gradeCategory = (score) => {
    (score < 0 || score > 100) ? "Invalid score" : 
    (score >= 90)? "A" : 
    (score >= 80)? "B" :
    (score >= 70)? "C" :
    (score >= 60)? "D" :
    "F";
}

console.log(gradeCategory(95)); // "A"
console.log(gradeCategory(72)); // "C"
console.log(gradeCategory(58)); // "F"  
console.log(gradeCategory(150)); // "Invalid score"

/*Loops & Functions
Objective: Combine loops with functions for repeated actions.
Prompt:
 Write a function countVowels(word) that returns how many vowels (a, e, i, o, u) are in a given word.
Test cases:
console.log(countVowels("hello")); // 2
console.log(countVowels("Javascript")); // 3

Extension: Make the function case-insensitive and handle empty strings gracefully.
*/

countVowels = (word) => {
    if(word.length == 0) {
        return 0;
    }

    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let char1 of word) {
        for(let char2 of vowels) {
            if(char1 == char2) {
                count++;
            }
        }
    }
    return count;
}

console.log(countVowels("2ea ehelelo")); // 6

/*Lab 4 — Arrays & Higher-Order Thinking
Objective: Process arrays with functions.
Prompt:
 Write a function doubleNumbers(numbers) that takes an array of numbers and returns a new array where each number is doubled.
Test cases:
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

Extension: Try rewriting it using map() instead of a for loop.
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, -9, 10, 5, 0];

doubleNumbers = (numbers) => {
    let newArr = new Array(numbers.length);
    for(let i = 0; i < numbers.length; i++) {
        newArr[i] = numbers[i] *2 ;
    }
    return newArr;
}

console.log(doubleNumbers(array));

/*Functions Calling Functions
 Write two functions:
fahrenheitToCelsius(f) → converts Fahrenheit to Celsius
dscribeTemperature(f) → calls fahrenheitToCelsius and returns a message:

Below 0°C → "Freezing!"
0–20°C → "Cold"
21–30°C → "Warm"
Above 30°C → "Hot"

Test cases:
console.log(describeTemperature(32)); // "Freezing!"
console.log(describeTemperature(68)); // "Cold"
console.log(describeTemperature(95)); // "Hot"
*/

fahrenheitToCelsius = (f) => (f - 32) * 5/9;

describeTemperature = (f) => {
    let c = fahrenheitToCelsius(f);
    if(c <= 0) {
        return "Freezing!";
    } else if(c > 0 && c < 10) {
        return "Cold";
    } else if(c >= 21 && c < 30) {
        return "Warm";
    } else {
        return "Hot";
    }
}

console.log(fahrenheitToCelsius(10));
console.log(describeTemperature(10));