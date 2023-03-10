window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector(".navbar").classList.add("shadow");
    } else {
        document.querySelector(".navbar").classList.remove("shadow");
    }
}