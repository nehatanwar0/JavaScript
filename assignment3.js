let score=85;
let grade;
if(score>=90){
    grade="A";
}
else if(score>=80){
    grade="B";
}
else if(score>=70){
    grade="C";
}
else if(score>=60){
    grade="D";
}
else{
    grade="F";
}
let gradeMessage;
switch(grade){
    case "A":
        gradeMessage="Excellent!";
        break;
    case "B":
        gradeMessage="Good job!";
        break;
    case "C":
        gradeMessage="good";
        break;
    case "D":
        gradeMessage="Needs improvement";
        break;
    case "F":
        gradeMessage="Fail";
}
let status =score>=40? "passed":"failed";
console.log("Score:", score);
console.log("Grade:", grade);
console.log("status:", status);