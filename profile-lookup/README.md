# LookUpProfile Function

A `lookUpProfile` function has been pre-written for you. This function is designed to perform the following tasks:

- Check if the `name` argument corresponds to the `firstName` of an actual contact within a pre-defined list of contacts.
- Verify if the provided `prop` argument is a property of the matched contact.
- Return the "value" of the specified property if both conditions are true.

## Function Behavior

The `lookUpProfile` function follows these rules:

- If the `name` matches a known contact's `firstName` and the specified `prop` exists as a property of that contact, it returns the value associated with that property.

- If the `name` provided does not correspond to any of the contacts in the list, the function returns the string "No such contact."

- If the `prop` argument does not correspond to any valid properties of a contact found to match the `name`, the function returns the string "No such property."

## Usage

To use the `lookUpProfile` function, you can call it with the `name` and `prop` arguments to perform the lookup. Here's an example:

```javascript
lookUpProfile("Akira", "likes");
```
