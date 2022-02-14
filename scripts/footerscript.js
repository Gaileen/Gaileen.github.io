$(window).resize(function () {
    if ($(this).width() <= 399) { 
        $(".xxs-collapsible").hide();
    } else {
        $(".xxs-collapsible").show();
    }
});