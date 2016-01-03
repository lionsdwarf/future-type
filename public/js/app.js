$(function() {

  $('.overlay').hide();
  $('.close').click(hideModal);
  $('.main-img').click(showModal);
  $('.logo-purple').hover(function() {
    $(this).css('opacity', 0)
  }, function() {
    $(this).css('opacity', 1)
  });  

});

var hideModal = function() {
  $('.overlay').fadeOut(200);
};

var showModal = function() {
  $('.logo-purple').css('opacity', 1, 'slow');
  $('#modal').fadeIn(700);
};
