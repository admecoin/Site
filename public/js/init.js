jQuery(document).ready(function($) {
  var time = 380;
  setInterval(function(){
    $.get('https://api.nomics.com/v1/currencies/ticker?key=0aeb528d3cff391cb06407949a6ad938f080272f&ids=BTC,ETH,MATIC&interval=1d,30d&convert=USD&per-page=100&page=1', function(data) {
      
      var oldValuePolygon = parseFloat($('#pricePolygon').html());
      var newValuePolygon = parseFloat(data[2].price);
      var oldValueBitcoin = parseFloat($('#priceBitcoin').html());
      var newValueBitcoin= parseFloat(data[0].price);
      var oldValueEther = parseFloat($('#priceEther').html());
      var newValueEther = parseFloat(data[1].price);
      if(newValuePolygon != oldValuePolygon){
        if(newValuePolygon > oldValuePolygon )
        {
          $('#pricePolygon').css('color','green');
        }
        else
        {
          $('#pricePolygon').css('color','red');        
        }
        $('#pricePolygon').empty();
        $('#pricePolygon').append(parseFloat(data[2].price).toFixed(2));
      }
      if(newValueBitcoin != oldValueBitcoin){
        if(newValueBitcoin > oldValueBitcoin )
        {
          $('#priceBitcoin').css('color','green');
        }
        else
        {
          $('#priceBitcoin').css('color','red');        
        }
        $('#priceBitcoin').empty();
        $('#priceBitcoin').append(parseFloat(data[0].price).toFixed(2));
      }
      if(newValueEther != oldValueEther){
        if(newValueEther > oldValueEther )
        {
          $('#priceEther').css('color','green');
        }
        else
        {
          $('#priceEther').css('color','red');        
        }
        $('#priceEther').empty();
        $('#priceEther').append(parseFloat(data[1].price).toFixed(2));
      }
    });
  }, 2000);
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
