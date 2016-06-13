'use strict';
$(document).ready(function() {

    var scrollTo = target => $('html, body').animate({scrollTop: target}, 500);
    
    var jWindow = $(window);
    var navbar = $('navbar');
    var topBtn = $('#top-btn');
    
    var scrollCheck = function(e) {
        if (jWindow.scrollTop() === 0) {
            navbar.removeClass('minified');
            topBtn.addClass('minified');
        } else {
            navbar.addClass('minified');
            topBtn.removeClass('minified');
        }
    };
    
    jWindow.scroll(scrollCheck);
    
    topBtn.click(function() {
        scrollTo(0);
    });
    
    var main = $('.mainwrap');
    var lipsum = $('.lipsum');
    for (var i = 0; i < 9; i++)
        main.append(lipsum.clone());
    
    /**
     * Borrowed bc too lazy to write my own algo
     * http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
     */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    scrollTo(target.offset().top);
                    return false;
                }
            }
        });
    });
    
    scrollCheck();
    
});