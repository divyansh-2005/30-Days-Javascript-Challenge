// Day 9: DOM Manipulation
// Tasks/Activities:

//*** Activity 1: Selecting and Manipulating Elements ***/

// . Task 1: Select an HTML element by its ID and change its text content.
const para = document.getElementById('mypara');
para.textContent = 'changed text content';

// . Task 2: Select an HTML element by its class and change its background color.
const heading  = document.getElementsByClassName('myheading');
heading[0].style.backgroundColor = 'red';

//*** Activity 2: Creating and Appending Elements ***/

// . Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.innerHTML = 'This is a new div element';
document.body.appendChild(newDiv)

// . Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement('li');
newLi.textContent = 'four';
const ul = document.getElementsByTagName('ul')[0]; // Access the first <ul> element
ul.appendChild(newLi);

//*** Activity 3: Removing Elements ***/

// . Task 5: Select an HTML element and remove it from the DOM.
const li2 = document.getElementsByTagName('li')[1];
li2.remove();

// . Task 6: Remove the last child of a specific HTML element.
const lastLi = ul.lastElementChild;
lastLi.remove();
// const ul = document.getElementById('myList');
// ul.removeChild(ul.lastChild);

//*** Activity 4: Modifying Attributes and Classes ***/

// . Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.getElementsByTagName('img')[0];
image.setAttribute('alt',"new alt text");

// . Task 8: Add and remove a CSS class to/from an HTML element.
const p = document.getElementById('mypara');
p.classList.add('myclass');
p.classList.remove('para');

//*** Activity 5: Event Handling ***/

// . Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.getElementById('mybtn');
button.addEventListener('click', (e) => {
    newDiv.textContent = 'Text content changed by button click';
})

// . Task 10: Add a mouseover event listener to an element that changes its border color.
const border = document.getElementById('mypara');
border.addEventListener('mouseover',(e)=>{
    e.target.style.borderColor = 'green';
})