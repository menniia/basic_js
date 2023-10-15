# rangeOfNumbers Function

The `rangeOfNumbers` function is a recursive JavaScript function that generates an array of numbers within a specified range.

## Table of Contents

- [Installation](#installation)

You can use the `rangeOfNumbers` function in your JavaScript project by copying the function definition into your code.

```javascript
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const range = rangeOfNumbers(startNum, endNum - 1);
    range.push(endNum);
    return range;
  }
}
```
