$(window).scroll(function () {

    let offset = $('#about').offset().top
    let scrollTop = $(window).scrollTop()
    let navBarHeight = $('nav').outerHeight()

    if (scrollTop > offset - navBarHeight) {
        $('#main-nav').css('background-color', 'black')
        $('#btnUp').fadeIn(300)
    }
    else {
        $('#main-nav').css('background-color', 'transparent')
        $('#btnUp').fadeOut(300)

    }
});



$('#btnUp').click(function () {
    $('body', 'html').animate({ scrollTop: 0 }, 1500)
})



$(document).ready(function () {
    $('.loading').fadeOut(1000, function () {
        $('body').css('overflow', 'visible')
    })




    // $('span').eq(0).css('backgroundColor', 'rgba(255,55,0)')
    $('span').eq(1).css('backgroundColor', 'rgba(200,50,150)')
    $('span').eq(2).css('backgroundColor', 'rgba(255,255,0)')
    $('span').eq(3).css('backgroundColor', 'rgba(20,240,100)')
    $('span').eq(4).css('backgroundColor', 'rgba(200,50,0)')
    $('span').eq(5).css('backgroundColor', 'rgba(0,50,160)')


    $('.boxColors span').click(function () {
        const color = $(this).css('backgroundColor')

        $('h1, h2').css('color', color)
    })


    const boxWidth = $('.boxColors').outerWidth()

    $('.settings').click(function () {

        if ($('.boxColors').css('left') == '0px') {

            $('.boxColors').animate({ left: -boxWidth }, 600)

        }
        else {
            $('.boxColors').animate({ left: 0 }, 600)
        }

    })

    // if ($('.boxColors').css('left') == '0px') {

    //     $('.settings').click(function () {
    //         $('.boxColors').animate({ left: -boxWidth }, 600)

    //     })

    //     console.log('hiii')

    // }

    // if ($('.boxColors').css('left') == -boxWidth) {

    //     $('.settings').click(function () {

    //         $('.boxColors').animate({ left: 0 }, 600)

    //     })

    //     console.log('hola');

    // }


})


$('.navbar-collapse a').click(function () {
    const sectionToGo = $(this).attr('href')
    // console.log(sectionToGo)

    const offsetOfSection = $(sectionToGo).offset().top

    // console.log(offsetOfSection)

    $('html , body').animate({ scrollTop: offsetOfSection }, 500)
})