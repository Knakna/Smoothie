$(document).ready(function () {
    $(".burger").click(function (e) {
        $(".burger__line,.header__nav").toggleClass('active');
        $("body").toggleClass('lock');
    })
});


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