# JavaScript Regular Expressions Examples

This repository contains JavaScript code snippets demonstrating the use of regular expressions for text pattern matching. Each code snippet focuses on a specific aspect of regular expressions.

## Code Snippets

1. **Match Literal Strings** - Matching a specific string in text.
2. **Match a Literal String with Different Possibilities** - Using the `|` operator to match multiple possibilities.
3. **Ignore Case While Matching** - Using the `/i` flag to make matching case-insensitive.
4. **Extract Matches** - Using `.match()` to extract matched patterns.
5. **Find More Than the First Match** - Using the global search flag, `g`.
6. **Match Anything with Wildcard Period** - Using `.` to match any character.
7. **Match Single Character with Multiple Possibilities** - Using character classes to match vowels.
8. **Match Letters of the Alphabet** - Using character classes to match letters.
9. **Match Numbers and Letters of the Alphabet** - Using character ranges to match numbers and letters.
10. **Match Single Characters Not Specified** - Using the `^` symbol to match characters not specified.
11. **Match Characters that Occur One or More Times** - Using `+` to match characters that occur one or more times.
12. **Match Characters that Occur Zero or More Times** - Using `*` to match characters that occur zero or more times.

## How to Use

You can run each code snippet individually to understand how regular expressions work in JavaScript. Open the JavaScript files in your preferred code editor or execute them in a JavaScript runtime environment.

For example, you can run the first snippet as follows:

```javascript
// Code Snippet 1: Match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1); // this will output true since 'Waldo' is found in the string
```
