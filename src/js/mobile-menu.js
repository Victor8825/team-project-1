(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-open-btn'),
    closeMenuBtn: document.querySelector('.button__close'),
    menu: document.querySelector('.mobile__menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // openMenuBtn.classList.toggle('visually-hidden');
    refs.menu.classList.toggle('is-open');
  }
})();
