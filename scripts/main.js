$(function(){

    /* Fixed Header */

    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll load resize", function(){
        introH = $("#intro").innerHeight();
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        console.log(scrollOffset);
    });

    function checkScroll(scrollOffset){

        if (scrollOffset >= introH){
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
         };
    };

    /* Nav Toggle */

    let nav = $(".nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(e){
        e.preventDefault();

        nav.toggleClass("active");
    });

    /* Nav Close */

    let closeToggle = $("#closeToggle");

    closeToggle.on("click", function(e){
        e.preventDefault();

        nav.removeClass("active");
        $(".body").css("background-color", "black");
    });

    /* CountDown */

    let siteCountDown = function() {

        if ( $('.timer').length > 0 ) {
            $('.timer').countdown('2100/10/10', function(event) {
              var $this = $(this).html(event.strftime(''
                + '<p class="timer__item"><span class="timer__dig">%w</span> weeks </p>'
                + '<p class="timer__item"><span class="timer__dig">%d</span> days </p>'
                + '<p class="timer__item"><span class="timer__dig">%H</span> hour </p>'
                + '<p class="timer__item"><span class="timer__dig">%M</span> min </p>'
                + '<p class="timer__item"><span class="timer__dig">%S</span> sec </p>'));
            });
        }

    };
    siteCountDown();

    /*Slider https://owlcarousel2.github.io/OwlCarousel2/ */

    $("#owl-carousel").owlCarousel({
        items: 3, /*Slides*/
        loop: false, /*Infiniti In One Screen*/
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1380:{
                items: 3,
            }
        }
    });

});
