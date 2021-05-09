/* Animations */

// 1. Navbar highlight

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
        nav.style.fontWeight = 'bold';
        nav.style.display = 'block';
    } else {
        nav.style.color = '';
        nav.style.opacity = '';
        nav.style.fontWeight = '';
        nav.style.display = '';
    }

}

const hightlightSet = () => {
    highlight(worksHeading);
    highlight(skillsHeading);
    highlight(contactsHeading);
}

document.onscroll = () => hightlightSet();
document.onmouseover = () => hightlightSet();
document.onclick = () => hightlightSet();

// 2.1. Navbar menu icon active effect

const menu = document.getElementById('menu-icon');
const rectCol = document.getElementsByClassName('menu-rect');
const rectArr = Array.from(rectCol);

const colourMenuIcon = () => rectArr.forEach(element => element.style.background = '#C79F4E');
const uncolourMenuIcon = () => rectArr.forEach(element => element.style.background = '');

// 2.2. Navbar menu icon opening and closing

const toggleMenuIcon = () => rectArr.forEach(element => {
    if (!element.classList.contains('open')) {
        element.classList.add('open');
        element.classList.remove('close');
    } else if (!element.classList.contains('close')) {
        element.classList.add('close');
        element.classList.remove('open');
    }
});

// 2.3. Navbar menu opening

const activeArr = [document.querySelector('nav'), document.querySelector('nav > a'), document.querySelector('nav > ul'), document.querySelectorAll('nav h4')];

const openAndCloseMenu = item => {
    if (!item.classList.contains('active')) {
        item.classList.add('active');
        item.classList.remove('inactive');
    } else if (!item.classList.contains('inactive')) {
        item.classList.add('inactive');
        item.classList.remove('active');
    }
};

const toggleMenu = () => {
    activeArr.forEach(element => {
        if (element.length > 0) {
            element.forEach(el => openAndCloseMenu(el));
        } else if (typeof element.length === 'undefined') {
            openAndCloseMenu(element);
        } else {
            console.log('toggleMenu() issue');
        }
    })
}

// 2.4. Navbar functions calling

menu.onmousedown = () => colourMenuIcon();
menu.onmouseup = () => uncolourMenuIcon();
menu.onclick = () => {
    toggleMenuIcon();
    toggleMenu();
}

// 3. Hero first line changing text

const firstLineArr = ['ew', 'ovice', 'eat'];

const changeFirstLine = i => {
    if (i < firstLineArr.length) {
        setTimeout(function() {
            document.getElementById('hero-first-line').innerText = firstLineArr[i];
            changeFirstLine(++i);
        }, 1800);
    } else if (i === firstLineArr.length) {
        changeFirstLine(0);
    }
}

changeFirstLine(0);

// 4. Works cards hover animation

const workCards = document.getElementsByClassName('works-card');
const colouringFilm = document.getElementsByClassName('colouring-film');

workCards[0].onmouseover = () => colouringFilm[0].style.opacity = 0;
workCards[1].onmouseover = () => colouringFilm[1].style.opacity = 0;
workCards[2].onmouseover = () => colouringFilm[2].style.opacity = 0;

workCards[0].onmouseout = () => colouringFilm[0].style.opacity = '';
workCards[1].onmouseout = () => colouringFilm[1].style.opacity = '';
workCards[2].onmouseout = () => colouringFilm[2].style.opacity = '';

// 5. Skills cards hover animation

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

// 6. Contacts hover animation

const contacts = document.getElementsByClassName('contact');
const contactIcons = document.getElementsByClassName('contact-icon-container');

contacts[0].onmouseover = () => contactIcons[0].style.backgroundImage = 'url("../personal-portfolio-page/img/icons/github-colour.svg")';
contacts[1].onmouseover = () => contactIcons[1].style.backgroundImage = 'url("../personal-portfolio-page/img/icons/gmail-colour.svg")';

contacts[0].onmouseout = () => contactIcons[0].style.backgroundImage = '';
contacts[1].onmouseout = () => contactIcons[1].style.backgroundImage = '';

/* Responsive behaviour */

// JS and Figma skill icons swap

const jsToFigma = document.getElementsByClassName('skills-card-icon-container js')[0];
const figmaToJs = document.getElementsByClassName('skills-card-icon-container js-m')[0];

if (window.innerWidth <= 1080) {
    jsToFigma.classList.remove('js');
    jsToFigma.classList.add('figma');
    figmaToJs.classList.remove('js-m');
    figmaToJs.classList.add('js');
} else {
    console.log('window.innerWidth is above 1080px')
}