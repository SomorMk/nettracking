let navButton = document.querySelector('#navButton')
let navCross = document.querySelector('#navCross')
let navArea = document.querySelector('#navArea')

navButton.addEventListener('click', () => {
    navArea.classList.remove('right-[-100%]')
    navArea.classList.add('right-0')
})

navCross.addEventListener('click', () => {
    navArea.classList.remove('right-0')
    navArea.classList.add('right-[-100%]')
})

let featuresSec = document.querySelector('#features')
let featuresBtn = document.querySelector('#featuresBtn')

featuresBtn.addEventListener('click', () => {
    window.scrollTo({
        top: featuresSec.offsetTop-100,
        behavior: 'smooth'
    })
    navArea.classList.remove('right-0')
    navArea.classList.add('right-[-100%]')
})

let pricingSec = document.querySelector('#pricing')
let pricingBtn = document.querySelector('#pricingBtn')

pricingBtn.addEventListener('click', () => {
    window.scrollTo({
        top: pricingSec.offsetTop-100,
        behavior: 'smooth'
    })
    navArea.classList.remove('right-0')
    navArea.classList.add('right-[-100%]')
})

let worksSec = document.querySelector('#works')
let worksBtn = document.querySelector('#worksBtn')

worksBtn.addEventListener('click', () => {
    window.scrollTo({
        top: worksSec.offsetTop-100,
        behavior: 'smooth'
    })
    navArea.classList.remove('right-0')
    navArea.classList.add('right-[-100%]')
})

let faqSec = document.querySelector('#faq')
let faqBtn = document.querySelector('#faqBtn')

faqBtn.addEventListener('click', () => {
    window.scrollTo({
        top: faqSec.offsetTop-100,
        behavior: 'smooth'
    })
    navArea.classList.remove('right-0')
    navArea.classList.add('right-[-100%]')
})

$('.service_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    dots: true,
    arrows: false
});

$('.testimonial_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    dots: true,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right nxt_aro"></i>',
    prevArrow: '<i class="fas fa-chevron-left prev_aro"></i>',
    centerMode: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 640,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});