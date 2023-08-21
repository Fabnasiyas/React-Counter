
let num = 999999;
let rem;
let sum = 0;
let sum1 = 0;

while (num > 0) {
    
  rem = num % 10;
  sum = sum + rem;
  num = parseInt(num / 10);
}

console.log('S', sum);

while (sum >= 10) {
  sum1 = 0; 
  while (sum > 0) {
    rem = sum % 10;
    sum1 = sum1 + rem;
    sum = parseInt(sum / 10);
  }
}

console.log('Ss', sum1);

