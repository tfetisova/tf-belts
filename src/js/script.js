let instance = new vidbg('.page-header', {
    mp4: '../video/video.mp4',
    webm: '../video/video.webm',
    poster: '../video/video.png',
    overlay: false // Boolean to display the overlay or not
}, {
    // Attributes
});



$('.button.button_big-btn').click(()=>{$('.contact-form_fixed').addClass('active-grid')});
$('.contact-form__btn-close').click(()=>{
    $('.contact-form_fixed').removeClass('active-grid')
});
$('body').click((e)=> {
    console.log(e.target.classList);
    if (e.target.classList.contains('contact-form_fixed')) {
        $('.contact-form_fixed').removeClass('active-grid')
    }
    if (!e.target.classList.contains('navigation__phone-marker')) {
        $('.navigation__phone-numbers').hide()
    }

    if(e.target.classList.contains('gallery__img-container')){
        $('.gallery__img-container').removeClass('zoom-in-img');
    }

});
$('.button.button_send-form').click(()=>{
    $('.contact-form_fixed').removeClass('active-grid')
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
$('.navigation__call').click(()=>{
    $('.navigation__phone-numbers').toggle('slow', function () {
        if($('.navigation__phone-numbers').is(":visible")){
            $('.navigation__call').addClass('navigation__call-hover')
            $('.navigation__call-arrow').removeClass('navigation__call-arrow--down');
            $('.navigation__call-arrow').addClass('navigation__call-arrow--up');
            $('.navigation__call-arrow').addClass('navigation__call-hover');

        }else{
            $('.navigation__call').removeClass('navigation__call-hover')
            $('.navigation__call-arrow').addClass('navigation__call-arrow--down');
            $('.navigation__call-arrow').removeClass('navigation__call-arrow--up');

        }
    });
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
if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
    $('#pay-bank').on('touchstart', ()=>{
        $('.payment__list-item[data-id="pay-bank"]').slideToggle();
    });
    $('#pay-when-receive').on('touchstart',()=>{
        $('.payment__list-item[data-id="pay-when-receive"]').slideToggle();
    });
    $('#pay-cash').on('touchstart',()=>{
        $('.payment__list-item[data-id="pay-cash"]').slideToggle();
    });
}else{
    $('#pay-bank').on('click',()=>{
        $('.payment__list-item[data-id="pay-bank"]').slideToggle();
    });
    $('#pay-when-receive').on('click',()=>{
        $('.payment__list-item[data-id="pay-when-receive"]').slideToggle();
    });
    $('#pay-cash').on('click',()=>{
        $('.payment__list-item[data-id="pay-cash"]').slideToggle();
    });

}

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
$('.gallery__img').on('click',function(e) {
    $(this).parent().toggleClass('zoom-in-img');
});

let lazyItem = [...document.querySelectorAll('.lazy-load')];
let inAdvance = 200;

function lazyLoad() {
    lazyItem.forEach(item => {
        if (item.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            item.src = item.dataset.src;
            item.onload = () => item.classList.add('loaded')
        }
    });
}
lazyLoad();
window.addEventListener('scroll', ()=> {
    let loadedLazy = [...document.querySelectorAll('.loaded')];
    if (loadedLazy.length >= 27) {
        window.removeEventListener('scroll', lazyLoad);
        window.removeEventListener('resize', lazyLoad);

    }
});
window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);



