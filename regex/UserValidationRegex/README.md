# Username Validation with Regular Expressions

Usernames are a common way to uniquely identify users on websites and online platforms. This project provides a regular expression-based solution to validate usernames according to specific rules.

## Project Overview

The project's main goal is to validate usernames based on the following criteria:

1. Usernames can only use alphanumeric characters.
2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Usernames cannot start with a number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

## Regular Expression

The regular expression used to validate usernames is:

```regex
/^[a-z]([0-9]{2,}|[a-z]+\d*)$/i
```
