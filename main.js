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

    var docsize = 0;

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

        $('header').css({
            position: 'absolute',
            width:  '100%',
            height: '100%'
        });

    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(),
            elementOffset = $('.hide').offset().top,
            distance = (elementOffset - scrollTop);
        var windh = $(this).outerHeight();
        possibleH = 300;
        if (distance - windh < 0) {
            for (var i = 0; i <= possibleH; i++) {
                $(next()).insertBefore('.hide');

            }
        }
        if ($(window).scrollTop() <= $(window).height() + 60) {
            $('.main').css({
                top: ($(window).height() - $('.main').outerHeight()) / 2 + 5 + ($(window).scrollTop())
            });
        } else {
            $('.main').css({
                top: ($(window).height() - $('.main').outerHeight()) / 2 + 50 + $(window).height()
            });
        }



    });




    $(window).resize();
    // $('header').foggy();

    possibleH = 300;
    for (var i = 0; i <= possibleH; i++) {
        $(next()).insertBefore('.hide');
    }
});
