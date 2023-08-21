let num=[1,3,6,10,12,15]
let sum=0;
let c=0;
for(let i=0;i<num.length;i++){
if(num[i]%2===0 && num[i]%3===0){
sum=sum+num[i];
c=c+1;
}
}
console.log(sum/c);
