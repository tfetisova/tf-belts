$('.page-header').vide({
    mp4: '../video/video.mp4',
    webm: '../video/video.webm',
    ogv: '../video/video.ogv',
    poster: '../video/video.png'
},{
    bgColor: '#000',
    position: '50% 100%',
});
$('.button.button_big-btn').click(()=>{$('.contact-form').addClass('active-grid')});
$('.contact-form__btn-close').click(()=>{
    $('.contact-form').removeClass('active-grid')
});
$('.navigation__sprite-mobile-menu').click(()=>{
    $('.navigation__main-menu').addClass('active-grid').animate({
        left:0,
        opacity:1
    },500)
});
$('.navigation__sprite-menu-close').click(()=>{
    $('.navigation__main-menu').animate({
        left:'-100%',
        opacity:0
    },500).removeClass('active-grid');
});
$('.navigation__menu-item-link').on('click',function () {
    $('html, body').animate({
        scrollTop:$($(this).attr('href')).offset().top
    },700);
    $('.navigation__main-menu').removeClass('active-grid');

});
let top200vh=$('.border-200vh').offset().top;
$(window).scroll(function () {
    $('.btn-to-top')['fade'+ ($(this).scrollTop() >= top200vh ? 'In': 'Out')](500)
});

$('.btn-to-top').on('click', function () {
    $('html, body').animate({
        scrollTop:$($(this).attr('href')).offset().top+'px'
    },700);
});
$('.button_btn-more-read').on('click', function () {
    $('.belts__rest-advantages').slideToggle('slow', function () {
        if($('.belts__rest-advantages').is(":visible")){
            $('.button_btn-more-read').text('Згорнути')
        }else{
            $('.button_btn-more-read').text('Читати далі')
        }
    })
});
$('.button_btn-more-howto').on('click', ()=>{
    $('.contact-form__howto-measure').toggle('slow');
});
let sliders = Array.from($('.slider'));

function nextSlide(slider) {
    let slides = Array.from(slider.children);
    console.log('slides',slides);
    let currentSlideIndex = slides.findIndex(item =>{
        return item.attributes[0].value.split(' ').includes('slide-active');
    });
    console.log('currentSlideIndex',currentSlideIndex);
    let nextSlideIndex = (+index+1)%+slides.length;
    $(`${slider}:eq(${nextSlideIndex})`).siblings().removeClass('slide-active');
    $(`${slider}:eq(${nextSlideIndex})`).addClass('slide-active');

    // let currentSlide = slides.find($('.slide-active'))
    // console.log('currentSlide',currentSlide);
}
function prevSlide(slider) {
    let slides = Array.from(slider.children);
    console.log('slides',slides);
    let currentSlideIndex = slides.findIndex(item =>{
        return item.attributes[0].value.split(' ').includes('slide-active');
    });
    console.log('currentSlideIndex',currentSlideIndex);
    let prevSlideIndex = (+index+1)%+slides.length;
    if (prevSlideIndex){
        prevSlideIndex -= 1;
        $(`${slider}:eq(${prevSlideIndex})`).siblings().removeClass('active');
        $(`${slider}:eq(${prevSlideIndex})`).addClass('slide-active');
    }  else {
        prevIndex=slide.length-1;
        $(`${slider}:eq(${prevSlideIndex})`).siblings().removeClass('active');
        $(`${slider}:eq(${prevSlideIndex})`).addClass('slide-active');
    }
}
$('.slider__nav-area--next').click(function () {
    console.log('$(this).parents()',$(this).parents());
});
// moveSlide(sliders[0]);
// let slides = $('.slider__description-img');
// console.log('slides: ',slides);
// let currentSlide = 0;
// $('.slider__nav-area--next').on('click', ()=>{
//     currentSlide = (currentSlide+1)%slides.length;
//     console.log('on NEXt click currentSlide - ',currentSlide);
//     // slide[currentSlide].siblings().removeClass('slide-active');
//     // slide[currentSlide].addClass('slide-active');
// });
