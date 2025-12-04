// for(let i =1;i<=10;i++){
//     console.log(i);
// }

// for(let i=1;i<=20;i++){
//     if (i%2===0){
//         console.log(i); 
//     }
// }

// for(let i=10;i>=1;i--){
//     console.log(i);
    
// }

// for(let i =1;i<=5;i++){
//     console.log("Yes");
    
// }

// for(i=1;i<=10;i++){
//     if(i%2===0)
//     {
//         console.log("Even" +i);    
//     }
//     else
//     {
//         console.log("Odd" +i);
//     }
// }

// when ever you ask some thing form prompt it get converted to string not number . 

// use parseInt to convert String value into number 

// let num= +prompt("Enter A number ");
// if (num===12) {
//     console.log("Even Number ");
    
// }
// else{
//     console.log("Odd Number ");
    
// }

// let age= +prompt("Enter Age ");

// if (age === null) {
//     console.log("You cancelled it");
    
// }
// else{
//     if (age.trim()==="") {
//         console.log("Please enter the name without spaces ");
        
//     }
// }

// let number = + prompt("Enter a number ");

// for(let i=1;i<=10;i++){
//     console.log(`${number} X ${i} = ${number*i}`);
    
// }

// let age =prompt("Enter age");

// if(age === null){
//     console.log("You pressed the canelled button");
    
// }else{
//     if (age.trim() ==="") {
//         console.error("Please enter a value in number's at least ");
//     }
//     else{
//        age= Number(age);
//        if (isNaN(age)) {
//             console.error("Please enter a number . ");
            
//        }
//        else{
//         console.log(`Your age is ${age}`);
        
//        }
//     }
// }

// let count =0;
// for(let i=1;i<=22;i++){
//     if(i>8){
//         count++;
//     }
// }

// console.log(count);

// let password= "harshbhai";

// let pass = prompt("Tell us the password");

// if (password ===null) {
//     alert("You cancled the process ");
    
// }
// else{
//     if (password===pass) {
//         console.log("Password matched");
        
//     }
// }

//  let attempt=0;

//  let pass="kasish";

//  let password =prompt("Enter password ");
//     attempt++;
//  while (password!==pass) {
//     if (attempt === 3) {
//         console.error("Account Locked ");
//         break;
        
//     }
//      password =prompt("Enter password again");
//     attempt++;
    
//  }

// let correctPassword ="Subham";

// let userInputPassword= prompt("apna password batao");

// let first = prompt("First password");

// if (first ===correctPassword) {
//    alert("You have been Logedin ");
// }
// else{
//    let second = prompt("Second attempt");
//    if (second ===correctPassword) {
//    alert("You have been Logedin ");
      
      
//    }
//    else{
//       let third = prompt("Third Password");

//       if (third === correctPassword) {
//          console.log("Done");
         
//       }
//       else{
//          alert("Account locked .");
         
//       }

//    }
// }

// let correctPassword = "kasish";
// let attempt= 0;

// let userInputPassword =prompt("Enter Your Password");
//       attempt++;


// while (correctPassword !== userInputPassword) {
//    if (attempt === 3) {
//       alert("Account Has Been Blocked ");
//       break;

//    }
//       attempt++;
//       userInputPassword =prompt("Apna password batao");
       
// }

// let userWords= prompt("Enter word's");
// let countWords=0;

// while (userWords !== "stop" || userWords !==  "STOP") {

//       if (userWords==="Yes") 
//          counter++;
//       userWords=prompt("Enter Words");

// }

// alert(`total times yes count :${counter}`);

// for(let i=1;i<=50;i++){
//    if (i%7 === 0) {
//       console.log(i);
      
//    }
// }


// let add=0;
// for(let i=1;i<31;i++){
//    if(i%2!== 0){
//       add+=i;
//    }
// }

// alert(`The total is :${add}`);

// let number = +prompt("Enter the  number of your  choice ");

// while (number %2 !==0) {
//    number = +prompt("Enter the  number Again");
// }


// let start=prompt("Enter the number you want ");
// let end =prompt("Enter the ending number ");

// for(let i =start;i<=end;i++){
//    console.log(i);
   
// }

// let counter=0;
// for(let i=1;i<=20;i++){
//    if(counter ===3)
//       break;
//    if(i%2 !==0){
//       console.log(i);
//       counter++;
//    }
// }

// let counter =0;

// for(let i=1; i<=5;i++){
//    let num = +prompt("Enter Number ");
//    if (num>=0) 
//       counter++;
// }

// console.log(counter);

// let balance =1000;

// let amount =+prompt("Enter Amount");

// if(amount<=balance){
//       balance -=amount;
// }

// function name() {
//     alert("Paratha");

// }
// name();

// function details(age , name ){
//     alert(details);
// }

// details(23, "Subham Singh")
// function letters(a,b,c,d){
//     console.log(a,b,c,d);
    
// }

// fucntions with no name are called anonumius 

// pure function 
// in this function there are no changes made . 

// let a =12;

// function update(val) {
//     console.log(a+2);

// }
// update();
// update();
// impure function - In this function 

// let aa =11;
// function impure(params) {   
//  console.log( Math.random()+params);
//  console.log(aa);   
// }
// impure();

// clouser is a functuion who return a function 

// let arr=        [1,2,3,4,5];
// indexing         0 1 2 3 4

// types to create array's 

// let arr2= [];
// let array=new Array();
//  functions in array 
//  Push - 
// let arr=[1,2,3,4,5];
// arr.push(18);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(3);
// console.log(arr);
// console.log(arr.indexOf(4));


// questions 
// function sayHello(){
//     console.log(" Hello Java Script");
    
// }

// sayHello();

// function add(a,b){
//      console.log(a+b);
//     return a+b;
    
// }

// let ans=add(2,4);
// console.log(ans);

// function greet(guest ="Guest"){
//     console.log(`Hi Master ${guest}`);
    
// }
// greet("Subham");

// function addInfinity(...nums) {
//     let sum=0;
//     nums.forEach(function(val){
//             sum+=val;
//     })
//     console.log(sum);
    
// }
// addInfinity(1,2,3,4);

// (function () {
//     console.log("I run Instantly . ");
    
// })();

// function parent() {
//     let a =12;
//     function child() {
//         console.log(a); 
//     }

//     child();
// }

// parent();

// let fruits=['apple','banana','grapes','guava','strawberry'];

// fruits.push("kiwi");
// fruits.unshift("Blueberry")
// console.log(fruits);

// for( let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
    
// }


// let obj={
//     name:"Subham Singh",
//     age:23,
//     city:"West Bengal",

// };

// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
    
// }

// setTimeout(function (params) {
    
// })

// function runTwice(func) {
//     func();
//     func();
// }

// runTwice(function(){
//     console.log("Hello Baby");
    
// })

// function addition(a,b){
//     console.log(a+b);
    
// }

// addition(1,2);

// let global = 0;
// function impure(a) {
//     global++;
//     console.log(a+global);
    
// }

// impure(2);
// impure(2);