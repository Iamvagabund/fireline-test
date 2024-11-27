document.addEventListener('DOMContentLoaded', () => {

  //MODALS
  const modal = document.getElementById('modal');
  const modalDialog = modal?.querySelector('.modal__dialog');
  const actionButtons = document.querySelectorAll('.header__action[data-modal]');

  const modalContent = {
    login: `
      <h2 class="modal__title">Login</h2>
      <div class="modal__field">
        <label for="login-email" class="modal__label">Email</label>
        <input type="email" id="login-email" class="modal__input" placeholder="Enter your email" required>
      </div>
      <div class="modal__field">
        <label for="login-password" class="modal__label">Password</label>
        <input type="password" id="login-password" class="modal__input" placeholder="Enter your password" required>
      </div>
      <button type="submit" class="modal__submit">Login</button>
    `,
    register: `
      <h2 class="modal__title">Register</h2>
      <div class="modal__field">
        <label for="register-username" class="modal__label">Username</label>
        <input type="text" id="register-username" class="modal__input" placeholder="Enter your username" required>
      </div>
      <div class="modal__field">
        <label for="register-email" class="modal__label">Email</label>
        <input type="email" id="register-email" class="modal__input" placeholder="Enter your email" required>
      </div>
      <div class="modal__field">
        <label for="register-password" class="modal__label">Password</label>
        <input type="password" id="register-password" class="modal__input" placeholder="Enter your password" required>
      </div>
      <button type="submit" class="modal__submit">Register</button>
    `,
  };

  const openModal = (type) => {
    if (!modalDialog) return;
    modalDialog.innerHTML = `
      <button class="modal__close">&times;</button>
      <form class="modal__form">${modalContent[type]}</form>
    `;
    modal.classList.add('modal--visible');

    const closeButton = modalDialog.querySelector('.modal__close');
    closeButton?.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    modal?.classList.remove('modal--visible');
    if (modalDialog) modalDialog.innerHTML = '';
  };

  actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modalType = button.getAttribute('data-modal');
      if (modalType in modalContent) openModal(modalType);
    });
  });

  modal?.addEventListener('mousedown', (e) => {
    if (e.target === modal) {
      modal.addEventListener(
        'mouseup',
        (mouseupEvent) => {
          if (mouseupEvent.target === modal) {
            closeModal();
          }
        },
        { once: true }
      );
    }
  });

  //SWIPER SLIDER
  const swiperContainer = document.querySelector('.swiper');
  if (swiperContainer) {
    new Swiper(swiperContainer, {
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        425: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        260: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
      },
    });
  }


  //BURGER MENU
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuItems = document.querySelectorAll('.header__menu-link');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 1200) {
        burger.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  });
});
