$(document).ready(function() {
  $(".fa-download").hide()
  $(".resume").hover(function() {
    $(this).css({"opacity":".70","cursor":"pointer"})
    $("#resume-link span").slideUp(75, function() {
      $('.fa-download').slideDown(75);
    });
  },function() {
    $(this).css({"opacity":"1"})
    $(".fa-download").slideUp(75,function() {
      $("#resume-link span").show()
    });
  });

  $(".callout .fa-github").hide()
  $(".github").hover(function() {
    $(this).css({"opacity":".70","cursor":"pointer"})
    $("#github-link span").slideUp(75, function() {
      $('.callout .fa-github').slideDown(75);
    });
  },function() {
    $(this).css({"opacity":"1"})
    $(".callout .fa-github").slideUp(75,function() {
      $("#github-link span").show()
    });
  });

});
