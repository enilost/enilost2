$(function(){
    $('.team__members').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '15px',
                slidesToShow: 1
              }
            }
          ]
    });
    //jquery filter works
    let ctgr = $('.works__links li');
    console.log(ctgr);
    ctgr.click(function(e){
        e.preventDefault();
        console.log($(this).attr('data-f'));
        let f = $(this).attr('data-f');
        let cont = $('.work__item');
        console.log(f);
        cont.each(function(){
                console.log($(this).attr('data-f'));
                //console.log(f);
                if ($(this).attr('data-f') !== f && f !== 'all') {
                    $(this).slideUp(500, function(){console.log('')});
                } else {$(this).slideDown(500);}
                ;
            
        });
    });
    //jquery nav burger
    $('#nav').click(function(e){
        e.preventDefault();
        $('.menu_js').slideToggle(300);
        $('#nav').show(0);
        return false;
    });
    $(window).resize(function() {
      if ($(window).width() > 767 ) {
        $('.menu_js').slideDown(0);
        $('#nav').hide(0);
      };
      if ($(window).width() < 767 ) {
        $('.menu_js').slideUp(0);
        $('#nav').show(0);
      };
      if ($(window).width() < 767 ) {
        $('.butUp').fadeOut(500);
      };
    });
    //вызовем событие resize
    $(window).resize();

    //jquery nav scroll
    $('.menu_js').click(function(e){
      e.preventDefault();
      //console.log($(this).children('a').attr('href'));
      $('html, body').animate({ scrollTop: $($(this).children('a').attr('href')).offset().top }, 600);
      return false;
    });
    //jquery button up
    $(window).scroll(function(){
      let scrl = $(window).scrollTop();
      if (scrl > 900 && $(window).width() > 767 ) {
        $('.butUp').fadeIn(500);
      }
      else{
        $('.butUp').fadeOut(500);
      };
    });
    $('.butUp').click(function(){
      $('html, body').animate({ scrollTop: 0}, 600);
    });
    //jquery anim class animate__headShake
    $('.menu li').hover(function(){
      $(this).toggleClass('animate__headShake')
    },function(){
      $(this).toggleClass('animate__headShake')
    });
});
function heightHeader() {
  //window.setTimeout('heightHeader' , 500);
  let main = document.querySelector('html');
  let head = document.getElementById('head');
  head.style.height = main.clientHeight+'px';
  window.setTimeout('heightHeader()' , 700);
};
heightHeader();