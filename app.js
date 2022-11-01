// document.body.style.backgroundColor = 'blue';
// document.style.color = 'red';
// document.getElementById('btn').style.color = 'purple'
// lets assign to a variable if theres multiple things we want to do on an element, 2 avoid writing document. avoid DRY(do not repeat yourself).
let body = document.body.style
body.backgroundColor = 'green'

// so let's dive into it proper
// The process of reaching and selecting elements is called the DOM, and we have different methods of querying the DOM, please see below

//=============getElementById('element')===================
//------getElementById('element')--- make sure the id matches
//------we can assign to a variable or just go straight using document.getElementById continously
//-----let's do basic things se we can understand cos we would go into complex situations which would inturn need the basic things you learnt.

//let's select the h1 tag.
// document.getElementById('title').style.color = 'yellow';

let h1 = document.getElementById('title');
h1.style.color = 'yellow'

// let's select the btn
let btn = document.getElementById('btn').style
btn.backgroundColor = 'red';
btn.color = 'white'

//=============getElementByTagName('tagname')=================
// HTML-collection = array-like object
// index,lenght properties,but not all array methods would work(can't use forEach)
let Header = document.getElementsByTagName('h2')
console.log(Header);
// Header[0].style.color = 'orange'
let newHeader = [...Header]
newHeader.forEach((h)=>{
    console.log(h);
    h.style.color = 'orange'
})

//=================getElementByClassname('className')===========
//----with className we can select multiple elements 
//----select the elements or group of elements you want
//----decide the effect you want to the selection

let itemsListed = document.getElementsByClassName('special')
console.log(itemsListed);
itemsListed[2].style.color = 'purple'
// items

let correctListedItems = [...itemsListed]
correctListedItems.forEach(function(xx){
    console.log(xx);
})

//============querySelector and querySlectorAll==========
// query('any css selector') -----selects single element
// select the element or group of element you want
// decide d effect you to apply to the selection

let anotherItem = document.querySelector('#title')
console.log(anotherItem);
anotherItem.style.color = 'red';

let singleItems = document.querySelectorAll('.special')
console.log(singleItems);

//querySelectorAll() ----- all, forEach would work here
const li = document.querySelectorAll('.special')
console.log(li);
li.forEach((itx)=>{
    console.log(itx);
    itx.style.color = 'green'
})
// innertext
let para = document.querySelector('p')
console.log(para);
para.innerText += ' and Jasper is here'
// incremental, decremental//

// textContent
let header = document.querySelector('h3')
console.log(Header.textContent);
console.log(Header.innerText);

// innerHTML
let change = document.querySelector('.html')
change.innerHTML = '<h1>We don change am finally</h1>'

// changing attribute
const link = document.querySelector('a')
console.log(link.getAttribute('href'));
link.getAttribute('href', 'https://www.facebook.com')
console.log(link.getAttribute('href'));
//to cahnge the link text from 'link to google' to 'link to facebook'
let newLink = document.querySelector('a')
newLink.innerText = ' Link to facebook'
console.log(newLink);

// className
// classList
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

const classValue = first.className
console.log(classValue);
// let's check if an element has a class using contains
let result = second.classList.contains('colors')
console.log(result);

if(result){
    console.log('it has it');
}else{
    console.log('it doesnt');
}

// =======Events========
// select elements
// addEventListeners
// What event, what to do
const btn1 = document.querySelector('.btn')
const headings = document.querySelector('h2')

function changeColor() {
    let hasClass = headings.classList.contains('red')
    if(hasClass){
        headings.classList.remove('red')
    }else{
        headings.classList.add('red')
    }
}
btn1.addEventListener('click',changeColor)



