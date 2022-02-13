$(window).resize(function () {
    if ($(this).width() <= 992) {
        if ($(this).width() <= 768) {
            $("#slide-one").attr("src", "images/mobilebannercollage.png");
            $("#caption-two").css("font-size", "0.75em");
            $("#mission").css("margin-top", "18%");
        } else {
            $("#slide-one").attr("src", "images/bannercollage.png");
            $("#caption-two").css("font-size", "1rem");
            $("#mission").css("margin-top", "11%");
        }

        $(".calendar").hide();
        
        $(".older-posts").hide();
        $("#ig-tag").removeClass("ps-5");

        $(".btn-warning").addClass("mx-auto");
        $(".btn-warning").css("width", "auto");
    } else {
        $("#slide-one").attr("src", "images/bannercollage.png");
        $("#caption-two").css("font-size", "1.15rem");
        $("#mission").css("margin-top", "10%");

        $(".calendar").show();

        $(".older-posts").show();
        $("#ig-tag").addClass("ps-5");

        $(".btn-warning").removeClass("mx-auto");
        $(".btn-warning").css("width", "fit-content");
    }
});

const aboutUsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //banner-to-fade-in
            $(".events-to-fade-in").addClass("fade-in");
            $(".events-to-slide-left").addClass("slide-left");
            $(".ig-to-fade-in").addClass("fade-in");
            $(".ig-to-slide-up").addClass("slide-up");
            $(".more-to-fade-in").addClass("fade-in");
        }
    });
}, {});

aboutUsObserver.observe(document.querySelector(".carousel"));
aboutUsObserver.observe(document.querySelector(".events"));
aboutUsObserver.observe(document.querySelector(".latest"));