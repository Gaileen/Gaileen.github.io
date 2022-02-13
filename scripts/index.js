$(window).resize(function () {
    if ($(this).width() <= 992) {
        if ($(this).width() <= 768) {
            $("#slide-one").attr("src", "images/mobilebannercollage.png");
            $("#caption-two").css("font-size", "0.85em");
            $("#mission").css("margin-top", "14%");
        } else {
            $("#slide-one").attr("src", "images/bannercollage.png");
            $("#caption-two").css("font-size", "1rem");
            $("#mission").css("margin-top", "11%");
        }

        $(".calendar").hide();
        
        $(".older-posts").hide();
        $("#ig-tag").removeClass("ps-5");
    } else {
        $("#slide-one").attr("src", "images/bannercollage.png");
        $("#caption-two").css("font-size", "1.15rem");
        $("#mission").css("margin-top", "10%");

        $(".calendar").show();

        $(".older-posts").show();
        $("#ig-tag").addClass("ps-5");
    }
});

const aboutUsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(".to-fade-in").addClass("fade-in");
            $(".to-slide-left").addClass("slide-left");
        }
    });
}, {});

aboutUsObserver.observe(document.querySelector(".events"));