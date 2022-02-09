function reformat(){
    if ($(window).width() <= 992) { 
        $(".collapsible").hide();

        //$(".navbar-brand").addClass("mx-auto");
        $(".navbar-brand img").width(75);
        $(".navbar-brand img").height(75);
    } else {
        $(".collapsible").show();

        $(".navbar-brand img").width(170);
        $(".navbar-brand img").height(170);
    }
}
reformat(); // at the start of loading page, reformat nav for mobile

$(window).resize(function () {
    if ($(this).width() <= 992) { 
        $(".collapsible").hide();

        //$(".navbar-brand").addClass("mx-auto");
        $(".navbar-brand img").width(75);
        $(".navbar-brand img").height(75);
    } else {
        $(".collapsible").show();

        $(".navbar-brand img").width(170);
        $(".navbar-brand img").height(170);
    }
});