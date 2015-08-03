$(function() {

  $('.overlay').hide();
  $('.close').click(hideModals);
  $('#music-link').click(showMusic);
  $('#dates-link').click(showDates);
  $('#photos-link').click(showPhotos);
  $('#contact-link').click(showContact);


});

var hideModals = function() {
  $('.overlay').fadeOut(1000);
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
var showContact = function() {
  hideModals();
  $('#contact-overlay').fadeIn(700);
};