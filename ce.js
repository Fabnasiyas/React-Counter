let num=28;

let sum=0;
for(let i=0;i<num;i++){
if(num % i===0){
sum=sum+i;
}
// console.log(sum);
}
if(sum===num){
    console.log(true);
}
else{
    console.log(false);
}