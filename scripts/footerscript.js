$(window).resize(function () {
    if ($(this).width() <= 399) { 
        $(".xxs-collapsible").hide();
    } else {
        $(".xxs-collapsible").show();
    }
});

$(".email").hover(function () {
    this.css("color", "#0A59CA");
    alert("hi");
}, function () {
    this.css("color", "black");
});