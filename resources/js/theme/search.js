$(function () {

    var form = $('#search');
    var input = form.find('input');
    var list = form.find('ul');
    var items = list.find('li');
    var selected = null;

    // Don't submit on return.
    form.on('submit', function () {
        return false;
    });

    // Open search
    input.on('focus', function () {
        form.addClass('open');
    });

    // Close search
    input.on('blur', function () {
        form.removeClass('open');
    });

    // Handle simple searching
    input.on('keydown', function (e) {

        /**
         * Capture the down arrow.
         */
        if (e.which == 40) {

            if (selected) {

                /**
                 * If we have a selection then
                 * push to the next visible option.
                 */
                if (selected.nextAll(':visible').length) {
                    items.removeClass('active');
                    selected = selected.nextAll(':visible').first();
                    selected.addClass('active');
                }
            } else {

                /**
                 * Otherwise select the first
                 * visible option in the list.
                 */
                selected = items.filter(':visible').first();
                selected.addClass('active');
            }
        }

        /**
         * Capture the up arrow.
         */
        if (e.which == 38) {

            if (selected) {

                /**
                 * If we have a selection then push
                 * to the previous visible option.
                 */
                if (selected.prevAll(':visible').length) {
                    items.removeClass('active');
                    selected = selected.prevAll(':visible').first();
                    selected.addClass('active');
                }
            } else {

                /**
                 * Otherwise select the last
                 * visible option in the list.
                 */
                selected = items.filter(':visible').last();
                selected.addClass('active');
            }
        }

        /**
         * Capture the enter key.
         */
        if (e.which == 13) {

            if (selected) {

                /**
                 * If the key press was the return
                 * key and we have a selection
                 * then follow the link.
                 */
                if (selected.hasClass('has-click-event') || selected.hasClass('ajax')) {
                    selected.trigger('click');
                } else {

                    /**
                     * If nothing is selected
                     * there's nothing to do.
                     */
                    if (!selected.length) {
                        return false;
                    }

                    window.location = selected.find('a').attr('href');

                    modal.find('.modal-content').append('<div class="modal-loading"><div class="active large loader"></div></div>');
                }
            }
        }

        /**
         * Capture up and down arrows.
         */
        if (e.which == 38 || e.which == 40) {

            // store current positions in variables
            var start = input[0].selectionStart,
                end = input[0].selectionEnd;

            // restore from variables...
            input[0].setSelectionRange(start, end);

            e.preventDefault();
        }

        /**
         * Capture the escape key.
         */
        if (e.which == 27) {

            items
                .show()
                .removeClass('active');

            input.val('').blur();
        }
    });

    input.on('keyup', function (e) {

        /**
         * If the keyup was a an arrow
         * up or down then skip this step.
         */
        if (e.which == 38 || e.which == 40) {
            return;
        }

        var value = $(this).val();

        /**
         * Filter the list by the items to
         * show only those containing value.
         */
        items.each(function () {
            if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        /**
         * If we don't have a selected item
         * then choose the first visible option.
         */
        if (!selected || !selected.is(':visible')) {
            selected = items.filter(':visible').first();
            selected.addClass('active');
        }
    });
});
