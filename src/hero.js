export default loadHero;

// text contents
const HERO_HEADING = `Fresh and Healthy Food Specialties`;
const HERO_SUBTEXT = `Variety of fresh food served just for you, your solution when hungry in the middle of the night with super fast delivery`;

function createHero() {
    const heroSubtext = document.createElement('p');
    heroSubtext.classList.add('hero__subtext');
    heroSubtext.textContent = HERO_SUBTEXT;

    const heroHeading = document.createElement('h1');
    heroHeading.classList.add('hero__heading');
    heroHeading.textContent = HERO_HEADING;

    const hero = document.createElement('section');
    hero.classList.add('hero');

    hero.appendChild(heroHeading);
    hero.appendChild(heroSubtext);

    return hero;
}

function loadHero() {
    //get main
    const main = document.querySelector('main');

    //create hero
    const hero = createHero();

    //display hero
    main.appendChild(hero);
}
