jQuery(document).ready(function($) {
  var time = 380;
  setTimeout(function() {
    // $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });
    
    var sections = $("section");
    var navigation_links = $("#nav-wrap a");
    /*$(".smoothscroll").on("click", function(e) {
      var active_link = $(this);

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
      return true;
    });*/
   $(document).ready(function(){
     var page = window.location.href.split('/')[window.location.href.split('/').length -1];
     $('ul.nav li').removeClass('current');
     if(page == '')
      $($('#home').parent()).addClass('current');
     $($('#' + page).parent()).addClass('current');
   })

    $(window).on("scroll", function() {
      var h = $("header").height();
      var y = $(window).scrollTop();
      var nav = $("#nav-wrap");

      if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut("fast");
      } else {
        if (y < h * 0.2) {
          nav.removeClass("opaque").fadeIn("fast");
          $(".logo-header").css('width', '50px');
          $(".title-logo").css('margin-left','80px');
          $(".title-logo").css('margin-top','30px');
        } else {
          nav.addClass("opaque").fadeIn("fast");
          $(".logo-header").css('width', '37px');
          $(".title-logo").css('margin-left','64px');
          $(".title-logo").css('margin-top','24px');
        }
      }
    });
    $(document).on('click', '.twitter-icon', function(){
      var c = $('#twitter-ann').attr('class');
      if(c == 'ann-hide')
      {
        $('#twitter-ann').removeClass('ann-hide');
        $('#twitter-ann').addClass('ann-show');

      }
      else
      {
        $('#twitter-ann').addClass('ann-hide');
        $('#twitter-ann').removeClass('ann-show');

      }
    });
    $(document).on('click', '.disabled-button', function(){
        return false;
    })

  }, time);
  
});
