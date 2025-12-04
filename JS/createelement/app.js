// create element 

// var btn=document.querySelector('button')
// btn.addEventListener('click',function(){
//     var heading = document.createElement('div');

//     heading.innerHTML='Hello Guys';

//     console.log(heading);
    
// })


// Append Element 

// var h1=document.createElement('h1');
// h1.innerHTML="Hello Guys";
// var main=document.querySelector('body');

// main.appendChild(h1);

// var btn=document.querySelector('button')

// var main=document.querySelector('main')

// btn.addEventListener('cllick',()=>{

//     var div=document.createElement('div')

//     div.style.height ='50px';
//     div.style.width  ='50px';

//     div.style.backgroundColor='red';

//     body.appendChild(div);
// })

var btn= document.querySelector('button');

var main=document.querySelector('main')

btn.addEventListener('click',function(){
    let createDiv=document.createElement('div');

    createDiv.style.height='150px';
    createDiv.style.width='150px';

    var x   = Math.random()*80;
    var y   = Math.random()*80;
    var r   = Math.random()*361;
    var sca = Math.random()*4;

    var randomColor1 =   Math.floor(Math.random()*256);
    var randomColor2 =   Math.floor(Math.random()*256);
    var randomColor3 =   Math.floor(Math.random()*256);


    createDiv.style.backgroundColor=`rgb(${randomColor1},${randomColor2},${randomColor3})`;

    createDiv.style.position ='absolute';
    createDiv.style.top      =y+'%';
    createDiv.style.left     =x+'%';
    createDiv.style.rotate   =r+'deg';
    createDiv.style.scale    =sca;

    main.appendChild(createDiv);

})