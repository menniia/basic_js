while (true) {
    let input = prompt("Enter a number greater than 100", "");

    if (input > 100 || !input) {
      break;
    } else {
      alert("The number you entered is not greater than 100");
    }
  }
  alert("You have entered a number greater than 100");