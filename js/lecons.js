$(document).ready(function() {
    $('#scroll1').on('click', function() {
        var page = $(this).attr('href'); 
        var speed = 2000; 
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    })
});

$(document).ready(function() {
    $('#scroll2').on('click', function() {
        var page = $(this).attr('href'); 
        var speed = 4000; 
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    })
});

$(document).ready(function() {
    $('#scroll3').on('click', function() {
        var page = $(this).attr('href'); 
        var speed = 6000; 
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    })
});

$(document).ready(function(){
    $('.haut').on('click', function(){
        $('html, body').animate({scrollTop : 0}, 2500);
    })
});