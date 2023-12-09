// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    
    return fahrenheit;
  }

  // Reverse a String
  function reverseString(str) {
  
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");

  // Factorial of a Number
  function factorial(num) {

    if (num <= 0) {
      return 1;
    }
  
    let result = 1;
  
    for (let i = 1; i <= num; i++) {
      result *= i
    }
    return result;
  }
  
  factorial(5);

  //Find the Longest Word in a String
  function findLongestWordLength(str) {

    let strSplit = str.split(' ');
  
    let longestWord = 0;
  
    for (let i = 0; i < strSplit.length; i++) {
      if(strSplit[i].length > longestWord) {
        longestWord = strSplit[i].length
      }
    }
    return longestWord;
  }

  // Return Largest Numbers in Arrays
  function largestOfFour(arr) {
    let largestNumber = [];
  
    for (let i = 0; i < arr.length; i++) {
      let max = arr[i][0];
  
      for (let j= 1; j < arr[i].length; j++) {
        if (arr[i][j] > max) {
          max = arr[i][j];
        }
      }
      largestNumber.push(max);
    }
    return largestNumber;
  }

  // Confirm the Ending
  function confirmEnding(str, target) {

    let extratedString = str.substr(str.length - target.length, target.length);
    
    if (extratedString === target) {
      return true;
    } else {
      return false;
    }
    return str;
  }
  
  confirmEnding("Bastian", "n");

  // Repeat a string
  function repeatStringNumTimes(str, num) {
    if (num < 0) {
      return "";
    }
  
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
  
    return repeatedString;
  }
  
  repeatStringNumTimes("abc", 3);
