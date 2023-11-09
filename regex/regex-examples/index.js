// Code Snippet 1: Match a Literal String
const waldoIsHiding = "Somewhere Waldo is hiding in this text.";
const waldoRegex = /Waldo/;
console.log(waldoRegex.test(waldoIsHiding));  // This will output true since 'Waldo' is found in the string

// Code Snippet 2: Match a Literal String with Different Possibilities
const text1 = "James has a pet cat.";
const text2 = "Dogs are great pets.";
const petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(text1)); // This will output true since one of the options in the regex is found in the string
console.log(petRegex.test(text2)); // This will output true since one of the options in the regex is found in the string

// Code Snippet 3: Ignore Case While Matching (using 'i' flag)
const myString1 = "freeCodeCamp";
const fccRegex = /freecodecamp/i;
console.log(fccRegex.test(myString1)); // This outputs true and ignores case sensitivity

// Code Snippet 4: Extract Matches using .match()
const extractStr = "Extract the word 'coding' from this string.";
const codingRegex = /coding/;
console.log(extractStr.match(codingRegex));

// Code Snippet 5: Find More Than the First Match using the 'g' flag
const twinkleStar = "Twinkle, twinkle, little star";
const starRegex = /twinkle/ig;
console.log(twinkleStar.match(starRegex));

// Code Snippet 6: Match Anything with Wildcard Period (.)
const exampleStr = "Let's have fun with regular expressions!";
const unRegex = /.un/;
console.log(unRegex.test(exampleStr));

// Code Snippet 7: Match Single Character with Multiple Possibilities
const quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
const vowelRegex = /[aeiou]/ig;
console.log(quoteSample1.match(vowelRegex));

// Code Snippet 8: Match Letters of the Alphabet
const quoteSample2 = "The quick brown fox jumps over the lazy dog.";
const alphabetRegex = /[a-z]/ig;
console.log(quoteSample2.match(alphabetRegex));

// Code Snippet 9: Match Numbers and Letters of the Alphabet
const quoteSample3 = "Blueberry 3.141592653s are delicious.";
const myRegex3 = /[h-s2-6]/ig;
console.log(quoteSample3.match(myRegex3));

// Code Snippet 10: Match Single Characters Not Specified
const quoteSample = "3 blind mice.";
const myRegex4 = /[^aeiou0-9]/ig;
console.log(quoteSample.match(myRegex4));

// Code Snippet 11: Match Characters that Occur One or More Times
const difficultSpelling = "Mississippi";
const myRegex2 = /s+/g;
console.log(difficultSpelling.match(myRegex2));

// Code Snippet 12: Match Characters that Occur Zero or More Times
const soccerWord = "gooooooooal!";
const gPhrase = "gut feeling";
const goRegex = /go*/;
console.log(soccerWord.match(goRegex)); // Outputs ["goooooooo"]
console.log(gPhrase.match(goRegex)); // Outputs ["g"]

// Code Snippet 13: Match Beginning String Patterns
const rickyAndCal = "Cal and Ricky both like racing.";
const calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal));

// Code Snippet 14: Match Ending String Patterns
const caboose = "The last car on a train is the caboose";
const lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));

// Code Snippet 15: Match All Letters and Numbers or shorthand '\w'
const longHand = /[A-Za-z0-9_]+/;
const shortHand = /\w/;
const numbers = "42";
const varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

// Code Snippet 16: Match Everything But Letters and Numbers or shorthand '\W'
const numbers_1 = "42%";
const sentence = "Coding!";
const shortHand_1 = /\W/;
console.log(numbers_1.match(shortHand_1));
console.log(sentence.match(shortHand_1));

// Code Snippet 17: Match All Numbers or shorthand '\d'
const movieName = "2001: A Space Odyssey";
const numRegex = /\d/g;
console.log(movieName.match(numRegex).length);

// Code Snippet 18: Match Whitespace or shorthand '\s'
const sample = "Whitespace is important in separating words";
const countWhiteSpace = /\s/g;
console.log(sample.match(countWhiteSpace));

// Code Snippet 19: Match Non-Whitespace Characters or shorthand '\S'
const sample1 = "Whitespace is important in separating words";
const countNonWhiteSpace = /\S/g;
console.log(sample1.match(countNonWhiteSpace));

// Code Snippet 20: Check for All or None using '?'
const favWord = "favorite";
const favRegex = /favou?rite/;
console.log(favRegex.test(favWord));

// Code Snippet 21: Positive and Negative Lookahead
const sampleWord = "astronaut";
const pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
console.log(pwRegex.test(sampleWord));

// Code Snippet 22: Check For Mixed Grouping of Characters
const myString = "Eleanor Roosevelt";
const myRegex = /(Eleanor|Franklin D.) Roosevelt/;
console.log(myRegex.test(myString));

// Code Snippet 23: Reuse Patterns Using Capture Groups
const repeatNum = "42 42 42";
const reRegex = /^(\d+) \1 \1$/;
console.log(reRegex.test(repeatNum));

// Code Snippet 24: Use Capture Groups to Search and Replace
const str = "one two three";
const fixRegex = /(\w+)\s(\w+)\s(\w+)/;
const replaceText = "$3 $2 $1";
console.log(str.replace(fixRegex, replaceText));

// Code Snippet 25: Remove Whitespace from Start and End
const hello = "   Hello, World!  ";
const wsRegex = /^\s+|\s+$/g;
console.log(hello.replace(wsRegex, ''));

// Code Snippet 26: Find Characters with Lazy Matching
const text = "<h1>Winter is coming</h1>";
const myRegex1 = /<.*?>/;
console.log(text.match(myRegex1));