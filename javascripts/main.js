var cnumber = 1,
    possibleH = 300,
    offset = 0,
    pastmag = 0,
    pastsize = 1,
    runfirst = true;
String.prototype.visualLength = function () {
    var ruler = document.getElementById("ruler");
    ruler.innerHTML = this;
    return ruler.offsetWidth;
}

function next() {
    var oldcnumber = cnumber,
        increment = 2,
        oldernumber = cnumber;
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

        offset = $('.hide').offset().top;
        $('.main').css({
            position: 'absolute',
            width: Math.floor($(window).width() / 90) * 90,
            height: $(window).height()
        });
        $('.main').css({

            left: ($(window).width() - $('.main').outerWidth()) / 2,
            top: ($(window).height() - $('.main').outerHeight()) / 2

        });

        $('header').css({
            position: 'absolute',
            width: '100%',
            height: '100%'
        });

    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(),
            distance = (offset - scrollTop);
        var windh = $(this).outerHeight();
        possibleH = 300;
        if (distance - windh < 0 || runfirst == true) {
            for (var i = 0; i <= possibleH; i++) {
                if (cnumber.toString().length > pastmag) {
                    console.log(cnumber.toString().visualLength());
                    pastmag = cnumber.toString().length;
                    pastsize = 25-(cnumber.toString().visualLength() / (10.25));
                }
                objectt = $(next());
                objectt.insertBefore('.hide');
                objectt.css('font-size', pastsize);
            }

            offset = $('.hide').offset().top;
            runfirst = false;

        }
        if ($(window).scrollTop() <= $(window).height() + 60) {
            $('.main').css({
                top: ($(window).height() - $('.main').outerHeight()) / 2 + 5 + ($(window).scrollTop())
            });
        } else {
            $('.main').css({
                top: ($(window).height() - $('.main').outerHeight()) / 2 + 40 + $(window).height()
            });
        }



    });




    $(window).resize();
    $(window).scroll();

    possibleH = 300;

});
