$(function() {

  $('.overlay').hide();
  $('.close').click(hideModals);
  $('#music-link').click(showMusic);
  $('#dates-link').click(showDates);
  $('#photos-link').click(showPhotos);
  $('#connect-link').click(showConnect);


});

var hideModals = function() {
  $('.overlay').fadeOut(200);
};

var showMusic = function() {
  hideModals();
  $('#music-overlay').fadeIn(700);
};

var showDates = function() {
  hideModals();
  $('#dates-overlay').fadeIn(700);
};

var showPhotos = function() {
  hideModals();
  $('#photos-overlay').fadeIn(700);
};
var showConnect = function() {
  hideModals();
  $('#contact-overlay').fadeIn(700);
};