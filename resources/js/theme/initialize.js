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
    var $table = $('table.table:not(.no-fix)'), scrollTop, columns;

    if ($table.length) {

        var
            $topBar = $('#topbar'),
            $thead = $table.find('thead'),
            $tbody = $table.find('tbody'),

            tableWidth = $table.width(),
            topBarHeight = $topBar.height(),
            tableTop = $table.offset().top,

            tableColsSizes = (function ($tbody) {

                columns = [];

                $tbody.find('tr:first-child td').each(function (index, el) {
                    columns.push($(el).width());
                });

                return columns;
            })($tbody);

        /**
         * Make sure the table head
         * is visible as an overlay.
         */
        $thead.css({backgroundColor: '#fff', width: tableWidth + 'px'});

        $(window).on('scroll', function (event) {

            scrollTop = $(event.target.body).scrollTop();

            /**
             * Manually size all of
             * the heads / columns.
             */
            $thead.find('th').each(function (index, el) {
                $(el).width(tableColsSizes[index] + 'px');
            });

            $tbody.find('tr').first().find('td').each(function (index, el) {
                $(el).width(tableColsSizes[index] + 'px');
            });

            /**
             * Fix if we're scrolled past.
             */
            if (scrollTop > tableTop - topBarHeight) {
                $thead.css({position: 'fixed', top: topBarHeight + 'px'});
                $table.css({marginTop: $thead.height() + 'px'});
            } else {
                $thead.css({position: 'relative', top: '0px'});
                $table.css({marginTop: '0'});
            }
        });
    }
});
