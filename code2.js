let arr=[["computer","white","lenove"],['phone','white','iphone'],['mouse','grey','device']]
console.log(arr);
let rulekey='color';
let keyValue='white';
let count=0;
if(rulekey==='color'){
for(let i=0;i<arr.length;i++){
    
 if(arr[i][1]===keyValue){
                  
                count++;
            }
        }
        console.log(count);
    
}
if(rulekey==='type'){
    for(let i=0;i<arr.length;i++){
        
     if(arr[i][0]===keyValue){
                      
                    count++;
                }
            }
            console.log(count);
        
    }
    if(rulekey==='name'){
        for(let i=0;i<arr.length;i++){
            
         if(arr[i][2]===keyValue){
                          
                        count++;
                    }
                }
                console.log(count);
            
        }