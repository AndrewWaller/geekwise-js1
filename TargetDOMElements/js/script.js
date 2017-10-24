// document.getElementById('');
// Returns a reference to the element by its ID; the ID is a string which can
// be used to uniquely identify the element, found in the HTML id attribute.

var btn = document.getElementById('myBtn');

btn.style.color ='red';
btn.style.backgroundColor="blue";
btn.style.border ="5px solid black";
console.log(btn.type);
// 1https://www.w3schools.com/html/html_attributes.asp


var aTag = document.getElementsByTagName('a');
console.log(aTag);



// document.getElementsByTagName('');
// Returns an array-like object (HTMLCollection) of elements with the given tag name.
var nestChild = document.getElementsByTagName('test');
console.log(nestChild);







// document.getElementsByClassName('');
// Returns an array-like object (HTMLCollection) of all child elements which have all of the given class names.

var hideBtn = document.getElementsByClassName('hideMe');
console.log(hideBtn[0].className ="hide");




// querySelector();
// Returns the first Element within the document that matches the specified selector, or group of selectors.
// Use of . for classes and # for ID's apply.

var meCool = document.querySelector('.cool');
console.log(meCool);
var linkOne = document.querySelector('ul li:last-child');
console.log(linkOne);
var linkTwo = document.querySelector('ul li:nth-child(2) li:nth-child(3)');
console.log(linkTwo);
var linkThree = document.querySelector('ul li:nth-child(3) li:nth-child(2)');
console.log(linkThree);
// .querySelectorAll();
// Returns a list (NodeList) of the elements within the document that match the specified group of selectors. Use of . for classes and # for ID's apply.

var blah = document.querySelectorAll('.cool');
console.log(blah);
var allSubLinks = document.querySelectorAll('ul li li a');
console.log(allSubLinks);
