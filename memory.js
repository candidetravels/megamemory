var card_click = function(){
  $(this).flip(true);
  $(this).unbind('click');
  $(this).addClass('selected');
// disable click on selected
// check how many are '.selected'
  myArray = $('.selected');
  
  // if 2 elements are '.selected', remove '.selected', wait 2 sec and flip cards to front
  if (myArray.length == 2) {
    $('.card').unbind('click');
    setTimeout(function() {
      myArray.each(function() {
 $('.card.selected').removeClass('selected');
    $(this).flip(false);
        flip_event_handler();
  });
    }, 1500);          
  }
}

// add .selected
var flip_event_handler = function() {
  $(".card").unbind('click', card_click);
    $(".card").bind('click', card_click); 
}

$(document).ready(function(){

//jquery flip
$(".card").flip();
 $(".card").unbind('click');
flip_event_handler();


});


/* if  2 cards are flipped 
(add class flipped?)
    - don t allow another card to be clicked until:
    - if the two card have the same image, hide or remove them, start from beginning
      -else
        - wait 5 seconds and then turn    flipped over cards back to front
  


/*
$("#card-1").flip();
$("#card-2").flip();
$("#card-3").flip();
*/