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

const skillCards = document.getElementsByClassName('skills-card');
const skillIcons = document.getElementsByClassName('skills-card-icon-container');

skillCards[0].onmouseover = () => {
    skillIcons[0].style.background = 'url("../personal-portfolio-page/img/icons/html-colour.svg")';
    skillIcons[1].style.background = 'url("../personal-portfolio-page/img/icons/css-colour.svg")';
}
skillCards[1].onmouseover = () => skillIcons[2].style.background = 'url("../personal-portfolio-page/img/icons/js-colour.svg")';
skillCards[2].onmouseover = () => skillIcons[4].style.background = 'url("../personal-portfolio-page/img/icons/figma-colour.svg")';

skillCards[0].onmouseout = () => {
    skillIcons[0].style.background = '';
    skillIcons[1].style.background = '';
}
skillCards[1].onmouseout = () => skillIcons[2].style.background = '';
skillCards[2].onmouseout = () => skillIcons[4].style.background = '';