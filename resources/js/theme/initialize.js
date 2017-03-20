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

    var $table = $('table.table');

    if ($table.length === 1) {

        var $window = $(window);
        var $topBar = $('#topbar');
        var $thead = $table.find('thead');
        var topBarHeight = $topBar.height();
        var tableTop = $table.offset().top;

        /**
         * Gets the table cols sizes.
         *
         * @param      {$Object}  $tbody  The tbody
         * @return     {Array}    The table cols sizes.
         */
        var getTableColsSizes = function ($tbody) {
            var columns = [];

            $tbody.find('tr:first-child td').each(function (index, el) {
                columns.push($(el).width());
            });

            return columns;
        };

        /**
         * Manually size all of the heads / columns.
         */
        var setTableColsSizes = function () {
            var $tbody = $('table.table').children('tbody');
            var tableColsSizes = getTableColsSizes($tbody);

            $thead.find('th').each(function (index, el) {
                $(el).width(tableColsSizes[index] + 'px');
            });

            $tbody.find('tr').first().find('td').each(function (index, el) {
                $(el).width(tableColsSizes[index] + 'px');
            });

            checkFixed();

            $thead.css({ width: $table.width() + 'px' });
        };

        /**
         * Determines if at top.
         *
         * @return     {boolean}  True if at top, False otherwise.
         */
        var isAtTop = function () {
            if (document.body.scrollTop > tableTop - topBarHeight) {
                return false;
            }

            return true;
        };

        /**
         * Fix if we're scrolled past.
         */
        var checkFixed = function () {
            if (window.innerWidth < 992 || isAtTop()) {
                $thead.css({ position: 'relative', top: '0px' });
                $table.css({ marginTop: '0' });
            } else {
                $thead.css({ position: 'fixed', top: topBarHeight + 'px' });
                $table.css({ marginTop: $thead.height() + 'px' });
            }
        };

        /**
         * Make sure the table head is visible as an overlay.
         */
        $thead.css({ backgroundColor: '#fff', width: $table.width() + 'px' });

        setTableColsSizes();

        $window.on('scroll', checkFixed);
        $window.on('resize', setTableColsSizes);
    }
});
