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
});
