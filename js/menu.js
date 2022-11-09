(() => {
    const menuOpenBtn = document.querySelector('[data-menu]');
    const menuCloseBtn = document.querySelector('[data-menu-button]');
  
    const mobileMenu = document.querySelector('[data-menu]');
    // const body = document.querySelector('body');
  
    menuOpenBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', openMenu);
  
    function openMenu() {
      mobileMenu.classList.toggle('is-open');
      // body.classList.toggle('no-scroll');
    }
  })();