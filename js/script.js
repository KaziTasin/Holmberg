$(window).scroll (function(){
if ($(window).scrollTop() > 650) {
    $(".navbar").addClass("nav-fixed");
}else{
    $(".navbar").removeClass("nav-fixed");
}
if ($(window).scrollTop() > 600) {
    $(".arrow").fadeIn();
  } else {
    $(".arrow").fadeOut();
  }
})
$(".arrow").click(function(){
    $(window).scrollTop(0);
})
