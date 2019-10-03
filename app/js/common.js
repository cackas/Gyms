$(function() {
    $('#tab-btn-1').click(function(){
        $(this).addClass('active');
        $('#tab1').addClass('active');
        $('#tab2').removeClass('active');
        $('#tab3').removeClass('active');
        $('#tab-btn-2').removeClass('active');
        $('#tab-btn-3').removeClass('active');
    })
    $('#tab-btn-2').click(function(){
        $(this).addClass('active');
        $('#tab2').addClass('active');
        $('#tab1').removeClass('active');
        $('#tab3').removeClass('active');
        $('#tab-btn-1').removeClass('active');
        $('#tab-btn-3').removeClass('active');
    })
    $('#tab-btn-3').click(function(){
        $(this).addClass('active');
        $('#tab3').addClass('active');
        $('#tab2').removeClass('active');
        $('#tab1').removeClass('active');
        $('#tab-btn-2').removeClass('active');
        $('#tab-btn-1').removeClass('active');
    })
    Slider();
    function Slider() {
        setInterval(function(){
            if($(".tabs-wrap").is(":hover")) return;
            $('#tab-btn-1').addClass('active');
            $('#tab1').addClass('active');
            $('#tab2').removeClass('active');
            $('#tab3').removeClass('active');
            $('#tab-btn-2').removeClass('active');
            $('#tab-btn-3').removeClass('active');
        }, 3000)
        setInterval(function(){
            if($(".tabs-wrap").is(":hover")) return;
            $('#tab-btn-2').addClass('active');
            $('#tab2').addClass('active');
            $('#tab1').removeClass('active');
            $('#tab3').removeClass('active');
            $('#tab-btn-1').removeClass('active');
            $('#tab-btn-3').removeClass('active');
        }, 6000)
        setInterval(function(){
            if($(".tabs-wrap").is(":hover")) return;
            $('#tab-btn-3').addClass('active');
            $('#tab3').addClass('active');
            $('#tab2').removeClass('active');
            $('#tab1').removeClass('active');
            $('#tab-btn-2').removeClass('active');
            $('#tab-btn-1').removeClass('active');
        }, 9000)
    }
    //Slick carousel
    $('.carousel-wrap').slick({
        rows: 2,
        dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3
    });
    //Range
    var rangeSlider = document.getElementById("budget");
    var rangeBullet = document.getElementById("rs-bullet");
    var widthRange = document.querySelector('#budget').offsetWidth;
    
    rangeSlider.addEventListener("input", showSliderValue, false);
    showSliderValue();
    function showSliderValue() {
      rangeBullet.innerHTML = rangeSlider.value;
      var bulletPosition = (rangeSlider.value /rangeSlider.max);
      rangeBullet.style.left = (bulletPosition * widthRange * .55) + "px";
    }
    //Popup
    popupShow();
    function popupShow() {
        document.addEventListener("mouseleave", function(){
            $('.popup').fadeIn();
        }, false)
        $('.close').click(function(){
            $('.popup').fadeOut();
        })
    }
    
        $('input,textarea').focus(function(){
          $(this).data('placeholder',$(this).attr('placeholder'))
          $(this).attr('placeholder','');
        });
        $('input,textarea').blur(function(){
          $(this).attr('placeholder',$(this).data('placeholder'));
        });
    //Popup call
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".popup-call"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.fadeOut(); // скрываем его
            }
        });
    $('.header__btn').click(function(){
        $('.popup-call').fadeIn();
    })
    $('.footer-btn').click(function(){
        $('.popup-call').fadeIn();
    })
});
