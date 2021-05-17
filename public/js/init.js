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
    
    var baseUrl = "https://widgets.cryptocompare.com/";
    var scripts = document.getElementsByTagName("script");
    var embedder = scripts[ scripts.length - 1 ];
    var cccTheme = {"General":{"enableMarquee":true}};
    (function (){
    var appName = encodeURIComponent(window.location.hostname);
    if(appName==""){appName="local";}
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    var theUrl = baseUrl+'serve/v3/coin/header?fsyms=BTC,ETH,MATIC,XRP,LTC,DOT,BNB,ADA&tsyms=USD';
    s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
    embedder.parentNode.appendChild(s);
    })();

    // $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });
    /***************************************************************** */
    particlesJS("particles-js", 
    {"particles":{"number":{"value":241,"density":{"enable":true,"value_area":8418}},
    "color":{"value":"#ffffff"},
    "shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},
    "polygon":{"nb_sides":9},"image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":0.5,"random":false,
    "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
    "size":{"value":3,"random":true,
    "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":6.4,"direction":"none","random":false,"straight":false,
    "out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
    "onclick":{"enable":true,"mode":"push"},"resize":true},
    "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
    "bubble":{"distance":925.7680220235335,"size":40,"duration":2,"opacity":8,"speed":3},
    "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},"retina_detect":true});
    var count_particles, stats, update; 
    /* stats = new Stats; 
    stats.setMode(0); 
    stats.domElement.style.position = 'absolute'; 
    stats.domElement.style.left = '0px'; 
    stats.domElement.style.top = '0px'; 
    document.body.appendChild(stats.domElement); */
    /* update = function() { 
      stats.begin(); 
      stats.end(); 
      requestAnimationFrame(update); 
    }; 
    requestAnimationFrame(update); */
    /***************************************************************** */
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
      
      var logoHeader = $(".logo-header");
      var textoHeader = $(".title-logo");
      var connect = $(".stylednav");

      if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut("fast");
      } else {
        if (y < h * 0.2) {
          nav.removeClass("opaque").fadeIn("fast");
          logoHeader.removeClass("opaquelogo").fadeIn("fast");
          textoHeader.removeClass("opaquetexto").fadeIn("fast");
          connect.removeClass("topnav").fadeIn("fast");
        } else {
          nav.addClass("opaque").fadeIn("fast");
          logoHeader.addClass("opaquelogo").fadeIn("fast");
          textoHeader.addClass("opaquetexto").fadeIn("fast");
          connect.addClass("topnav").fadeIn("fast");
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
  setTimeout(function(){
    new scrollIfNeeded(embedableCoin);}, 2000);
});
