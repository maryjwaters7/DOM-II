// Your code goes here

//double click event -- change intro IMG
const changeImg = document.querySelector('.intro img');
changeImg.addEventListener('dblclick', () => {
    changeImg.src = 'img/fun-bus2.jpg'
});


//resize event -- change bg color
const changeBodyBg = document.querySelector('body');
window.addEventListener('resize', () => {
    return changeBodyBg.style.backgroundColor = 'springgreen';
});


//mouseover event -- give nav logo text a shadow
const logoShadow = document.querySelector('.logo-heading');
logoShadow.addEventListener('mouseover', () => {
    return logoShadow.style.textShadow = '2px 2px 5px yellow';
});


//wheel event -- change color of bottom img
const wheelImg = document.querySelector('.content-destination img');
document.addEventListener('wheel', () => {
    return wheelImg.style.filter = 'hue-rotate(65deg)';
});


//load event -- add purple border to nav links
const loadEvent = document.querySelector('img');
loadEvent.addEventListener('load', () => {
    return document.querySelector('.nav').style.border = '1px solid purple';
});


//focus and blur - change color of text input on form

const focusNameInput = document.querySelector('#name');
focusNameInput.addEventListener('focus', () => {
    return focusNameInput.style.backgroundColor = "yellow"
});

const blurNameInput = document.querySelector('#name');
blurNameInput.addEventListener('blur', () => {
    return blurNameInput.style.backgroundColor = "skyblue"
});

const focusEmailInput = document.querySelector('#email');
focusEmailInput.addEventListener('focus', () => {
    return focusEmailInput.style.backgroundColor = "yellow"
});

const blurEmailInput = document.querySelector('#email');
blurEmailInput.addEventListener('blur', () => {
    return blurEmailInput.style.backgroundColor = "skyblue"
});


//scroll event - change font color on scroll
const scrollColor = document.querySelector('p');
document.addEventListener('scroll', () => {
    return scrollColor.style.color = "blue";
});

