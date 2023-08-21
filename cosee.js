// let pt='abc'
// let a=[]
// let str='this is nice'
// for(let i=0;i<pt.length;i++){
//     for(let j=0;j<=str.length;j++){
//         if(str[j]===' '){
//          break;
//         }
//         else{

//             a.push(str[j])
//         }
//     }
// }
// console.log(a);

let p = "abba";
let s = "dog cat cat fish";

let ptn = []; 

let sWords = s.split(" ");

if (p.length !== sWords.length) {
  console.log("false");
} else {
  for (let i = 0; i < p.length; i++) {
    let currentChar = p[i];
    let currentWord = sWords[i];

    if (!ptn[currentChar]) {
      ptn[currentChar] = currentWord;
    } else if (ptn[currentChar] !== currentWord) {
      console.log("false");
      break;
    }
  }
  console.log("true");
}