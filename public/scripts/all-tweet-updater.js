$(document).ready(function() {
  $('.tweet').on('mouseover', function(event) {
    $(this).css('box-shadow', '5px 5px #778ba5')
  });
  $('.tweet').on('mouseout', function(event) {
    $(this).css('box-shadow', 'none')
  });
  $('.fa-flag').on('mouseover', function(event) {
    $(this).css('color', 'sandybrown');
  });
  $('.fa-flag').on('mouseout', function(event) {
    $(this).css('color', '#4056A1');
  });
  $('.fa-retweet').on('mouseover', function(event) {
    $(this).css('color', 'sandybrown');
  });
  $('.fa-retweet').on('mouseout', function(event) {
    $(this).css('color', '#4056A1');
  });
  $('.fa-heart').on('mouseover', function(event) {
    $(this).css('color', 'sandybrown');
  });
  $('.fa-heart').on('mouseout', function(event) {
    $(this).css('color', '#4056A1');
  });
});