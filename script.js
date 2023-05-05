$(document).ready(function() {
    console.log($('.nav-link')); // prints the nav-link element to the console
    $('.nav-link').mouseenter(function() {
      $(this).find("a").css('background-color', '#E4EEFF');
    })

    $('.nav-link').mouseout(function(){
      if ($(this).find("a").css('background-color', '#E4EEFF')){
        console.log($('.nav-link')); // prints the nav-link element to the console
        $(this).find("a").css('background-color', 'white')}
    })
  });
  