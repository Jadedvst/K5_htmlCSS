let s = 'Hello Javascript!!';
console.log(s);
console.log("길이: ",s.length);
console.log("5번째 문자: ",s[0]);
console.log(s.slice(-3,-1));
console.log(s.substring(0,5));

for(let i of s.slice(0,5)){
    console.log(i);
    console.log(isNaN(i));//true since String
}

let result ='';
for (let c of s){
    if(c>='a'&&c<='z') result=result+c.toUpperCase();
    else result=result+c.toLowerCase();
}

console.log(s.indexOf("J"));
console.log(s.includes("H"));
console.log(s.endsWith("!"));