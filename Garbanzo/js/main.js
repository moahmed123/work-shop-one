///*global $,jQuery,WOW*/
///*jslint node: true */
///*jshint strict:false */
'use strict';

$(window).on("load", function () {
    $(".loading-animation").fadeOut(100)
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
      
    $(window).on('scroll', function () {
        // Cach For Scroll Page 
        const ScrollCount = $(window).scrollTop(),
            Navbar = $("nav.navbar"),
            AboutScection = $('#about').offset().top,
            ServiceScection = $('#service').offset().top,
            PortfolioScection = $('#portfolio').offset().top,
            ContactScection = $('#contact').offset().top,
            BlogScection = $('#blog').offset().top;

        // Header Scroll Animation     
        if (ScrollCount > 50) {
            Navbar.addClass('scroll');
        } else {
            Navbar.removeClass('scroll');
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