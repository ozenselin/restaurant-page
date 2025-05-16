import './menu.css';
export default loadMenu;

// text contents
const CONTENT_HEADING = `Choose Our Menu`;
const menu = [
    {
        heading: "Rice Bowl",
        description: "A hearty bowl of steamed rice served with sautéed vegetables and aromatic spices. Perfect for a light and satisfying meal.",
        cost: "$32"
    },
    {
        heading: "Medium Beef and Chili Soup",
        description: "A mildly spicy soup made with tender beef chunks and fresh chili peppers. Great for warming up on cold days.",
        cost: "$37"
    },
    {
        heading: "Butter Bread With Mixed Vegetables",
        description: "Crispy buttered bread topped with a colorful mix of seasoned vegetables. A tasty and wholesome appetizer.",
        cost: "$25"
    },
    {
        heading: "Noodles With Meat And Curry",
        description: "Soft noodles stir-fried with juicy meat and rich curry sauce. A flavorful and satisfying main course.",
        cost: "$30"
    },
    {
        heading: "Fruit Salad With Meat Roll",
        description: "A unique combination of fresh fruit salad served alongside savory meat rolls. A refreshing dish with a twist.",
        cost: "$35"
    },
    {
        heading: "Vegetable and Meat Mixed Fruit Salad",
        description: "A fusion of sweet fruits, grilled vegetables, and seasoned meat pieces. A bold and balanced flavor experience.",
        cost: "$47"
    },
    {
        heading: "Butter Bread With Mixed Vegetables",
        description: "Golden buttered toast layered with stir-fried mixed vegetables. Perfect as a snack or a light lunch.",
        cost: "$40"
    },
    {
        heading: "Melon Soup With Watermelon",
        description: "A chilled, fruity soup made from blended melon and watermelon. A refreshing and healthy summer dish.",
        cost: "$30"
    }
];


function createMenuItem(heading, description, cost) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');

    menuItem.innerHTML += 
                    `<h4 class="menu-item__heading">${heading.trim()}</h4>
                    <p class="menu-item__description">${description.trim()}</p>
                    <span class="menu-item__cost">${cost.trim()}</span>
                    <button class="menu-item__button menu-item__button--add"></button>`;

    return menuItem;
}

function createMenu(){
    const menuPanel = document.createElement('section');
    menuPanel.classList.add('menu-panel');

    const contentHeading = document.createElement('h3');
    contentHeading.classList.add('content-heading');
    contentHeading.textContent = CONTENT_HEADING;
    menuPanel.appendChild(contentHeading);

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    
    for(const {heading, description, cost} of menu) {
        menuList.appendChild(createMenuItem(heading, description, cost));
    }

    menuPanel.appendChild(menuList);

    const seeAllButton = document.createElement('button');
    seeAllButton.classList.add('menu-panel__see-all-button');
    seeAllButton.id = 'see-all-btn';
    seeAllButton.textContent = 'See All';

    menuPanel.appendChild(seeAllButton);

    return menuPanel;
}

function loadMenu() {
    //get main
    const main = document.querySelector('main');

    //clear main
    main.innerHTML = '';

    //create menu
    const menuPanel = createMenu();

    //display menu
    main.appendChild(menuPanel);
}