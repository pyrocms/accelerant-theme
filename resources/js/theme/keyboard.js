$(function () {

    var delta = 500;
    var last = 0;
    var keys = [];

    $(document).keydown(function (e) {

        keys[e.keyCode] = true;

        var count = 0;

        for (var i = 0; i < keys.length; i++) {
            if (keys[i]) count++;
        }

        if (count == 1 && (e.ctrlKey || e.metaKey)) {

            var time = new Date();

            if (time - last <= delta) {

                $('body').toggleClass('expand');

                time = 0;
            }

            last = time;
        }
    });

    $(document).keyup(function (e) {
        delete keys[e.keyCode];
    });
});
