let arr=[11,3,1,34,3];

let max=0;
let n=arr.length;
// console.log(n);
let min=arr[0];
    for(let i=0;i<n;i++){
        if(max<arr[i]){
            max=arr[i]
        }
        else if(min>arr[i]){
            min=arr[i]
        }
    }
    console.log(min,max);
   
        let arr2 = [];
        for (let i = 0; i < n; i++) {
          if (arr[i] !== min && arr[i] !== max) {
            arr2.push(arr[i]); 
          }
        }
        console.log(arr2); 
        if(arr2.length<=2){
            console.log(-1);
        }
        else{
            for(let i=0;i<arr2.length;i++){
                console.log(arr2[i]);
                break;
            }
        }
        