﻿$(window).resize(function () {
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
        alert("not hovering");
    $(this).css("color", "black");
});
