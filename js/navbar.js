document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementsByClassName('menu-button')[0];
  const navMenu = document.querySelector('.nav-menu.w-nav-menu');
  menuButton.onclick = () => {
    const { display } = navMenu.style;
    navMenu.style.display = display === '' || display === 'none' ? 'flex' : 'none';
  }
});
