import Swiper, {Navigation, Pagination} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);
let init = false;
let swiper = Swiper;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let desktop = window.matchMedia('(min-width: 769px)');
    

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.devices-content', {
                slidesPerView: "auto",
                loop: true,
                initialSlide: 0,
                
                spaceBetween: 0,
                pagination: {
                    clickable: true,
                    el: '.devices-pagination',
                  },   
            });
        }
    }
    // Disable (for desktop)
    else if(desktop.matches && init) {
        swiper.destroy();
        init = false;
    }
}
window.addEventListener('load', function() {
    swiperMode();
});
window.addEventListener('resize', function() {
    swiperMode();
});