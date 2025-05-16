import './style.css';
import loadHero from './hero.js';
import loadAbout from './about.js';
import loadMenu from './menu.js';

//initialise app
document.addEventListener('DOMContentLoaded', () => {
    loadHero();
});

//add event listener to navlist
//catch and handle click events using switch-id method for each item(button)
const navList = document.querySelector('.nav-list');
navList.addEventListener('click', (event) => {
    const target = event.target;
    switch(target.id){
        case 'home-btn':
            loadHero();
            break;
        case 'about-btn':
            loadAbout();
            break;
        case 'menu-btn':
            loadMenu();
            break;
        default:
            break;
    }
});
