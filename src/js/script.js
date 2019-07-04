// Dinamic Title on Home Section
var Messenger = function(el){
    'use strict';
    var m = this;

    m.init = function(){
        m.codeletters = "&#*+%?£@§$";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
            'Welcome to Decentrilize Fashion World',
            'Choose your creatives and promote them',
            'Become a producer in world of fashion',
            'Make Dream profitable'
        ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function(length){
        var random_text = '';
        while(random_text.length < length){
            random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function(){
        if(m.current_length < m.messages[m.message].length){
            m.current_length = m.current_length + 2;
            if(m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            var message = m.generateRandomString(m.current_length);
            el.innerHTML = message;

            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
    };

    m.animateFadeBuffer = function(){
        if(m.fadeBuffer === false){
            m.fadeBuffer = [];
            for(var i = 0; i < m.messages[m.message].length; i++){
                m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
            }
        }

        var do_cycles = false;
        var message = '';

        for(var i = 0; i < m.fadeBuffer.length; i++){
            var fader = m.fadeBuffer[i];
            if(fader.c > 0){
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        el.innerHTML = message;

        if(do_cycles === true){
            setTimeout(m.animateFadeBuffer, 50);
        } else {
            setTimeout(m.cycleText, 2000);
        }
    };

    m.cycleText = function(){
        m.message = m.message + 1;
        if(m.message >= m.messages.length){
            m.message = 0;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        el.innerHTML = '';

        setTimeout(m.animateIn, 200);
    };

    m.init();
}

console.clear();

// Run scripts, when page loaded
window.onload = function () {
    // console.log('test');
    var messenger = new Messenger(document.getElementById('home-title'));
}

// Home slider
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: "coverflow",
});

// Add active class to item
function itemActive(elem) {
    if (!$(elem).hasClass('active')) {
        var item = document.getElementsByClassName('roule__item');

        for (i = 0; i < item.length; i++) {
            // Remove the class 'active' if it exists
            item[i].classList.remove('active');
        }

        elem.classList.add('active');
        //
        // $([document.documentElement, document.body]).animate({
        //     scrollTop: $(elem).offset().top - 55
        // }, 500);

        //  Scroll to start roules block
        controller.scrollTo('#roule-list');
    } else {
        // $(elem).removeClass('active');
        // $([document.documentElement, document.body]).animate({
        //     scrollTop: $(elem).parent().offset().top - 55
        // }, 500);
    }
}

// Remove Active class from item
$('.roule__back-btn').click( function (e) {
    e.stopImmediatePropagation();
    $(this).parent().removeClass('active');
});

// Hamburger menu
$('.Hamburger').add('.mobile-menu__link').click( function () {
    $(this).toggleClass('active');
    $('#mobile-menu').fadeToggle().css("display", "flex");
});

$('.mobile-menu__link').click( function () {
    $('.Hamburger').removeClass('active');
});

$('#open-role-menu').click( function () {
    $('#mobile-nav').toggleClass('role-active');
    $('#role-menu').fadeToggle();
});


// import * as ScrollMagic from "scrollmagic";
// import { TweenMax, TimelineMax } from "gsap";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
//
// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

var tl = new TimelineMax({onUpdate:updatePercentage}),
    tl2 = new TimelineMax({}),
    tl3 = new TimelineMax({}),
    tl4 = new TimelineMax({}),
    tl5 = new TimelineMax({}),
    tl6 = new TimelineMax({})

const controller = new ScrollMagic.Controller()
// const controller2 = new ScrollMagic.Controller()

tl.from("#social-title", .5, {x:100, opacity:0}, '=0')

tl2.from('.how__title', .5, {y:30, opacity:0})

tl3.from('.how__slide-header', .5, {opacity:0})
    .from('.how__slide-text', .5, {y:30, opacity:0}, .3)
    // .from('.swiper-button-prev', .5, {opacity:0}, .6)
    // .from('.swiper-button-next', .5, {opacity:0}, .9)

tl4.from('#roule-white-title', .5, {x:100, opacity:0})
    .from('.roule-white-title-first', .5, {x:100, opacity:0}, .7)
    .from('.roule-white-title-second', .5, {x:100, opacity:0}, 1)
    .from('.roule-white-title-third', .5, {x:100, opacity:0}, 1.3)

tl5.from('.roule__title', .5, {y:30, opacity:0})

tl6.staggerFrom('.roule__item', .5, {x:'100%', opacity:0}, .3)
    //
    // .from('.roule__creative', .5, {x:'100%', opacity:0}, .3)
    // .from('.roule__agent', .5, {x:'100%', opacity:0}, .6)
    // .from('.roule__producer', .5, {x:'100%', opacity:0}, .9)

const scene = new ScrollMagic.Scene({
    triggerElement: ".how__transition-title",
    offset: -80,
    // triggerHook: "onEnter",
    // duration: "100%"
})
    // .setPin("#social-title")
    .setTween(tl)
    .addTo(controller)

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".how",
    offset: 150
})
    .setTween(tl2)
    .addTo(controller)

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".how",
    offset: 250
})
    .setTween(tl3)
    .addTo(controller)

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".roule__transition-title",
    offset: -80
})
    .setTween(tl4)
    .addTo(controller)

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".roule",
    offset: 350
})
    .setTween(tl5)
    .addTo(controller)

const scene6 = new ScrollMagic.Scene({
    triggerElement: ".roule__list",
    offset: -50
})
    .setTween(tl6)
    .addTo(controller)

function updatePercentage() {
    tl.progress()
}

controller.scrollTo(function(target) {

    TweenMax.to(window, 0.5, {
        scrollTo : {
            y : target - 55, // scroll position of the target along y axis
            autoKill : true // allows user to kill scroll action smoothly
        },
        ease : Cubic.easeInOut
    });

});

$(document).click("a[href^=#]", function(e) {
    var id = $(e.target).attr('href');

    if($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);

        // If supported by the browser we can also update the URL
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }

});