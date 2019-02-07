// Your code goes here


//Event 1
const busPicture = document.getElementById('bus');
busPicture.addEventListener('mouseenter', () => {
    busPicture.setAttribute('src', 'img/Game-Crazy-Bus.jpg');
    busPicture.style.maxWidth = '100%';
});
//Event 2
busPicture.addEventListener('mouseleave', () => {
    busPicture.setAttribute('src', 'img/fun-bus.jpg');
});
//Event 3
const logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', () => {
    alert `Ahhh! you double clicked the logo! - Easter Egg`;
});
//Event 4
const firstPic = document.getElementById('map-picture');
firstPic.addEventListener('click', () => {
    firstPic.style.display = 'none';
})
//Event 5
const secondPic = document.getElementById('boat');
secondPic.addEventListener('mouseover', () => {
    secondPic.style.border = '2px dashed dodgerblue';
})

//Event 6
const pTags = document.querySelectorAll('p');
for(let i = 0; i < pTags.length; i++){
    pTags[i].addEventListener('wheel', (event) => {
        event.target.style.border = '2px dashed magenta';
    })
}

//Event 7
const html = document.querySelector('html');
html.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'dodgerblue';
})

//Event 8 
const thirdPic = document.getElementById('boat2');
thirdPic.addEventListener('dragend', (event) => {
    event.target.style.opacity = '0.5'
})

//Event 9 
busPicture.addEventListener('dragover', event => {
    event.target.style.display = 'none';
})

//Event 10
const navigation = document.querySelector('nav');
navigation.addEventListener('click', event => {
    alert `You clicked a button but this popped up too haha!`;


})


const navAtag = document.querySelectorAll('.nav-link');

//Event 11
for(let i = 0; i < navAtag.length; i++){
    navAtag[i].addEventListener('click', (event) => {
        event.target.style.borderBottom = '1px solid black';
        event.stopPropagation();
        event.preventDefault();
    })
}



