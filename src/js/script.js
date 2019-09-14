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
$('#pay-when-receive').on('click',()=>{
    $('.payment__list-item[data-id="pay-when-receive"]').slideToggle('slow', function () {
    });
});
$('#pay-cash').on('click',()=>{
    $('.payment__list-item[data-id="pay-cash"]').slideToggle('slow', function () {
    });
});
$('#pay-bank').on('click',()=>{
    $('.payment__list-item[data-id="pay-bank"]').slideToggle('slow', function () {
    });
});
$('.trigger-open').on('click',()=>{
    $('.text-us-viber, .text-us-telegram').show('slow');
    $('.trigger-close').show('slow');
    $('.trigger-open').hide();
});
$('.trigger-close').on('click',()=>{
    $('.text-us-viber, .text-us-telegram').hide('slow');
    $('.trigger-open').show();
    $('.trigger-close').hide();
});