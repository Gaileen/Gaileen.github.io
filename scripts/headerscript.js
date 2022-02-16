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

$(document).ready(function () {
    var pageURL = $(location).attr("href");
    if (pageURL == "https://www.fasaoberlin.com/") {
        $("#homelink").addClass("active");
        $("#homelink").attr("aria-current", "page");

        $("#eventslink").removeClass("active");
        $("#eventslink").attr("aria-current", "");
        $("#memberslink").removeClass("active");
        $$("#memberslink").attr("aria-current", "");
        $("#resourceslink").removeClass("active");
        $("#resourceslink").attr("aria-current", "");

    } else if (pageURL == "https://www.fasaoberlin.com/events.html") {
        alert("yo");
        $("#eventslink").addClass("active");
        $("#eventslink").attr("aria-current", "page");

        $("#homelink").removeClass("active");
        $("#homelink").attr("aria-current", "");
        $("#memberslink").removeClass("active");
        $("#memberslink").attr("aria-current", "");
        $("#resourceslink").removeClass("active");
        $("#resourceslink").attr("aria-current", "");

    } else if (pageURL == "https://www.fasaoberlin.com/members.html") {
        $("#memberslink").addClass("active");
        $("#memberslink").attr("aria-current", "page");

        $("#eventslink").removeClass("active");
        $("#eventslink").attr("aria-current", "");
        $("#homelink").removeClass("active");
        $("#homelink").attr("aria-current", "");
        $("#resourceslink").removeClass("active");
        $("#resourceslink").attr("aria-current", "");

    } else if (pageURL == "https://www.fasaoberlin.com/resources.html") {
        $("#resourceslink").addClass("active");
        $("#resourceslink").attr("aria-current", "page");

        $("#eventslink").removeClass("active");
        $("#eventslink").attr("aria-current", "");
        $("#memberslink").removeClass("active");
        $("#memberslink").attr("aria-current", "");
        $("#homelink").removeClass("active");
        $("#homelink").attr("aria-current", "");

    }
});