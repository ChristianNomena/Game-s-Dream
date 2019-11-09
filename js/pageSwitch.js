$(document).ready(() => {
    $('.lecons').hide()
    $('.equation').hide()
    $('.calendrier').hide()

    $('#itemLecon').hover(function () {
        $('.accueil').hide(200)
        $('.calendrier').hide(200)
        $('.equation').hide(200)
        $('.lecons').show(500)
    })

    $('#itemJeu').hover(function () {
        $('.lecons').hide(200)
        $('.calendrier').hide(200)
        $('.equation').hide(200)
        $('.accueil').show(500)
    })

    $('#itemEquation').hover(function () {
        $('.accueil').hide(200)
        $('.lecons').hide(200)
        $('.calendrier').hide(200)
        $('.equation').show(500)
    })

    $('#itemCalendrier').hover(function () {
        $('.accueil').hide(200)
        $('.lecons').hide(200)
        $('.equation').hide(200)
        $('.calendrier').show(500)
    })
})