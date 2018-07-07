$(document).keyup(function(e){
  if(e.keyCode === 27){
    $('.grid').toggleClass('grid-show');
  };
});