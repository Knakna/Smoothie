// open/close nav

$(document).ready(function () {
    $(".burger").click(function (e) {
        $(".burger__line,.header__nav").toggleClass('active');
        $("body").toggleClass('lock');
    })
});


// scroll-anchors-smooth

let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        let blockID = anchor.getAttribute('href')
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}

// https://micku7zu.github.io/vanilla-tilt.js/

VanillaTilt.init(document.querySelector(".about__img"), {
    max: 25,
    speed: 400
});


// https://wowjs.uk/

new WOW().init();

