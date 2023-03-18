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


AOS.init();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2700,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-prev",
        prevEl: ".swiper-next",
    },
});