$(function () {

    /**
     * Handle double-tap Command || Control
     * for toggling the sidebar collapse.
     */
    var delta = 250;
    var last = 0;

    $(document).keydown(function (e) {

        if (e.which == 17 || e.which == 91) {

            var time = new Date();

            if (time - last <= delta) {

                $('body').toggleClass('expand');

                time = 0;
            }

            last = time;
        }
    });

    /**
     * Bind (Control || Command) + # for
     * following section buttons.
     */
    $(document).keydown(function (e) {

        var numeric = $.isNumeric(String.fromCharCode(e.which));

        var target = $('#buttons').find('.btn').eq(String.fromCharCode(e.which) - 1);

        if ((e.ctrlKey || e.metaKey) && numeric && target.length) {

            e.preventDefault();

            if (target.is('[data-toggle="modal"]')) {

                target.click();

                return;
            }

            window.location = target.attr('href');
        }
    });
});
