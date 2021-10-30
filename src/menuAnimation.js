$(document).ready(function() {
// function to open/close nav
function toggleNav(){
  
  var element = document.getElementsByClassName("card");

  // if nav is open, close it
  if($("nav").is(":visible")){
    $("nav").fadeOut();
    $("button").removeClass("menu");
  
    setTimeout(function() {

      for (var i = 0; i < element.length; i++) {
        element[i].style.position = "relative";
      }
    }, 500)
  }
  // if nav is closed, open it
  else{
    
    for (var i = 0; i < element.length; i++) {
        element[i].style.position = "static";
    }

    $("button").addClass("menu");
    $("nav").fadeIn().css('display', 'flex');
  }
}

// when clicking + or ☰ button
$("button").click(function(){
  // when clicking ☰ button, open nav
  if($("header").hasClass("open")){
    toggleNav();
  }
  // when clicking + button, open header
  else{
    $("header").addClass("open");
  }
});

// close nav
$("#nav-close").click(function(){
  toggleNav();
});

// scroll to sections
$("nav li").click(function(){
  // get index of clicked li and select according section
  var index = $(this).index();
  var target = $("div section").eq(index);
  
  toggleNav();
  
  $('html,body').delay(300).animate({
    scrollTop: target.offset().top
  }, 500);
});

});