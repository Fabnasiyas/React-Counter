// let n='1234';
// let num=3;
// for(let i=0;i<n.length;i++){
//     if(n[i]===num){
//         for(let j=0;i<n.length;j++){
//         if(num %2===0 && n[j]%2===0){
// let temp=n[i];
// n[i]=n[j];
// n[j]=temp;
//     }
// }
// }
// }
// console.log(n);
var largestInteger =function(num) {
    const odd = [];
    const even = [];
    const nums = String(num).split('')
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0) even.push(parseInt(nums[i]))
        else odd.push(parseInt(nums[i]))
    }
    
    odd.sort((a,b) => a-b)
    even.sort((a,b) => a-b)
    
    const largestNum = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0) largestNum.push(even.pop())
        else largestNum.push(odd.pop())
    }

    return largestNum.join('')
};
const number = 1234;
const result = largestInteger(number);
console.log(result);
