# Tower Breakers - HackerRank
## Proposal
Two players are playing a game of Tower Breakers! Player always moves first, and both players always play optimally.The rules of the game are as follows:

- Initially there are towers.
- Each tower is of height.
- The players move in alternating turns.
- In each turn, a player can choose a tower of height and reduce its height to, where and [evenly divides](https://en.wiktionary.org/wiki/evenly_divisible).
- If the current player is unable to make a move, they lose the game.

Given the values of and, determine which player will win. If the first player wins, return. Otherwise, return.

**Example**.

There are towers, each units tall. Player has a choice of two moves:- remove pieces from a tower to leave as- remove pieces to leave

Player matches the move. Now the towers are both units tall.

Let Player remove. Now the towers are and units tall.

## Solution
```js
function towerBreakers(n, m) {
        if(m===1){
            return 2;            
        } else{
            if(n%2==0)
                return 2;
            else
                return 1; 
         } 
}
```

## Explanation
The whole point being that each player would like to make the height 1 of whatever tower it chooses, because 1 evenly divides all other numbers. So the answer only depends on number of towers being odd or even, except for the case when starting height of towers is 1, in that case 1 always loses because it can't make any moves.

## 🛠 Link
- [HackerRank exercise](https://www.hackerrank.com/challenges/tower-breakers-1/problem?h_r=internal-search)



