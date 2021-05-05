/* Animations */

// Works cards hover animation

const workCards = document.getElementsByClassName('works-card');
const colouringFilm = document.getElementsByClassName('colouring-film');

workCards[0].onmouseover = () => colouringFilm[0].style.opacity = 0;
workCards[1].onmouseover = () => colouringFilm[1].style.opacity = 0;
workCards[2].onmouseover = () => colouringFilm[2].style.opacity = 0;

workCards[0].onmouseout = () => colouringFilm[0].style.opacity = '';
workCards[1].onmouseout = () => colouringFilm[1].style.opacity = '';
workCards[2].onmouseout = () => colouringFilm[2].style.opacity = '';

// Skills cards hover animation

const skillCardsContainer = document.getElementById('skills-container');
const skillIcons = document.getElementsByClassName('skills-card-icon-container');

//skillCardsContainer.addEventListener('mouseover', function(event) {
//    skillIcons[0].style.background = 'url(\'../img/icons/html-colour.svg\')';
//})