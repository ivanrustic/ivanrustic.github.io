function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("navbtn").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("navbtn").style.visibility = "visible";
}

function architecture() {
  $('html,body').animate({
    scrollTop: $(".b").offset().top},
    'slow');
}

function vr() {
  $('html,body').animate({
    scrollTop: $(".f").offset().top},
    'slow');
}

function animation() {
  $('html,body').animate({
    scrollTop: $(".x").offset().top},
    'slow');
}

var senseSpeed = 5;
var previousScroll = 0;
$(window).scroll(function(event){
  var scroller = $(this).scrollTop();
  if (scroller-senseSpeed > previousScroll){
    $("scrollIcon").filter(':not(:animated)').slideUp();
  } else if (scroller+senseSpeed < previousScroll) {
    $("scrollIcon").filter(':not(:animated)').slideDown();
  }
  previousScroll = scroller;
});
