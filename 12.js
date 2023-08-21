let n=6


for(let i=0;i<n;i++){
let val=""
    let number=1
    for(let j=0;j<=i;j++){
val+=`${number} `
number=number*(i-j)/(j+1)
    }
    console.log(val);
}