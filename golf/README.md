# Golf Code - Hole Scoring

In the game of Golf, each hole has a par, which is the expected number of strokes a golfer should make to complete the play. This JavaScript function, `golfScore`, calculates the nickname for the golfer's performance based on the number of strokes relative to par.

## Scoring Rules

The function follows these scoring rules:

| Strokes    | Return         |
| ---------- | -------------- |
| 1          | "Hole-in-one!" |
| <= par - 2 | "Eagle"        |
| par - 1    | "Birdie"       |
| par        | "Par"          |
| par + 1    | "Bogey"        |
| par + 2    | "Double Bogey" |
| >= par + 3 | "Go Home!"     |

## Usage

To use the `golfScore` function, call it with two arguments: `par` (the par value for the hole) and `strokes` (the number of strokes taken by the golfer). It will return the appropriate nickname based on the provided criteria.

```javascript
const nickname = golfScore(par, strokes);
```

