
let r = 'aa';
let m = 'aab';
let n = [];
let n1=[]
console.log( m.length);
for (let i = 0; i <m.length; i++) {
    n.push(m.charCodeAt(i));
}
console.log("n",n);
for (let i = 0; i <r.length; i++) {
    n1.push(r.charCodeAt(i));
}
console.log("n1",n1);
console.log(n.includes(97));
