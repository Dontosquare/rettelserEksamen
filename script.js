


const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });


const menuItems = [
    { name: 'Forside', link: 'index.html'},
    { name: 'Produkter', link: 'produkter.html'},
    { name: 'Gavekurv', link: 'bygenkurv.html'},
    { name: 'Kontakt', link: 'kontakt.html'},
];

const menuContainer = document.getElementById('menu');
const menuContainerNav = document.getElementById('menuNav')


for (let i = 0; i < menuItems.length; i++)  {
    menuContainer.innerHTML += '<li><a href="' + menuItems[i].link + '">' + menuItems[i].name;
    menuContainerNav.innerHTML += '<p><a href="' + menuItems[i].link + '">' + menuItems[i].name;
}





