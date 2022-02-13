//function reformat() {
//    if ($(window).width() <= 992) { 
//        $(".collapsible").hide();
//        alert("working..");
//        alert($(window).width());
//        $(".collapsible").css("color", "red");
//        $(".navbar-brand img").height(75);
//    } else {
//        alert("not working");
//        $(".collapsible").show();

//        $(".navbar-brand img").width(130);
//        $(".navbar-brand img").height(130);
//    }
//}
//reformat(); // at the start of loading page, reformat nav for mobile

$(window).resize(function () {
    if ($(this).width() <= 992) { 
        $(".collapsible").hide();
        
        $(".navbar-brand img").width(75);
        $(".navbar-brand img").height(75);
    } else {
        alert("hi");
        $(".collapsible").show();
        $(".collapsible").css("color", "red");
        $(".navbar-brand img").width(130);
        $(".navbar-brand img").height(130);
    }
});