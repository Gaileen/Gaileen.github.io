$(window).resize(function () {
    if ($(this).width() < 992) {
        $(".collapsible").hide();
        $(".navbar-brand").addClass("mx-auto");

    } else {
        $(".collapsible").show();
    }
});