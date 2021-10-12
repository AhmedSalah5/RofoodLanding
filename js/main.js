$(document).ready(function () {
    //Change Direction
    $('.custum-nav .ar').click(function () {
        $('body').removeClass('ltr')
        alert("ar")
    })
    $('.custum-nav .en').click(function () {
        $('body').addClass('ltr')
        alert("En")
    })
})