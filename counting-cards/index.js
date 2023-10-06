// using switch statement

let count = 0

function cardCounting(card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
  
    let holdOrBet = "Hold";
    if (count > 0) {
      holdOrBet = "Bet"
    }
    return count + " " + holdOrBet;
  }
  
  console.log(cardCounting(2));


// Using if/else statement

// let count = 0;

// function cardCounting(card) {
//   if (card >= 2 && card <= 6) {
//     count++;
//   } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
//     count--;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
// }

// console.log(cardCounting(2));