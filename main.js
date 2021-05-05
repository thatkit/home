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
const skillLevels = document.getElementsByClassName('level-fraction');

skillCards[0].onmouseover = () => {
    skillIcons[0].style.background = 'url("../personal-portfolio-page/img/icons/html-colour.svg")';
    skillIcons[1].style.background = 'url("../personal-portfolio-page/img/icons/css-colour.svg")';
    for (let i = 0; i < 7; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[1].onmouseover = () => {
    skillIcons[2].style.background = 'url("../personal-portfolio-page/img/icons/js-colour.svg")';
    for (let i = 7; i < 13; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[2].onmouseover = () => {
    skillIcons[4].style.background = 'url("../personal-portfolio-page/img/icons/figma-colour.svg")';
    for (let i = 13; i < 19; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}

skillCards[0].onmouseout = () => {
    skillIcons[0].style.background = '';
    skillIcons[1].style.background = '';
    for (let i = 0; i < 7; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[1].onmouseout = () => {
    skillIcons[2].style.background = '';
    for (let i = 7; i < 13; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[2].onmouseout = () => {
    skillIcons[4].style.background = '';
    for (let i = 13; i < 19; i++) {
        skillLevels[i].style.background = '';
    }
}

// Contacts hover animation

const contacts = document.getElementsByClassName('contact');
const contactIcons = document.getElementsByClassName('contact-icon-container');

contacts[0].onmouseover = () => contactIcons[0].style.backgroundImage = 'url("../personal-portfolio-page/img/icons/github-colour.svg")';
contacts[1].onmouseover = () => contactIcons[1].style.backgroundImage = 'url("../personal-portfolio-page/img/icons/gmail-colour.svg")';

contacts[0].onmouseout = () => contactIcons[0].style.backgroundImage = '';
contacts[1].onmouseout = () => contactIcons[1].style.backgroundImage = '';