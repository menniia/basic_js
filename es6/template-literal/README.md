# Template Literal List Creator

A JavaScript function that uses template literals and a `for` loop to create an array of list element (li) strings. Each list element's text is taken from an array, and it includes a class attribute with the value `text-warning`.

## How It Works

The `makeList` function iterates through an input array using a `for` loop with an index. For each element in the array, it creates a list item string with a class attribute and the element's value using template literals. The function then returns an array of these list item strings.

### Example:

```javascript
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

const failuresList = makeList(result.failure);

console.log(failuresList);

// Outputs:
// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]
```
