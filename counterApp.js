var counter=0;
var span=document.querySelector('#counter');
var ulList=document.getElementById('listItems');

function incrementFun(){
counter++;
span.innerText=counter;

//create Element
var li=document.createElement('li');
li.innerHTML="<b>Current Value:</b>"+counter;
li.setAttribute('data-shubham',counter);
ulList.appendChild(li);

}

function decrementFun(){
    const li=document.querySelector('[data-shubham="'+counter+'"]');
    var att=li.getAttribute('data-shubham');
    li.remove();
    counter--;
    span.innerText=counter;
    console.log(att+"Value currently");

}

const incButton=document.getElementById('increment');
const decButton=document.querySelector('#decrement');
incButton.addEventListener('click',incrementFun);
decButton.addEventListener('click',decrementFun);
