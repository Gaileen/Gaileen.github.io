function reformat(){
    if ($(window).width() <= 992) { //992 slightly off
        $(".collapsible").hide();
        //$(".navbar-brand").addClass("mx-auto");
    } else {
        $(".collapsible").show();
    }
}
reformat(); // at the start of loading page, reformat nav for mobile

$(window).resize(function () {
    if ($(this).width() <= 992) { //992 slightly off
        $(".collapsible").hide();

        //$(".navbar-brand").addClass("mx-auto");
    } else {
        $(".collapsible").show();
    }
});