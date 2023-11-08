// Code Snippet 1: Match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1);  // this will output true since 'Waldo' is found in the string

// Code Snippet 2: Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);
console.log(result2); // this will output true since one of the regexps is found in the string

// Code Snippet 3: Ignore Case While Matching (/ignoreCase/i)
let myString = "freeCodeCamp";
let fccRegex = /Freecodecamp/i;
let result3 = fccRegex.test(myString);
console.log(result3); // this outputs true, and ignores the case sensitivity, because of the 'i' flag

// Code Snippet 4: Extract Matches (.match())
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);
console.log(result4);

// Code Snippet 5: Find More Than the First Match - using global search flag, 'g'
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result5 = twinkleStar.match(starRegex);
console.log(result5);

// Code Snippet 6: Match Anything with Wildcard Period(.)
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);
console.log(result6);

// Code Snippet 7: Match Single Character with Multiple Possibilities
let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result7 = quoteSample1.match(vowelRegex); 
console.log(result7);

// Code Snippet 8: Match Letters of the Alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result8 = quoteSample2.match(alphabetRegex);
console.log(result8);

// Code Snippet 9: Match Numbers and Letters of the Alphabet
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegexp = /[h-s2-6]/ig;
let result9 = quoteSample3.match(myRegex); 
console.log(result9);

// Code Snippet 10: Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex1 = /[^aeiou0-9]/ig;
let result10 = quoteSample.match(myRegex1);
console.log(result10);

// Code Snippet 11: Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result11 = difficultSpelling.match(myRegex);
console.log(result11)

// Code  Snippet 12: Match Characters that Occur Zero or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let goRegex = /go*/;
let result12 = soccerWord.match(goRegex);
let result12a = gPhrase.match(goRegex);
console.log(result12); // outputs ["goooooooo"]
console.log(result12a); // outputs ["g"]

// Code Snippet 13: Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result13 = calRegex.test(rickyAndCal);

// Code Snippet 14: Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result14 = lastRegex.test(caboose);

// Code Snippet 15: Match All Letters and Numbers - /\w/ or [A-Za-z0-9_]
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// C0de Snippet 16: Match Everything But Letters and Numbers - /\W/ or [^A-Za-z0-9_]
let shortHand_1 = /\W/;
let numbers_1 = "42%";
let sentence = "Coding!";
numbers_1.match(shortHand);
sentence_1.match(shortHand);

// Code Snippet 17: Match All Numbers - /\d/ or [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length; // .length will count how many digits are in the movie title

// Code Snippet 18: Match Whitespace - /\s/
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log(result);

// Code Snippet 19: Match Non-Whitespace Characters - /\S/
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
console.log(result);

// Code Snippet 20: Check for All or None - ?
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
console.log(result);

/* Code Snippet 21: Positive and Negative Lookahead
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits. */
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);

// Code Snippet 22: Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin D.) Roosevelt/;
let result = myRegex.test(myString); 

/* Code Snippet 23: Reuse Patterns Using Capture Groups
Use capture groups in reRegex to match a string that consists of only the same 
number repeated exactly three times separated by single spaces. */
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);

// Code Snippet 24: Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);

// Code Snippet 25: Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, '');

// Code Snippet 26: Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);
console.log(result);