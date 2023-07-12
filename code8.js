let str='AbcdeD';
let charcode=[];
for(let i=0;i<str.length;i++){
     charcode=str.charCodeAt(i);
     console.log(charcode);
   }

for(let i=0;i<charcode.length;i++){
    for(let j=122;j>=97;j--)  {
        if(charcode[i]===j){
            for(let k=90;j>=65;k--){
            if(charcode[i]===j-32){
                console.log('====================================');
                console.log(charcode[i]);
                console.log('====================================');
            }
            }  
        }
    }
}



//     for(let j=122;j>=97;j--){
     
//             if(charCodeAt(i)===j){
//                 for(let k=90;j>=65;k--){
//                     if(charCodeAt(i)===k){
//                         console.log('====================================');
//                         console.log(str[i]);
//                         console.log('====================================');
//                     }
//             }
//         }
//     }
// }