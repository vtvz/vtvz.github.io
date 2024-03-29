$(document).ready(function () {
    'use strict';
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
    /*	LOCALSCROLL
    /*-----------------------------------------------------------------------------------*/
    $('.nav.navbar-nav').localScroll({
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
$(window).load(function () {
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
});

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

$(document).ready(function () {
    var header = $('.page-index__header')

    if (!header.length) {
        return
    }

    var hidden = false
    $(window).scroll(function () {

        var top = header.offset().top

        var bottom = top + header.outerHeight()

        var scrollTop = $(window).scrollTop()

        if (scrollTop > bottom) {
            if (!hidden) {
                var namew = header.find('.page-index__name')

                var now = namew.text()
                var next = namew.data('alternative').split(',')

                namew.text(next.shift())
                next.push(now)
                namew.data('alternative', next.join(','))
            }
            hidden = true
        } else {
            hidden = false
        }
    });
});

$(document).ready(function () {
    var tags = $('.tag-list > li');
    tags.slice(6).hide();

    $('.tag-list__more').click(function () {
        tags.show();
        $(this).hide();
    });
});
