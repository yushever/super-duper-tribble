let openButton = document.querySelector('.header__menu-burger');
let closeButton = document.querySelector('.open-burger__close-button');
let menu = document.querySelector('.open-burger');
let body = document.querySelector('body');
let openedMenu = false;

function menuMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1439px)');
    let desktop = window.matchMedia('(min-width: 1440px)');
    
    if (mobile.matches) {
        if (openedMenu) {
            menu.classList.remove ('hidden');
            body.classList.add ('overlay');
        } else {
            menu.classList.add ('hidden');
            body.classList.remove ('overlay');
        }
    } else if (desktop.matches) {
        menu.classList.remove ('hidden');
        openedMenu = false;
    }
}
window.addEventListener('load', function() {
    menuMode();
});
window.addEventListener('resize', function() {
    menuMode();
});

openButton.addEventListener('click', function(evt){
    evt.preventDefault();
    menu.classList.remove ('hidden');
    body.classList.add ('overlay');
    openedMenu = true;
});
closeButton.addEventListener('click', function(evt){
    evt.preventDefault();
    menu.classList.add ('hidden');
    body.classList.remove ('overlay');
    openedMenu = false;
});

// menu.style.height = body.style.height;
// document.addEventListener ('mouseup', function (e) {
//     console.log(e.target);
//     if (e.target.className === "overlay") {
//         menu.classList.add ('hidden');
//         body.classList.remove ('overlay');
//     }
// });