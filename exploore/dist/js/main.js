window.addEventListener('DOMContentLoaded', init)

function init () {

      var modal = document.querySelector('.modal__login');

      var modalSign = document.querySelector('.modal__sign-up');

      var overlay = document.querySelector('.overlay');

      var loginBtn = document.querySelector('.login');

      var signUpBtn = document.querySelector('.sign-up');

      function removeClassToModal() {
            modal.classList.remove('modal-active');
            modalSign.classList.remove('modal-active');
            overlay.classList.remove('overlay-active');
      };

      function addClassToModal() {
            modal.classList.add('modal-active');
            overlay.classList.add('overlay-active');
      };

      function addClassToModalSign() {
            modalSign.classList.add('modal-active');
            overlay.classList.add('overlay-active');
      };
      

      function modalShow() {
            var modal = document.querySelector('.modal__login');

            var modalSign = document.querySelector('.modal__sign-up');

            var overlay = document.querySelector('.overlay');

            var loginBtn = document.querySelector('.login');
            
            var signUpBtn = document.querySelector('.sign-up');

            var closeModal = document.querySelector('.close-modal');

            var closeModalSign = document.querySelector('.close-modal-sign');

            loginBtn.addEventListener('click', function (event) {            
            event.preventDefault();
            addClassToModal();
            document.body.style.overflow = 'hidden ';
            });
            signUpBtn.addEventListener('click', function (event) {
                  event.preventDefault();
                  addClassToModalSign();
                  document.body.style.overflow = 'hidden ';
            });
            closeModal.addEventListener('click', function (event) {
                  event.preventDefault();
                  removeClassToModal();                  
                  document.body.style.overflow = 'auto';
            });
            closeModalSign.addEventListener('click', function (event) {
                  event.preventDefault();
                  removeClassToModal();                  
                  document.body.style.overflow = 'auto';
            });
            overlay.addEventListener('click', function (event) {
                  removeClassToModal();
                  removeClassToModalSign();
                  document.body.style.overflow = 'auto';
            });            
            function addClassToModal() {
                  modal.classList.add('modal-active');                  
                  overlay.classList.add('overlay-active');
            };
            function addClassToModalSign() {
                  modalSign.classList.add('modal-active');
                  overlay.classList.add('overlay-active');
            };
            function removeClassToModal() {
                  modal.classList.remove('modal-active');
                  modalSign.classList.remove('modal-active');
                  overlay.classList.remove('overlay-active');
            };
           
      }     

      modalShow();    

      function reviewSlider() {
            var slides = document.querySelectorAll('.customer__review');
    
            var currentSlide = 0;
    
            var slideInterval = setInterval(nextSlide, 4000);

            function nextSlide() {

                  slides[currentSlide].className = 'customer__review';

                  currentSlide = (currentSlide + 1) % slides.length;

                  slides[currentSlide].className = 'customer__review showing';
            }
      }

      reviewSlider();


      function slider() {

            var slide_left = document.querySelector('.slide-left'),

                slide_right = document.querySelector('.slide-right'),

                slides = document.querySelectorAll('.slider__item'),   

                idx = 1;
                  

            slide_right.addEventListener('click', moveLeft);

            

            function moveLeft() {  

                  slide_left.style.opacity = '1';
            
                  slides[idx].style.display = 'none'; 

                  slides[++idx].style.display = 'flex';
                  
                  if (idx === slides.length - 1) {

                        slide_right.style.opacity = '0';
                        
                  }
            }

            slide_left.addEventListener('click', moveRight);

            function moveRight() {

                  slide_right.style.opacity = '1';
               
                  slides[idx].style.display = 'none';

                  slides[--idx].style.display = 'flex';
                  
                  if (idx === 0) {

                        slide_left.style.opacity = '0';
                        
                  }
            }

      }

      slider();

      var formLogin = document.querySelector('.modal__login--form');    

      var formSign = document.querySelector('.modal__sign-up--form');

      var err = document.querySelectorAll('.fa-exclamation-circle');

      var modalLogin = document.querySelector('.modal__login--form-submit');

      function ajax() {   

            formLogin.addEventListener('submit', function (event) {

                  if (event.target.email.value !== '' &&
                  event.target.password.value !== '') {

                        event.preventDefault();

                        for (let i = 0; i < err.length; i++) {

                              err[i].style.display = 'none';
                        }                  

                        var formLoginData = {

                              email: event.target.email.value,
                              password: event.target.password.value

                        };    

                        var xhr__users = new XMLHttpRequest();

                        xhr__users.open('GET', 'https://firstapp-3c009.firebaseio.com/students.json');

                        xhr__users.responseType = 'json';

                        xhr__users.addEventListener('load', function () {

                              // var data = JSON.parse(xhr.responseText);                 

                              var data__users = xhr__users.response;

                              for (var key in data__users) {

                                    var users = data__users[key];

                                    var a = document.createElement('a');

                                    a.textContent = `Email:${users.email}; Password: ${users.password}`;


                                    var xhr = new XMLHttpRequest();

                                    xhr.open('GET', 'https://firstapp-3c009.firebaseio.com/users.json');

                                    xhr.responseType = 'json';

                                    

                                    xhr.addEventListener('load', function () {

                                          // var data = JSON.parse(xhr.responseText);                 

                                          var data = xhr.response;

                                          for (var key in data) {

                                                var person = data[key];

                                                var p = document.createElement('p');

                                                p.textContent = `Email:${formLoginData.email}; Password: ${formLoginData.password}`;

                                                if (person.email === formLoginData.email && person.password === formLoginData.password) {

                                                      var logAndSign = document.querySelector('.log-and-sign');

                                                      var p = document.createElement('p');

                                                      var userIcon = document.createElement('i');

                                                      userIcon.classList.add('fa');

                                                      userIcon.classList.add('fa-user-circle');

                                                      p.textContent = `${person.name} ${person.surname}`;                                                

                                                      p.classList.add('login');

                                                      logAndSign.removeChild(signUpBtn);

                                                      logAndSign.removeChild(loginBtn);

                                                      logAndSign.appendChild(userIcon);

                                                      logAndSign.appendChild(p);

                                                      logAndSign.classList.add('user-true');

                                                      var title = document.getElementsByTagName(title);                                                

                                                      break

                                                } else {   
                                                      
                                                      for (let i = 0; i < err.length; i++) {

                                                            err[i].style.display = 'inline-block';

                                                      }
                                                }
                                          }

                                    });

                                    xhr.send();
                              }

                        });

                        xhr__users.send();
                        

                        removeClassToModal();

                        document.body.style.overflow = 'auto';

                        event.target.email.value = '';

                        event.target.password.value = '';

                  } else{

                        event.preventDefault();

                        for (let i = 0; i < err.length; i++) {

                              err[i].style.display = 'inline-block';

                        }
                  }

            });

            
            formSign.addEventListener('submit', function (event) {

                  if (event.target.email.value !== '' &&
                  event.target.name.value !== '' &&
                  event.target.surname.value !== '' &&
                  event.target.password.value !== '') {

                        for (let i = 0; i < err.length; i++) {

                              err[i].style.display = 'none';
                        }            

                        event.preventDefault();

                        var formSignData = {

                              email: event.target.email.value,
                              password: event.target.password.value,
                              name: event.target.name.value,
                              surname: event.target.surname.value

                        };

                        formSignData = JSON.stringify(formSignData);

                        var xhr = new XMLHttpRequest();

                        xhr.open('POST', 'https://firstapp-3c009.firebaseio.com/users.json');

                        xhr.send(formSignData); 
                        
                        removeClassToModal();
                  
                        document.body.style.overflow = 'auto';

                        var logAndSign = document.querySelector('.log-and-sign');                  

                        var p = document.createElement('p');    
                        
                        var userIcon = document.createElement('i');

                        userIcon.classList.add('fa');

                        userIcon.classList.add('fa-user-circle');

                        p.textContent = `${event.target.name.value} ${event.target.surname.value}`;  
                        
                        p.classList.add('login');                  

                        logAndSign.removeChild(signUpBtn);
                        
                        logAndSign.removeChild(loginBtn);

                        logAndSign.appendChild(userIcon);
                        
                        logAndSign.appendChild(p);

                        logAndSign.classList.add('user-true');
                              
                        event.target.email.value = '';

                        event.target.name.value = '';

                        event.target.surname.value = '';

                        event.target.password.value = '';

                  } else{
                        
                        event.preventDefault();                  

                        for (let i = 0; i < err.length; i++) {

                              err[i].style.display = 'inline-block';  

                        }                  
                  }


            });

      }

      ajax();

      
      function nav(control, menu, overlay, overlayActiveClass, menuActiveClass) {
            var isOpen = false;
            control.addEventListener('click', function (e) {
                  isOpen = !isOpen;
                  menu.classList.toggle(menuActiveClass);
                  overlay.classList.toggle(overlayActiveClass);
                  document.body.style.overflow = 'hidden';
            });

            window.addEventListener('keyup', function (event) {
                  event.preventDefault();
                  if (event.keyCode === 27) {
                        isOpen = false;
                        menu.classList.remove(menuActiveClass);
                        overlay.classList.remove(overlayActiveClass);
                  }
            });

            overlay.addEventListener('click', function (event) {
                  isOpen = false;
                  menu.classList.remove(menuActiveClass);
                  overlay.classList.remove(overlayActiveClass);
            });
      }

      var control = document.querySelector('.btn');
      var menu = document.querySelector('.menu');
      var overlay = document.querySelector('.overlay__menu');
      console.log(overlay);


      nav(control, menu, overlay, 'overlay--active', 'menu--active');

      

    


      // var slides = document.querySelectorAll('.customer__review');

      // console.log(object);
    

};