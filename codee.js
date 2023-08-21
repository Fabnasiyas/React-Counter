let arr1=[2,4,5,12,34];
let arr2=[1,6,10,11]
let arr=[]

let i=0,j=0
while (i<=arr1.length&&j<arr2.length) {
    if(arr1[i]<arr2[j]){
        arr[arr.length]=arr1[i]
        i++
    }
    else{
        arr[arr.length]=arr2[j]
        j++
    }
}
console.log(arr);

