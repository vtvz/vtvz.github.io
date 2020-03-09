$(document).ready(function () {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
    /*-----------------------------------------------------------------------------------*/
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
    /*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function () {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    if ($('[rel=tooltip]').length) {
        $('[rel=tooltip]').tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /*	FORM
    /*-----------------------------------------------------------------------------------*/


    $('.comment-form input[title], .comment-form textarea, .forms textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function () {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });

    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function (e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function (e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	MENU
    /*-----------------------------------------------------------------------------------*/
    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });
    $('.btn.responsive-menu').on('click', function () {
        $(this).toggleClass('opn');
    });
    $('.navbar .nav li a').on('click', function () {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.btn.responsive-menu').removeClass('opn');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	LOCALSCROLL
    /*-----------------------------------------------------------------------------------*/
    $('.navbar, .smooth').localScroll({
        hash: true,
    });
});
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
$(window).load(function () {
    $('.preloader__spinner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' }).addClass('loaded');
});
/*-----------------------------------------------------------------------------------*/

/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
function init() {
    'use strict';
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = $('.navbar');
        if (distanceY > shrinkOn) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });
}

window.onload = init;

/*-----------------------------------------------------------------------------------*/
/*	SCROLL NAVIGATION HIGHLIGHT
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var navItems = $('[data-section-id]');
    var offsetTolerance = 100;

    $(window).scroll(function () {
        //Check scroll position
        var scrollPosition = parseInt($(this).scrollTop());

        navItems.each(function (index, item) {
            var sectionId = $(this).data('section-id');
            var section = $('#' + sectionId);
            if (section.length === 0) {
                return;
            }
            var sectionRelativePosition = parseInt(section.offset().top);
            var sectionPosition = sectionRelativePosition - scrollPosition - offsetTolerance;
            if (sectionPosition <= 0) {
                $('.navbar .current').removeClass('current');
                $('.navbar ul a[data-section-id="' + sectionId + '"]').parent('li').addClass('current');
            }
        });
    });
});
