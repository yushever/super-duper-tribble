let menu = document.querySelector('.open-burger');
let body = document.querySelector('body');
let modalWindowFeedback = document.querySelector('.modal-feedback');
let modalWindowCall = document.querySelector('.modal-call');


document.addEventListener ('mouseup', function (e) {
    console.log(e.target);
    if (e.target.className === "overlay") {
        menu.classList.add ('hidden');
        body.classList.remove ('overlay');
        modalWindowFeedback.classList.remove ('open');
        modalWindowCall.classList.remove ('open');
    }
});