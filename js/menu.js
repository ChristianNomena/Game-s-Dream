$(document).ready(() => {
    $('#itemJeu').hover(function () {
            $('.sommaireJeu').fadeIn(250)
            $('.sommaireLecon').fadeOut(250)
            
        }, function () {
            // out
        }
    )
    $('.sommaireJeu').hover(function () {
            // over
            
        }, function () {
            $(this).fadeOut(250)
        }
    )

    $('#itemLecon').hover(function () {
            $('.sommaireLecon').fadeIn(250)
            $('.sommaireJeu').fadeOut(250)
            
        }, function () {
            // out
        }
    )
    $('.sommaireLecon').hover(function () {
            // over
            
        }, function () {
            $(this).fadeOut(250)
        }
    )

    $('.conteneurSlide').hover(function () {
            $('.sommaireJeu').fadeOut(250)
            $('.sommaireLecon').fadeOut(250)
            
        }, function () {
            // out
        }
    )

    $('.sectionProduit').hover(function () {
            $('.sommaireJeu').fadeOut(250)
            $('.sommaireLecon').fadeOut(250)
            
        }, function () {
            // out
        }
    )

    $('.footer').hover(function () {
        $('.sommaireJeu').fadeOut(250)
        $('.sommaireLecon').fadeOut(250)
        
    }, function () {
        // out
    }
)
})