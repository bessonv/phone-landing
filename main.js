import './styles/root.less'

function setupReadButton() {
  let open = false;
  const readButton = document.querySelector('#read');
  const readText = document.querySelector('#read-text');

  readButton.addEventListener('click', () => {
    readText.classList.toggle('footer__text_hidden');
    open = !open;
    readButton.innerHTML = open ? 'Read less' : 'Read more';
  });
}

function setupMenuButton() {
  const menuButton = document.querySelector('#open-menu');
  const closeButton = document.querySelector('#close-menu');
  const menu = document.querySelector('#menu');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu_closed');
  });

  closeButton.addEventListener('click', () => {
    menu.classList.toggle('menu_closed');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupReadButton();
  setupMenuButton();
});