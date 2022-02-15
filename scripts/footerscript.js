$(window).resize(function () {
    if ($(this).width() <= 399) { 
        $(".xxs-collapsible").hide();
    } else {
        $(".xxs-collapsible").show();
    }
});

$(".email").hover(function () {
    alert("hovering");
    $(this).css("color", "#0A59CA");
}, function () {
    $(this).css("color", "black");
});

$(".email").click(function () {
    alert("yo");
});

$("#test").click(function () {
    console.log("test click works");
});
