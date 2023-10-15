# countdown Function

The `countdown` function is a recursive JavaScript function that generates an array of numbers counting down from a specified number (`n`) to 1.

## Table of Contents

- [Installation](#installation)

## Installation

You can use the `countdown` function in your JavaScript project by copying the function definition into your code.

```javascript
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
```
