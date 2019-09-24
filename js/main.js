///*global $,jQuery,WOW*/
///*jslint node: true */
///*jshint strict:false */
'use strict';

$(window).on("load", function () {
    $(".Loading-Page").fadeOut(100)    
});

$(function () {
    // Animation scroll.
    $('html').smoothScroll(950);
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

});