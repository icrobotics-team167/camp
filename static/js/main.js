'use strict';
$(document).ready(function() {

    var scrollTo = target => $('html, body').animate({scrollTop: target}, 500);
    
    var jWindow = $(window);
    var topBtn = $('#top-btn');
    
    var scrollCheck = function(e) {
        if (jWindow.scrollTop() === 0)
            topBtn.addClass('minified');
        else
            topBtn.removeClass('minified');
    };
    
    jWindow.scroll(scrollCheck);
    
    topBtn.click(() => scrollTo(0));
    
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
    
    $('.fp-section').each((i, e) => {
        var obj = $(e);
        obj.css('background-color', obj.attr('data-bg'));
    });
    
    var wSizeCheck = () => $('.fp-section').css('min-height', jWindow.height());
    jWindow.on('resize orientationChange', wSizeCheck);
    
    wSizeCheck();
    scrollCheck();
    
});