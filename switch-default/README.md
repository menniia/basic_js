# Adding a Default Option in Switch Statements

This JavaScript function, `switchOfStuff`, categorizes input values (characters) into different categories and returns corresponding answers using a `switch` statement, including a "default" case.

## Description

The `switchOfStuff` function categorizes input values (characters) into the following categories:

- When `val` is `"a"`, it returns "apple."
- When `val` is `"b"`, it returns "bird."
- When `val` is `"c"`, it returns "cat."
- For any other value of `val`, it returns "stuff" using the "default" case.

The "default" case is used to handle values that do not match any of the specific cases.

## Usage

To use this code, you can call the `switchOfStuff` function and provide a character as an argument. For example:

```javascript
switchOfStuff("a"); // Returns "apple"
switchOfStuff("b"); // Returns "bird"
switchOfStuff("x"); // Returns "stuff"
```
