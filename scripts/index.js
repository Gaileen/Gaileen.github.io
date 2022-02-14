$(window).resize(function () {
    if ($(this).width() <= 992) {
        //if ($(this).width() <= 768) {
        //    if ($(this).width() <= 366) {
        //        $("#caption-two").css("font-size", "0.67em");
        //    }
        //    //$("#caption-two").css("font-size", "0.75em");

        //    //$("#mission").css("margin-top", "18%");
        //}

        $("#slide-one-img").attr("src", "images/mobilebannercollage.png");
        $("#caption-two").css("font-size", "0.75em");
        $("#mission").css("margin-top", "18%");

        $(".calendar").hide();
        
        $(".older-posts").hide();
        $("#ig-tag").removeClass("ps-5");

        $(".btn-warning").addClass("mx-auto");
        $(".btn-warning").css("width", "auto");

        if ($(this).width() <= 366) {
            $("#caption-two").css("font-size", "0.67em");
        }

    } else {
        $("#slide-one-img").attr("src", "images/bannercollage.png");
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
        if (entry.target.className.split(" ").at(-1) == "carousel-inner" && entry.isIntersecting) {
            $(".banner-to-fade-in").addClass("fade-in");
        }
        if (entry.target.className.split(" ").at(-1) == "events" && entry.isIntersecting) {
            $(".events-to-fade-in").addClass("fade-in");
            $(".events-to-slide-left").addClass("slide-left");
        }
        if (entry.target.className.split(" ").at(-1) == "latest" && entry.isIntersecting) {
            $(".ig-to-fade-in").addClass("fade-in");
            $(".ig-to-slide-up").addClass("slide-up");
        }
        if (entry.target.className.split(" ").at(-1) == "learn-more" && entry.isIntersecting) {
            $(".more-to-fade-in").addClass("fade-in");
            $(".more-to-slide-right").addClass("slide-right");
        }
    });
}, {});

aboutUsObserver.observe(document.querySelector(".carousel-inner"));
aboutUsObserver.observe(document.querySelector(".events"));
aboutUsObserver.observe(document.querySelector(".latest"));
aboutUsObserver.observe(document.querySelector(".learn-more"));