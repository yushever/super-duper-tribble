let openButtons = document.querySelectorAll('.modal-feedback-button');
let closeButton = document.querySelector('.modal-feedback__close-button');
let modalWindow = document.querySelector('.modal-feedback');
let body = document.querySelector('body');
let menu = document.querySelector('.open-burger');


for (let i = 0; i < openButtons.length; i ++) {
    openButtons[i].addEventListener ('click', function(evt){
        evt.preventDefault();
        modalWindow.classList.add('open');
        body.classList.add ('overlay');
        menu.classList.add ('hidden');
        
    });
};
closeButton.addEventListener ('click', function(evt){
    evt.preventDefault();
    modalWindow.classList.remove('open');
    body.classList.remove ('overlay');
    
});
