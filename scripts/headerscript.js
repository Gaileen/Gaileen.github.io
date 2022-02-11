function reformat(){
    if ($(window).width() <= 992) { 
        $(".collapsible").hide();

        $(".navbar-brand img").height(75);
    } else {
        $(".collapsible").show();

        $(".navbar-brand img").width(130);
        $(".navbar-brand img").height(130);
    }
}
reformat(); // at the start of loading page, reformat nav for mobile
// ^^ THIS NO LONGER WORKS. SHOULD SEPARATE HTMLs REFERENCE THEIR SCRIPTS AS WELL?

$(window).resize(function () {
    if ($(this).width() <= 992) { 
        $(".collapsible").hide();

        
        $(".navbar-brand img").width(75);
        $(".navbar-brand img").height(75);
    } else {
        $(".collapsible").show();

        $(".navbar-brand img").width(130);
        $(".navbar-brand img").height(130);
    }
});