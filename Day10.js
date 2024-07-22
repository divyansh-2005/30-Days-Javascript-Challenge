// Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling

// . Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.querySelector('button');
const para = document.getElementById('mypara');
btn.addEventListener('click', () =>{
    para.textContent = 'Text content changed by button click';
})

// . Task 2: Add a double-click event listener to an image that toggles its visibility.
const img = document.querySelector('img');
img.addEventListener('dblclick', () => {
    img.style.opacity = img.style.opacity === '1' ? '0.1' : '1';
})

// Activity 2: Mouse Events

// . Task 3: Add a mouseover event listener to an element that changes its background color.
const div = document.querySelector('div');
div.addEventListener('mouseover', ()=>{
    div.style.backgroundColor = 'lightblue';
})
// . Task 4: Add a mouseout event listener to an element that resets its background color.
div.addEventListener('mouseout', ()=>{
    div.style.backgroundColor = '';
})

// Activity 3: Keyboard Events

// . Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const nameInput = document.getElementsByClassName('nameInput')[0];
nameInput.addEventListener('keydown', (e) =>{
    console.log(e.key);
})

// . Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
nameInput.addEventListener('keyup', (e) =>{
    const para = document.querySelector('p');
    para.textContent = e.target.value;
})

// Activity 4: Form Events

// . Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);
})

// . Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropDown = document.querySelector('select');
const newPara = document.createElement('p');
document.body.appendChild(newPara);
dropDown.addEventListener('change', (e) =>{
    newPara.textContent = e.target.value;
})


// Activity 5: Event Delegation

// . Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.querySelector('.my-list');

list.addEventListener('click', function(e) {
    // Check if the clicked element is a list item
    if (e.target && e.target.nodeName === 'LI') {
        console.log(e.target.textContent); // Log the text content of the clicked list item
    }
});

// . Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
// Assuming .my-list is the parent element and you're interested in click events on its child elements, which could be dynamically added
const parentElement = document.querySelector('.my-list');

parentElement.addEventListener('click', function(e) {
    // Check if the clicked element is of a specific type or class you're interested in
    if (e.target && e.target.matches('selector-for-child-elements')) {
        // Perform actions based on the clicked child element
        console.log('Event from dynamically added child element:', e.target);
    }
});