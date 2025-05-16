export default loadAbout;

function createAbout() {
    const about = document.createElement('section');
    about.classList.add('about');

    about.innerHTML += 
            `<!-- Address & Reservation -->
            <div class="about__column">
              <h3 class="about__heading">Address</h3>
              <p class="about__address">
                Number 3891 Ranchview Dr. Richardson,<br>
                California 62639, Amerika Serikat Country
              </p>
              
              <h3 class="about__heading">Reservation</h3>
              <p class="about__contact">
                <a href="#" class="about__link">(613)-9811-2476</a><br>
                <a href="#" class="about__link">(613)-6354-7238</a>
              </p>
            </div>
            
            <!-- Email & Opening Hours -->
            <div class="about__column about__column--center">
              <a href="#" class="about__email">fooding@gmail.com</a>
              <h3 class="about__heading">Opening</h3>
              <p class="about__hours">Everyday – 10AM - 09PM</p>
            </div>
            
            <!-- Navigation Links -->
            <div class="about__column about__column--links">
              <div class="about__link-group">
                <h3 class="about__heading">General</h3>
                <ul class="about__list">
                  <li class="about__list-item"><a href="#" class="about__link">Services</a></li>
                  <li class="about__list-item"><a href="#" class="about__link">Reservation</a></li>
                  <li class="about__list-item"><a href="#" class="about__link">Blog</a></li>
                  <li class="about__list-item"><a href="#" class="about__link">Contact</a></li>
                </ul>
              </div>
              
              <div class="about__link-group">
                <h3 class="about__heading">Support</h3>
                <ul class="about__list">
                  <li class="about__list-item"><a href="#" class="about__link">FAQ</a></li>
                  <li class="about__list-item"><a href="#" class="about__link">Online Chat</a></li>
                  <li class="about__list-item"><a href="#" class="about__link">Call</a></li>
                </ul>
              </div>
            </div>`;

    return about;
}

function loadAbout() {
    //get main
    const main = document.querySelector('main');

    //clear main
    main.innerHTML = '';

    //create about
    const about = createAbout();

    //display menu
    main.appendChild(about);
}