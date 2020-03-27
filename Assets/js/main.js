$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
      // console.log('click');
  });
});

$(function () {
  if ($(window).width() > 768) {
    var content = $(".content");
    var promo = $(".MarketingContainer__marketing-container");
    var navbar = $(".navbar");
    var pos = content.position();
      $(window).scroll(function () {
          var windowpos = $(window).scrollTop();
          if (windowpos >= pos.top & windowpos >= 20) {
            content.addClass("content--unpinned");
            promo.addClass("py-0");
            navbar.addClass("py-0");
          } else {
            content.removeClass("content--unpinned");
            promo.removeClass("py-0");
            navbar.removeClass("py-0");
          }
      });
  }
});
