function reformat() {
    if ($(window).width() <= 992) {
        //fix carousel caption

        $(".calendar").hide();

        $(".posts").hide();
    } else {

        $(".calendar").show();

        $(".posts").show();
    }
}
reformat();

$(window).resize(function () {
    if ($(this).width() <= 992) {
        //fix carousel caption

        $(".calendar").hide();

        $(".posts").hide();
    } else {

        $(".calendar").show();

        $(".posts").show();
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