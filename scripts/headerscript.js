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
