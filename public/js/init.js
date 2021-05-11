jQuery(document).ready(function($) {
  var time = 380;
  setTimeout(function() {
    // $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });
    
    var sections = $("section");
    var navigation_links = $("#nav-wrap a");
    /*$(".smoothscroll").on("click", function(e) {
      e.preventDefault();
      var active_link = $(this);

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
      
    });*/
   

    $(window).on("scroll", function() {
      var h = $("header").height();
      var y = $(window).scrollTop();
      var nav = $("#nav-wrap");

      if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut("fast");
      } else {
        if (y < h * 0.2) {
          nav.removeClass("opaque").fadeIn("fast");
        } else {
          nav.addClass("opaque").fadeIn("fast");
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
