//comparing between recursion and loop
function test(){
    for (let i = 0; i < 10; i++) {
        console.log(i);
        
    }
}
// console.log(test());

let y = 0;
function recursion1(y){
    //stopping condition
    if(y>= 10){
        return 1;
    }
    console.log(y);
    recursion1(y+1);
    
    
}
// recursion1(y);

//fibonacci in for loop and recursion

function fibo1(){
    let first=0 ,second=1 , third
    for (let i = 0; i <7; i++) {
        third = first+second
        first =second
        second=third
        console.log(third);
    }
}
// fibo1(0);

//recursive to return fibo
let num1 = 0, num2=1 ,sum
function fibo2(x){
    //base case or stopping condition

    if(x >6){
        return 0;
    }
    sum = num1+num2
    num1 =num2;
    num2=sum;
    // console.log(sum);
    fibo2(x+1);
    return sum;
}
// fibo2(0);

//declaring variables
let $test1 = 10;

var strData = "this is stringd", strTest = 'this is single qoute';

// console.log(`testing double quotes ${strData} and single quotes ${strTest}`);

//return practicing
console.log("testing recursive file");