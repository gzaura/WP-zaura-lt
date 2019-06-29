'use strict';

var Messenger = function(el){
  if (!el.length ) {
    return;
  }
  var m = this;

  m.init = function(){
    m.codeletters = "&#*+%?£@§$_|-=";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [document.getElementById("messenger").innerHTML];
    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }

    var do_cycles = false;
    var message = '';

    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 200);
    }
  };

  m.init();
}

// Messenger konstruktoriaus iskvietimas
var messenger = new Messenger($('#messenger'));

//////////////////// transition //////////////////

document.body.className += ' fade-out';

$(function() {
    $('body').removeClass('fade-out');
});

////////////////// burger-nav //////////////////////

$(document).ready(function(){
  $('.toggle a').click(function(){
    $('.menu').toggleClass('active');
  })
})

////////////////////////////////// masonry ////////////////////////

 if ($('.grid').length) {
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-item'
    });
      var $grid = $('.grid').imagesLoaded( function() {
      // init Masonry after all images have loaded
      $grid.masonry({
        // options...
      });
    });
  }

/////////////////////////////// scrolas ////////////////////////////////////////

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//// burger color change in cv page ///////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 250) { // check if user scrolled more than 50 from top of the browser window
        $("#cv-burger i").css("color", "white"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $("#cv-burger i").css("color", "#212121"); // if not, change it back to transparent
      }
    });
  });
