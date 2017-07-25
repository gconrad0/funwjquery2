//Some fun with jQuery

$(document).ready(function(){
  $('#hide').hide().show(1000).css('text-align', 'center');
  $('li').hide().parent().before('<a href="#">Show Tech Giants</a>');
  $('a').click(function(){
    $('li').show(1000);
    $('ul').css('padding-top', '20px' );
    $('.smaller').hide();
    $('.smaller').show(800);
  });

  $('#hideList').click(function(){
    $('li').hide(1000);
    $('ul').css('padding-top', '');
  });

/*
  $('ul').mouseover(function(){
    $('ul').css('background-color', 'blue'),
    $('.smaller').toggleClass('yellow');
  });
  $('ul').mouseout(function(){
    $('ul').css('background-color', '#555');
    $('.smaller').css('color', 'white')
  });
*/
// Replaced above code with .hover below

  $('ul').hover(function() {
    $(this).addClass('yellow');
    },
    function() {
      $(this).removeClass('yellow');
      }
  );
//Just some info gethering
  console.log($('img').attr('alt'));

//Makes text disappear
  $('#moveDown').delay(2000).animate({
    opacity: 0,
    top: "2",
    height: "0"
}, 1600, function() {

//Fade in image at tope. Used .complete to ensure proper functionality of .fadeIn
  });
  $('img').hide();
    $('img').each(function(i) {
        if (this.complete) {
            $(this).fadeIn(2000, 'linear');
        } else {
            $(this).load(function() {
                $(this).fadeIn(2000, 'linear');
            });
        }
    });

}); // Close of document.ready
