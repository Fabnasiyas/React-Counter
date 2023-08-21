let n = 7501;

let largest = 0;
let secondLargest = 0;

while (n > 0) {
  const digit = n % 10;

  if (digit > largest) {
    secondLargest = largest;
    largest = digit;
  } else if (digit > secondLargest && digit < largest) {
    secondLargest = digit;
  }

  n = Math.floor(n / 10);
}

console.log(secondLargest);
