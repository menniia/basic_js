# Card Counting - Blackjack Strategy

In the casino game Blackjack, players can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is known as Card Counting. The Card Counting strategy assigns values to each card to help the player make decisions on when to bet high or low.

## Card Counting Rules

The Card Counting strategy follows these rules:

| Count Change | Cards                  |
| ------------ | ---------------------- |
| +1           | 2, 3, 4, 5, 6          |
| 0            | 7, 8, 9                |
| -1           | 10, 'J', 'Q', 'K', 'A' |

- When you encounter a card with a value of 2, 3, 4, 5, or 6, you increment the count by 1.
- Cards with values 7, 8, and 9 have no impact on the count.
- When you encounter a card with a value of 10, 'J', 'Q', 'K', or 'A', you decrement the count by 1.

The count can be positive, zero, or negative, and it influences the player's decision to bet high or low.

## Function Usage

To use the `cardCounting` function, follow these steps:

1. Call the function with a card as an argument (either a number or a string).
2. The function will increment or decrement the global count variable based on the card's value and return a decision string.

### Example Usages

```javascript
console.log(cardCounting(2)); // Output: "1 Bet"
console.log(cardCounting(3)); // Output: "2 Bet"
console.log(cardCounting(7)); // Output: "2 Bet"
console.log(cardCounting("K")); // Output: "1 Bet"
console.log(cardCounting("A")); // Output: "0 Hold"
console.log(cardCounting(10)); // Output: "-1 Hold"
```
