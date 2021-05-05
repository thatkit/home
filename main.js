/* Animations */

// Navbar highlight

const worksHeading = document.getElementById('works-heading');
const skillsHeading = document.getElementById('skills-heading');
const contactsHeading = document.getElementById('contacts-heading');

const worksNav = document.getElementById('works-nav');
const skillsNav = document.getElementById('skills-nav');
const contactsNav = document.getElementById('contacts-nav');

const isInViewport = element => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -200 &&
        rect.bottom <= ((window.innerHeight - 100) || (document.documentElement.clientHeight - 100))
    );
}

const highlight = el => {
    
    let nav = '';
    if (el === worksHeading) {
        nav = worksNav;
    } else if (el === skillsHeading) {
        nav = skillsNav;
    } else if (el === contactsHeading) {
        nav = contactsNav;
    } else {
        console.log('wrong nav asignment');
    }

    if (isInViewport(el) === true) {
        nav.style.color = '#C79F4E';
        nav.style.opacity = 1;
    } else {
        nav.style.color = '';
        nav.style.opacity = '';
    }

}

const hightlightSet = () => {
    highlight(worksHeading);
    highlight(skillsHeading);
    highlight(contactsHeading);
}

document.onwheel = () => hightlightSet();
document.onmouseover = () => hightlightSet();
document.onclick = () => hightlightSet();

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