$(function () {

    var delta = 500;
    var last = 0;

    $('body').on('keydown', function (e) {

        if (e.ctrlKey || e.metaKey) {

            var time = new Date();

            if (time - last <= delta) {

                $('body').toggleClass('expand');

                time = 0;
            }

            last = time;
        }
    })
});
