// 1. Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());

// 2. Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  return arr.indexOf(elem) !== -1;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 3. Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 4. Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.banana = 13;
foods["grapes"] = 35;
foods.strawberries = 27;

console.log(foods);

// 5. Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

console.log(userActivity);

// 6. Access Property Names with Bracket Notation
let inventory = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return inventory[scannedItem];
}

console.log(checkInventory("apples"));

// 7. Use the delete Keyword to Remove Object Properties
delete inventory.oranges;
delete inventory.plums;
delete inventory.strawberries;

console.log(inventory);

// 8. Check if an Object has a Property
let usersObject = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  return (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  );
}

console.log(isEveryoneHere(usersObject));

// 9. Iterate Through the Keys of an Object with a for...in Statement
const usersStatus = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  let result = 0;
  for (let user in allUsers) {
    if (allUsers[user].online === true) {
      result++;
    }
  }
  return result;
}

console.log(countOnline(usersStatus));

// 10. Generate an Array of All Object Keys with Object.keys()
let usersKeys = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(usersKeys));

// 11. Modify an Array Stored in an Object
let userObject = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo',
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
    },
  },
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(userObject, 'Pete'));