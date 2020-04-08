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


// drag / drop event



