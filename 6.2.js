let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
}

console.log(cc(2));   // 1 Bet
console.log(cc(3));   // 2 Bet
console.log(cc(7));   // 2 Bet
console.log(cc('K')); // 1 Bet
console.log(cc('A')); // 0 Hold

console.log(cc(2));   // 1 Bet
console.log(cc(3));   // 2 Bet
console.log(cc(4));   // 3 Bet
console.log(cc(5));   // 4 Bet
console.log(cc(6));   // 5 Bet

console.log(cc(10));  // -1 Hold
console.log(cc('J')); // -2 Hold
console.log(cc('Q')); // -3 Hold
console.log(cc('K')); // -4 Hold
console.log(cc('A')); // -5 Hold

console.log(cc(3));   // -4 Hold
console.log(cc(7));   // -4 Hold
console.log(cc('Q')); // -5 Hold
console.log(cc(8));   // -5 Hold
console.log(cc('A')); // -6 Hold

console.log(cc(2));   // -5 Hold
console.log(cc(2));   // -4 Hold
console.log(cc(10));  // -5 Hold

console.log(cc(3));   // -4 Hold
console.log(cc(2));   // -3 Hold
console.log(cc('A')); // -4 Hold
console.log(cc(10));  // -5 Hold
console.log(cc('K')); // -6 Hold
