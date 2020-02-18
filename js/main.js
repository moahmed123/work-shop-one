///*global $,jQuery,WOW*/
///*jslint node: true */
///*jshint strict:false */
'use strict';

$(window).on("load", function () {
    $(".Loading-Page").fadeOut(100)
});

$(function () {
    // Animation scroll.
    $('html').smoothScroll(1950);

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 500,
        startDelay: 1000,
        loop: true,
        // fadeOut: true
    });

    // Wrap every letter in a span [Loading]
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml2 .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
        }).add({
            targets: '.ml2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    // $grid.isotope({ filter: '.metal.transition' });

    
    $(window).on('scroll', function () {
        // Cach For Scroll Page 
        const ScrollCount = $(window).scrollTop(),
            AboutScection = $('#about').offset().top,
            ServiceScection = $('#service').offset().top,
            PortfolioScection = $('#portfolio').offset().top,
            ContactScection = $('#contact').offset().top,
            BlogScection = $('#blog').offset().top;

        // Header Scroll Animation     
        if (ScrollCount > 50) {
            $("nav.navbar").addClass('scroll');
        } else {
            $("nav.navbar").removeClass('scroll');
        }
        // Active Nav List When Scroll 
        if( ScrollCount >= AboutScection - 20){
            ActiveNavigation('#About_nav'); // About Page 
        }
        if (ScrollCount >= ServiceScection - 20){
            ActiveNavigation('#Service_nav'); // Service Page
        }
        if (ScrollCount >= PortfolioScection - 20){
            ActiveNavigation('#Portfolio_nav'); // Portfolio Page 
        }        
        if(ScrollCount >= BlogScection - 20){
            ActiveNavigation('#Blog_nav'); // Blog Page
        }
        if(ScrollCount >= ContactScection - 20){
            ActiveNavigation('#Contact_nav'); // Contact Page
        }
        if(ScrollCount < 200 ){
            ActiveNavigation('#Home_nav'); // Home Page
        }        

    })

    function ActiveNavigation(ElementAction){
        $('nav .navbar-nav li').removeClass('active')
        $(ElementAction).addClass('active');

    }

});