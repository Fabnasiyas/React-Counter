// let arr=[23,4,5,6,7,8,9];
// let ar2=[];
// for(let i=0;i<arr.length;i++){
//     for(let j=2;j<=arr[i]/2;j++){
//         if(arr[i]%j===1){
//           ar2=arr[i]  
//         }
//         console.log(ar2);
//       }
//     }
let arr = [23, 2,4, 5, 6, 7, 8, 7,5,9];
let ar2 = [];

for (let i = 0; i < arr.length; i++) {
  let isPrime = true;

  for (let j = 2; j <= arr[i] / 2; j++) {
    if (arr[i] % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    ar2.push(arr[i]);
  }
}

console.log(ar2);
