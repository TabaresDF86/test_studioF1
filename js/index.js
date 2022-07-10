document.addEventListener("DOMContentLoaded", function(){
   
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('myVideo');
        if(video.playing) {
        } else {
            video.play();
        }
    }


    $num = $('.my-card').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;
    
    if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
    } else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
    }
    
    
    $('.my-card').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);
    
    if ($(this).hasClass('next')) {
        $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
        $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
  
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
    });
    
    // Keyboard nav
    $('html body').keydown(function(e) {
    if (e.keyCode == 37) { // left
        $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
        $('.active').next().trigger('click');
    }
    });


    $num2 = $('.my-card2').length;
    $even2 = $num2 / 2;
    $odd2 = ($num2 + 1) / 2;
    
    if ($num % 2 == 0) {
    $('.my-card2:nth-child(' + $even2 + ')').addClass('active');
    //$('.my-card2:nth-child(' + $even2 + ')').prev().addClass('prev');
    //$('.my-card2:nth-child(' + $even2 + ')').next().addClass('next');
    } else {
    $('.my-card2:nth-child(' + $odd2 + ')').addClass('active');
    $('.my-card2:nth-child(' + $odd2 + ')').prev().addClass('prev');
    //$('.my-card2:nth-child(' + $odd2 + ')').next().addClass('next');
    }
    
    
    $('.my-card2').click(function() {
    $slide2 = $('.active').width();
    console.log($('.active').position().left);
    
    if ($(this).hasClass('next')) {
        $('.card2-carousel').stop(false, true).animate({left: '-=' + $slide2});
    } else if ($(this).hasClass('prev')) {
        $('.card2-carousel').stop(false, true).animate({left: '+=' + $slide2});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
  
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
    });







    $num = $('.my-card3').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;
    
    if ($num % 2 == 0) {
    $('.my-card3:nth-child(' + $even + ')').addClass('active');
    $('.my-card3:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card3:nth-child(' + $even + ')').next().addClass('next');
    } else {
    $('.my-card3:nth-child(' + $odd + ')').addClass('active');
    $('.my-card3:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card3:nth-child(' + $odd + ')').next().addClass('next');
    }
    
    
    $('.my-card3').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);
    
    if ($(this).hasClass('next')) {
        $('.card3-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
        $('.card3-carousel').stop(false, true).animate({left: '+=' + $slide});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
  
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
    });




    $num = $('.my-card4').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;
    
    if ($num % 2 == 0) {
    $('.my-card4:nth-child(' + $even + ')').addClass('active');
    $('.my-card4:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card4:nth-child(' + $even + ')').next().addClass('next');
    } else {
    $('.my-card4:nth-child(' + $odd + ')').addClass('active');
    $('.my-card4:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card4:nth-child(' + $odd + ')').next().addClass('next');
    }
    
    
    $('.my-card4').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);
    
    if ($(this).hasClass('next')) {
        $('.card4-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
        $('.card4-carousel').stop(false, true).animate({left: '+=' + $slide});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
  
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
    });
    
});