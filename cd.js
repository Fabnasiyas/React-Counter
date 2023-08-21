let arr=[1,1,6,6,6]
let n=arr.length;
let len=n*(25/100);
let c=0;

for(let i=0;i<n;i++){
    c=0;
    for(let j=i+1;j<n;j++){

        if(arr[i]===arr[j]){
            c=c+1;
        }
    }
if (c >= len) { 
    console.log(arr[i]);
    break;
    
}

}