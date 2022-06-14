let openButtons = document.querySelectorAll('.modal-call-button');
let closeButton = document.querySelector('.modal-call__close-button');
let modalWindow = document.querySelector('.modal-call');
let body = document.querySelector('body');
let menu = document.querySelector('.open-burger');

console.log(openButtons);


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