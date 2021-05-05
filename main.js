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
