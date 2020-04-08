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


//scroll event - change font color on first paragraph on scroll
const scrollColor = document.querySelector('p');
document.addEventListener('scroll', () => {
    return scrollColor.style.color = "blue";
});


//keydown event - alert pop up
document.addEventListener('keydown', () => {
    return alert('You Pressed A Button!')
});


//drag and drop event
const dragSun = document.querySelector('#sunDrop');
dragSun.addEventListener('drag', () => {
    return dragSun.style.color = 'red';
});

document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "3px dotted orange";
    }
  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      document.getElementById("sunDrop").style.color = "";
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById("sunDrop"));
    }
  });