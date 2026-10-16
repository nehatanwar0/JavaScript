console.log("--multiplcation table of 5--");
for (let i=1;i<=5;i++){
    console.log("5*"+ i+"=" +(5*i));
}
console.log("--first nnumber > 10 divisible by 6--");
let num=11;
while(true){
    if(num>10&&num%6==0){
        console.log("found:",num);
        break;
    }
    num++;
}