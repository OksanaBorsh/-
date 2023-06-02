function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }

console.log(convertCtoF(0));    // 32
console.log(convertCtoF(-30));  // -22
console.log(convertCtoF(-10));  // 14
console.log(convertCtoF(30));   // 86
