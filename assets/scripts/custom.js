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

    // mano kodas

    // naujas kintamasis
    // prasukti FOR kuris visus elementus kurie turi klase
    // turini saugoti i m.messages 
    // .innerHTML reiksme saugoti su .push

    m.messages = [document.getElementById("messenger").innerHTML];

    // mano kodas

    // m.messages = [
    //   // 'This is a message, which can be long and all.',
    //   // 'This could be another message.',
    //   // 'Also short ones work!',
    //   // 'Cool.',
    //   '<h1>Test</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> <a href="">anchor</a>'
    // ];

    //
    
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

  // ------ funkcija cyklina teksta
  
  // m.cycleText = function(){
  //   m.message = m.message + 1;
  //   if(m.message >= m.messages.length){
  //     m.message = 0;
  //   }
    
  //   m.current_length = 0;
  //   m.fadeBuffer = false;
  //   $(el).html('');
    
  //   setTimeout(m.animateIn, 2000);
  // };

  // ------ funkcija ciklina teksta
  
  m.init();
}

// console.clear();

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

 

// $('.grid').masonry({
 

//   // options
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-item'
// });

//  if ($('.grid')) {
//     ;
//   }

// var $grid = $('.grid').imagesLoaded( function() {
//   // init Masonry after all images have loaded
//   $grid.masonry({
//     // options...
//   });
// });

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



/////////////////////////////// scrolas ///////////////////////////

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

////////////////////test

 // var $hamburger = $(".hamburger");
 //    $hamburger.on("click", function(e) {
 //      $hamburger.toggleClass("is-active");
 //    // Do something else, like open/close menu
 //      $('.toggle a').click(function(){
 //      $('.menu').toggleClass('active');
 //    })
 //  });

