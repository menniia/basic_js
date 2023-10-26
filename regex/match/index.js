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
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result7 = quoteSample.match(vowelRegex); 
console.log(result7);

// Code Snippet 8: Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result8 = quoteSample.match(alphabetRegex);
console.log(result8);

// Code Snippet 9: Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegexp = /[h-s2-6]/ig;
let result9 = quoteSample.match(myRegex); 
console.log(result9);

// Code Snippet 10: Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result10 = quoteSample.match(myRegex);
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
let result 13 = gPhrase.match(goRegex);
console.log(result12); // outputs ["goooooooo"]
console.log(result13); // outputs ["g"]