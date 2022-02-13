$(window).resize(function () {
    if ($(this).width() <= 992) {
        if ($(this).width() <= 768) {
            $("#slide-one").attr("src", "images/mobilebannercollage.png");
        } else {
            $("#slide-one").attr("src", "images/bannercollage.png");
        }

        $(".calendar").hide();
        
        $(".older-posts").hide();
        $("#ig-tag").removeClass("ps-5");
    } else {

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