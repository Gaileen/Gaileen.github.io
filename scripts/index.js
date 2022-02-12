function reformat() {
    if ($(window).width() <= 992) {
        //fix carousel caption;
        $("#slide-one").attr("src", "images/banquet1.png");
        
        $(".calendar").hide();
        
        $(".instagram-media").hide();
        $("#mobile-post").show();
        $("#ig-tag").removeClass("ps-5");
    } else {
        $("#slide-one").attr("src", "images/bannercollage.png");

        $(".calendar").show(); 

        $(".instagram-media").show();
        $("#ig-tag").addClass("ps-5");
    }
}
reformat();

$(window).resize(function () {
    if ($(this).width() <= 992) {
        //fix carousel caption;
        $("#slide-one").attr("src", "images/banquet1.png");

        $(".calendar").hide();
        
        $(".instagram-media").hide();
        $("#mobile-post").show();
        $("#ig-tag").removeClass("ps-5");
    } else {
        $("#slide-one").attr("src", "images/bannercollage.png");

        $(".calendar").show();

        $(".instagram-media").show();
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