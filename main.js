var cnumber = 1;
var possibleH = 300;

function next() {
    var oldcnumber = cnumber,
        increment = 2;
    cnumber++;
    while (((oldcnumber % increment) != 0) && oldcnumber > increment) {
        increment++;
    }
    if (!(oldcnumber > increment)) {
        return "<div class='tile-yes'><div class='text'>" + oldcnumber + "</div></div>";
    } else {
        return "<div class='tile-no'><div class='text'>" + oldcnumber + "</div></div>";
    }
}

function isVisible() {

}
$(document).ready(function () {

    $(window).resize(function () {

        $('.main').css({
            position: 'absolute',
            width: Math.floor($(window).width() / 70) * 70,
            height: $(window).height()
        });
        $('.main').css({

            left: ($(window).width() - $('.main').outerWidth()) / 2,
            top: ($(window).height() - $('.main').outerHeight()) / 2 + 5
        });

    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(),
            elementOffset = $('.hide').offset().top,
            distance = (elementOffset - scrollTop);
        var windh = $(this).outerHeight();
        console.info(distance - windh);
        possibleH = 300;
        if (distance - windh < 0) {
            for (var i = 0; i <= possibleH; i++) {
                $(next()).insertBefore('.hide');

            }
        }
    });




    $(window).resize();

    possibleH = 300;
    for (var i = 0; i <= possibleH; i++) {
        $(next()).insertBefore('.hide');
    }
});
