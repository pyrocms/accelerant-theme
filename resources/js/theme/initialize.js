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

    var $table = $('table.table'), scrollTop, output;

    if ($table.length) {
        var
            $topBar = $('#topbar'),
            $thead = $table.find('thead'),
            $tbody = $table.find('tbody'),

            topBarHeight = $topBar.height(),
            tableWidth = $table.width(),
            tableTop = $table.closest('.card').offset().top,

            tableColsSizes = (function ($tbody) {
                output = [];

                $tbody.find('tr:first-child td').each(function (index, el) {
                    output.push($(el).width());
                });

                return output;
            })($tbody);

        $thead.css({ backgroundColor: '#fff', width: tableWidth + 'px' });

        $(window).on('scroll', function (event) {
            scrollTop = $(event.target.body).scrollTop();

            $thead.find('th').each(function (index, el) {
                $(el).width(tableColsSizes[index] + 'px');
            });

            if (scrollTop > tableTop - topBarHeight) {
                $thead.css({ position: 'fixed', top: topBarHeight + 'px' });
                $table.css({ marginTop: $thead.height() + 'px' });
            } else {
                $thead.css({ position: 'relative', top: '0px' });
                $table.css({ marginTop: '0' });
            }
        });
    }
});
