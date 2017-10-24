// JavaScript Event Listeners
// List of Event Listeners https://developer.mozilla.org/en-US/docs/Web/Events
// element.addEventListener(event, function)
// Syntax ^^

// click
// Event occurs on a complete action of left clicking and releasing.
var btnOne = document.getElementById('btn1');
btnOne.addEventListener('click', function(e){
  console.log(e.target.style.backgroundColor="red")
})

// mousedown
// Event occurs at the moment the left click is pressed.
var btnTwo = document.getElementById('btn2');
  btnTwo.addEventListener('mousedown', function(){
    btnTwo.style.backgroundColor ="green";
  })



//mouseup
// Event occurs at the moment the left click is released.
var btnThree = document.getElementById('btn3');
  btnThree.addEventListener('mouseup', function(){
    btnThree.style.backgroundColor ="blue";
  })


// mousemove
// Event occurs anytime the mouse is moved.
// https://www.w3schools.com/jsref/obj_window.asp
// you will need window object for this ^^


// mouseenter
// Event occurs when the cursor enters the targeted element.



// mouseleave
// Event occurs when the cursor leaves the targeted element.



// scroll
// Event occurs when the user scrolls the page, either up or down.
// Does not fire automatically when the scroll wheel is spun. Only if the page scrolls.



// keypress
// Event occurs on the complete action pressing and releasing any key.


// keydown
// Event occurs at the moment any key is pressed.



// keyup
// Event occurs at the moment any key is released.
var inputTwo = document.getElementById('input3');
inputTwo.addEventListener("keyup", function(e){
  console.log(e.target.value);
})


// submit
// The submit event is fired when a form is submitted.
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
var form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log(e.target[0].value);
})
