# removeFirstTwo Function

A JavaScript function that emulates the behavior of `Array.prototype.slice()` by using destructuring assignment with the rest syntax to remove the first two elements from an array and return the remaining elements.

## How It Works

The `removeFirstTwo` function utilizes JavaScript destructuring assignment with the rest syntax to exclude the first two elements from an array. It then returns the sub-array containing the elements with the first two omitted.

### Example:

```javascript
const source = [1, 2, 3, 4, 5];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo); // Outputs: [3, 4, 5]
```
