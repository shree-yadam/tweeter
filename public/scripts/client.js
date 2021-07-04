/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetFormShow = function() {
  $('.new-tweet').slideDown();
  $('#tweet-text').focus();
};

const tweetFormToggle = function(event) {
  if ($('.new-tweet').is(':visible')) {
    $('.new-tweet').slideUp();
  } else {
    tweetFormShow();
  }
};

const initialHideElements = function() {
  $('div.error').hide();
};

$(document).ready(function() {

  initialHideElements();

  //Animate double down icon
  // $('.fa-angle-double-down').hover(function() {
  //   $(this).animate({ top: "-10" });
  // }, function() {
  //   $(this).animate({ top: "0" });
  // });
  $('.fa-angle-double-down').hover(function downLoop() { $(this).animate({ top: "-10" }, { duration: 600, complete: function upLoop() { $(this).animate({top: 0}, { duration: 600, complete: downLoop }) }}); });

  $('nav.nav-bar button').click(tweetFormToggle);

  loadTweets();
});