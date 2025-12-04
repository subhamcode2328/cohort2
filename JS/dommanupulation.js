//               Ego === Success 


// DOM - Document Object  Model 
//  Root of HTML  = Document 


// - Selection of an element
var head1=document.querySelector('h1');
console.log(head1);
// document.getElementById("qrite the name of the id ")
// document.getElementsByClassName("Enter the clas name here ");

// -changing HTML 
head1.innerHTML=("I have changed the Heading");

// -Changing  CSS
head1.style.color='red';
head1.style.backgroundColor="White";

// -Event listners
var btn=document.querySelector('Button');

btn.addEventListener('click',function () {
   let name= prompt("Enter name")
    alert("Hi "+name);
    head1.innerHTML=(name);

})


let head2=document.querySelector('h2');
var a=0;
let button2 =document.querySelector('.btn-2');
button2.addEventListener('click',function () {
    a++;
    head2.innerHTML=a;
})

let button3=document.querySelector('.btn-3');
button3.addEventListener('click',function(){
    a--;
    head2.innerHTML=a;
})


function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

let dice=document.querySelector('.DICE');
dice.addEventListener('click',function(){

    const randomNumber=getRandom(1,6);
    dice.innerHTML=randomNumber;
    // diceNums++;
    // diceNums=Math.random();
})