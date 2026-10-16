function rectangleArea(length=5, width=4){
    return length*width;
}
const arrowArea=(length=5,width=4)=>
{
    return length*width;
};
console.log("standard function area(default 5*4):",rectangleArea()
);
console.log("arrow function area (custom 10*3):",
    arrowArea(10,3)
);
{
    let blockVar=100;
console.log("inside block:",blockVar);
}
try{
    console.log(blockVar);
}catch (error){
    console.log("Scope test error:reference error:blockVar is not defined");
}
