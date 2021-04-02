$(document).ready(function () {
    $(".burger").click(function (e) {
        $(".burger__line,.header__nav").toggleClass('active');
        $("body").toggleClass('lock');
    })
});