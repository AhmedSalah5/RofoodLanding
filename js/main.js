$(document).ready(function () {
    //Change Direction
    $('.custum-nav .ar').click(function () {
        $('body').removeClass('ltr')
    })
    $('.custum-nav .en').click(function () {
        $('body').addClass('ltr')
    })
})