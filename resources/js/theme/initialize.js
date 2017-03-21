$(function () {
    // Add CSRF ajax requests.
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': CSRF_TOKEN
        }
    });

    // Initialize Bootstrap tooltips.
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize Bootstrap popovers.
    $('[data-toggle="popover"]').popover();

    // Initialize scrollbars.
    $('.scrollbar').perfectScrollbar();

    // Flush the footer to the bottom.
    $('#main').css('min-height', $(window).height() - $('#brand').outerHeight() - $('#footer').outerHeight());

    // Fix top form controls when scrolling.
    // $('form .controls:first-of-type').affix({
    //     offset: {
    //         top: 120
    //     }
    // });

    // var $table = $('table.table'), scrollTop, columns;
    //
    // if ($table.length) {
    //
    //     var
    //         $topBar = $('#topbar'),
    //         $thead = $table.find('thead'),
    //         $tbody = $table.find('tbody'),
    //
    //         tableWidth = $table.width(),
    //         topBarHeight = $topBar.height(),
    //         tableTop = $table.offset().top,
    //
    //         tableColsSizes = (function ($tbody) {
    //
    //             columns = [];
    //
    //             $tbody.find('tr:first-child td').each(function (index, el) {
    //                 columns.push($(el).width());
    //             });
    //
    //             return columns;
    //         })($tbody);
    //
    //     /**
    //      * Make sure the table head
    //      * is visible as an overlay.
    //      */
    //     $thead.css({backgroundColor: '#fff', width: tableWidth + 'px'});
    //
    //     $(window).on('scroll', function (event) {
    //
    //         scrollTop = $(event.target.body).scrollTop();
    //
    //         /**
    //          * Manually size all of
    //          * the heads / columns.
    //          */
    //         $thead.find('th').each(function (index, el) {
    //             $(el).width(tableColsSizes[index] + 'px');
    //         });
    //
    //         $tbody.find('tr').first().find('td').each(function (index, el) {
    //             $(el).width(tableColsSizes[index] + 'px');
    //         });
    //
    //         /**
    //          * Fix if we're scrolled past.
    //          */
    //         if (scrollTop > tableTop - topBarHeight) {
    //             $thead.css({position: 'fixed', top: topBarHeight + 'px'});
    //             $table.css({marginTop: $thead.height() + 'px'});
    //         } else {
    //             $thead.css({position: 'relative', top: '0px'});
    //             $table.css({marginTop: '0'});
    //         }
    //     });
    // }

    var $window = $(window);
    var $form = $('form.form');
    var $controls = $form.children('.controls');
    var controlsHeight = $controls.height();

    var doFixed = function ($el) {
        $el.addClass('affix');
        $el.css({width: $form.width() + 'px'});
        $el.prev().css({marginBottom: 'calc(' + controlsHeight + 'px + 1.5rem + 1.5rem)'});
    };

    var doUnfixed = function ($el) {
        $el.removeClass('affix');
        $el.css({width: 'inherit'});
        $el.prev().removeAttr('style');
    };

    var isAtBottom = function () {

        var windowHeight = window.innerHeight;
        var scrollTop = document.body.scrollTop;
        var documentHeight = document.body.scrollHeight;

        return scrollTop + windowHeight - documentHeight + controlsHeight + 30 > 0;
    };

    var checkFixed = function () {
        if (window.innerWidth < 992 || isAtBottom()) {
            doUnfixed($controls);
        } else {
            doFixed($controls);
        }
    };

    // Fixed controls
    checkFixed();
    $window.on('resize', checkFixed);
    $window.on('scroll', checkFixed);
});
