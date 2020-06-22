window.addEventListener('DOMContentLoaded', () => {

    // Hamburger

    const menu = document.querySelector('.header-menu'),
    menuItem = document.querySelectorAll('.header-menu__item'),
    hamburger = document.querySelector('.header-hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header-hamburger_active');
        menu.classList.toggle('header-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header-hamburger_active');
            menu.classList.toggle('header-menu_active');
        });
    });

    // Popup

    const popupTrig = document.querySelectorAll('[data-popup]'),
          popupMoreTrig = document.querySelectorAll('[data-more]'),
          popup = document.querySelector('.popup'),
          popupMore = document.querySelector('.popup_more'),
          inputs = document.querySelectorAll('.inputfile'),
          popupCloseBtn = document.querySelectorAll('[data-close]');
    
    function openPopup() {
        popup.classList.add('show');
        popup.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    
    popupTrig.forEach(btn => {
        btn.addEventListener('click', openPopup);
    });

    function openPopupMore() {
        popupMore.classList.add('show');
        popupMore.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    popupMoreTrig.forEach(btn => {
        btn.addEventListener('click', openPopupMore);
    });

    function closePopup() {
        popup.classList.add('hide');
        popup.classList.remove('show');
        document.body.style.overflow = '';
    }

    popupCloseBtn.forEach(close => {
        close.addEventListener('click', closePopup);
    });

    function closePopupMore() {
        popupMore.classList.add('hide');
        popupMore.classList.remove('show');
        document.body.style.overflow = '';
    }

    popupCloseBtn.forEach(close => {
        close.addEventListener('click', closePopupMore);
    });
});