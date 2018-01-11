window.addEventListener('DOMContentLoaded', init);

function init () {
      function slider() {
            var slideImg = document.querySelectorAll('.slide__img'),
            arrLeft = document.querySelector('.arr-left'),
            arrRight = document.querySelector('.arr-right');
            idx = 2;
            console.log(slideImg[idx]);
            arrRight.addEventListener('click', moveLeft);
            window.addEventListener('keyup', function (event) {
                  event.preventDefault();
                  if (event.keyCode === 39) {
                        moveLeft();
                  }
                  if (event.keyCode === 37) {
                        moveRight();
                  }
            });
            function moveLeft() {
                  arrLeft.style.display = 'flex';
                  slideImg[idx].classList.remove('active-slide');                  
                  slideImg[++idx].classList.add('active-slide');
                  if (idx === slideImg.length - 1) {
                        arrRight.style.display = 'none';
                  }
            }
            arrLeft.addEventListener('click', moveRight);
            function moveRight() {
                  arrRight.style.display = 'flex';
                  slideImg[idx].classList.remove('active-slide'); 
                  slideImg[--idx].classList.add('active-slide');
                  if (idx === 0) {
                        arrLeft.style.display = 'none';
                  }
            }
      }

      slider();

      function signUp() {
            var formSign = document.querySelector('.sign-up__button');
            var signBtn = document.querySelector('.modal__login--form-submit');
            var signBtn1 = document.querySelector('.event__button');
            var modal = document.querySelector('.modal__sign-up');
            var closeModal = document.querySelector('.close-modal');
            var overlay = document.querySelector('.overlay');
            overlay.addEventListener('click', function () {
                  modal.classList.remove('modal__sign-up-active');
                  overlay.classList.remove('overlay-active');
            });            
            closeModal.addEventListener('click', function () {
                  modal.classList.remove('modal__sign-up-active');
                  overlay.classList.remove('overlay-active');
            });
            formSign.addEventListener('click', function (event) {
                  event.preventDefault();
                  modal.classList.add('modal__sign-up-active');
                  overlay.classList.add('overlay-active');
            });
            window.addEventListener('keyup', function (event) {
                  event.preventDefault();
                  if (event.keyCode === 27) {
                        modal.classList.remove('modal__sign-up-active');
                        overlay.classList.remove('overlay-active');
                  }
            });
      }

      signUp();
};