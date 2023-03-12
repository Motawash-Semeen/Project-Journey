window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").classList.add("shadow");
    } else {
        document.querySelector(".navbar").classList.remove("shadow");
    }
}


$(".nav-mobile .nav-item1").click(function() {
    $(".drop-show1").slideToggle();
});
$(".nav-mobile .nav-item2").click(function() {
    $(".drop-show2").slideToggle();
});
$(".nav-mobile .nav-item3").click(function() {
    $(".drop-show3").slideToggle();
});
$(".nav-mobile .nav-item4").click(function() {
    $(".drop-show4").slideToggle();
});

$(window).resize(function() {
    console.log($("body").width());
});


AOS.init();