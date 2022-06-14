import Swiper, {Navigation, Pagination} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);
let init = false;
let swiper = Swiper;

let priceTable = document.querySelector('.prices-table__content');
let tableElementTemplate = document.querySelector('#price_table_element').content.querySelector('li');

let prices = [
    {
        name: "Диагностика",
        price: "Бесплатно",
        time: "30 мин",
    },
    {
        name: "Замена дисплея",
        price: "1 000 ₽",
        time: "30 мин",
    },
    {
        name: "Замена полифонического динамика",
        price: "1 000 ₽",
        time: "30-100 мин",
    },
    {
        name: "Тестирование с выдачей технического заключения",
        price: "1 000 ₽",
        time: "30 мин",
    },
    {
        name: "Замена программного обеспечения",
        price: "1 000 ₽",
        time: "30-120 мин",
    },
]

function createTableElement(element) {
    let newElement = tableElementTemplate.cloneNode(true);
    newElement.querySelector('.prices-table__name').textContent = element.name;
    newElement.querySelector('.prices-table__price').textContent = element.price;
    newElement.querySelector('.prices-table__time').textContent = element.time;
    return newElement;
}

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let desktop = window.matchMedia('(min-width: 769px)');


    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.prices-content', {
                slidesPerView: "auto",
                loop: true,
                initialSlide: 0,
                
                spaceBetween: 0,
                pagination: {
                    clickable: true,
                    el: '.prices-pagination',
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

for (let i = 0; i < prices.length; i ++) {
    priceTable.appendChild(createTableElement(prices[i]));
}
