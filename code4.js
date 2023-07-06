let num = [50, 100, 200, 300, 1001];
let small = num[0];
let large = num[0];
for (let i = 0; i < num.length; i++) {
    if (small > num[i]) {
        small = num[i];
    }
    if (large < num[i]) {
        large = num[i]
    }

    

} console.log(small);
console.log(large);

for (let j = small; j >= 1; j--) {
    let divisor
    if (small % j === 0 && large % j === 0) {
        divisor = j;
        console.log("greatest dividoe", divisor);
        break;
    }
}