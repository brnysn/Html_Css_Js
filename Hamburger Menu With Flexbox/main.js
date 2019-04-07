/******************
  yasinbaran.com.tr
 *****************/
$(function () {
  $(".line").click(function () {
    $("#menu").toggleClass("show");
    $("#line1").toggleClass("line1");
    $("#line2").toggleClass("line2");
    $("#line3").toggleClass("line3");
  })

  var x = window.matchMedia("(min-width: 601px)")
  myFunction(x)
  x.addListener(myFunction)
  function myFunction(x) {
    if (x.matches) {
      $("#menu").removeClass("show");
      $("#line1").removeClass("line1");
      $("#line2").removeClass("line2");
      $("#line3").removeClass("line3");
    }
  }
});
/******************
      brnysn.com
 *****************/