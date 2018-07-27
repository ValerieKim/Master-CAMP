var div_btn = $('.btn button');
var box = $('.box');

div_btn.on('click', function () {
  box.toggleClass('box-act');
});