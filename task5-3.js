
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var strengths = $(".strengths");
  
    for (var i = 0; i < strengths.length; i++) {
      var strengths = strengths[i];
      if ($(strengths).position().top < pageBottom) {
        $(strengths).addClass("visible");
      } else {
        $(strengths).removeClass("visible");
      }
    }
  });