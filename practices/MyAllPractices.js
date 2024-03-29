
/* Double or Triple the Word 
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
*/
const doubleOrTripleWord = (word) => {
    if(word.length % 2 === 0)return word.repeat(3);
    else return word.repeat(2);
}
console.log(doubleOrTripleWord("Tech"))
console.log(doubleOrTripleWord("Apple"))
console.log(doubleOrTripleWord(""))
console.log(doubleOrTripleWord(" "))
console.log(doubleOrTripleWord("1"))
console.log(doubleOrTripleWord("22"))   


/* First and Last Word 
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
*/

const firstLastWord = (str) => {
    if (!str.trim()) return '';

    str = str.trim().split(' ');
    return str[0] + (str.length > 1 ? str[str.length - 1] : str[0]);
};

console.log(firstLastWord('Hello World'));     // Output: "HelloWorld"
console.log(firstLastWord('I like JavaScript'));    // Output: "IJavaScript"
console.log(firstLastWord('Hello'));       // Output: "HelloHello"
console.log(firstLastWord(''));         // Output: ""
console.log(firstLastWord('  ')); 


/* Has Vowel 
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 
*/

const hasVowel = (str) => {
    return str.toLowerCase().split('').some(el => 'aeoui'.includes(el)); 
}
console.log(hasVowel(""))
console.log(hasVowel("Javascript"))
console.log(hasVowel("Tech Global"))
console.log(hasVowel("1234"))
console.log(hasVowel("ABC")) 


/* Start Vowel 
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

const startVowel = (str) => str.trim().split('').some(el => 'aeiou'.startsWith( el.toLowerCase()))
console.log(startVowel("Hello")) 
console.log(startVowel("Apple"))
console.log(startVowel("orange"))
console.log(startVowel(""))
console.log(startVowel("  ")) 
console.log(startVowel("123")) 


/* Average of Edges 
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers.
*/

const averageOfEdges = (num, num2, num3) => {
    let min = Math.min(num, num2, num3);
    let max = Math.max(num, num2, num3);
    return (max +  min) / 2;
}
console.log(averageOfEdges(0, 0, 0))
console.log(averageOfEdges(0, 0, 6))
console.log(averageOfEdges(-2, -2, 10)) 
console.log(averageOfEdges(-3, 15, -3))
console.log(averageOfEdges(10, 13, 20))


/* Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
*/

const replaceFirstLast = (str) => {
    str = str.trim();
if(str.trim().length < 2) return '';
return str.at(-1) + str.slice(1, -1) + str.at(0);
}
console.log(replaceFirstLast('  Tech Global '));
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("    A      "))
console.log(replaceFirstLast("A"))


/* Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters
*/

/* Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
*/


/* Count Positive Numbers 
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked. 
*/


/* Find Even Numbers 
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
*/


/* Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers
*/


/* Count Negative Numbers 
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.  
*/


/* Count A 
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  
*/


/* Count Words 
Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string.
*/


/* Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number
*/


/* Count 3 or Less 
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked. 
*/

/* Remove Extra Spaces 
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. 
*/


/* Middle Number 
Write a function named middleInt() which takes three number arguments and return the middle 
number.
*/