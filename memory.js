var card_click = function(){
  $(this).flip(true); // make back flip :p
  $(this).unbind('click');//make unclickable
  $(this).addClass('selected');


  myArray = $('.selected');// check how many are '.selected'
 
  if (myArray.length == 2) { // if 2 elements are '.selected'
    $('.card').unbind('click'); //all cards unclickable

    setTimeout(function() { // remove .selected, flip to front and unbind bind again in 1500 ms
      myArray.each(function() { //for all items in myArray

// to do : if 2 cards are selected : if data-blabla === data-blabla {remove -or hide selected item} !grid layout: empty tile or rearrange masonry


        // if (2 are the same){
        //   remove/hide selected}
        //   else

 $('.card.selected').removeClass('selected'); // remove selected
    $(this).flip(false); //flip to front
        flip_event_handler(); //unbind bind again
  });
    }, 1500); //in 1500 ms         
  }
}


var flip_event_handler = function() {
  $(".card").unbind('click', card_click); //unbind all click events in card click function which lasted from previous round
    $(".card").bind('click', card_click); // bind click events again
}

$(document).ready(function(){

//jquery flip
$(".card").flip();
 $(".card").unbind('click'); //unbind all click events when doc ready
flip_event_handler(); 


});
