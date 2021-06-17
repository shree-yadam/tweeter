/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Function to create HTML for ther tweets received from server

const createTweetElement = function(tweetObj) {
  const $tweet = $('<article class="tweet">');
  const markUpHeader = `
  <header>
    <div class="user-profile">
      <img src=${tweetObj.user.avatars}>
      <p>${tweetObj.user.name}</p>
    </div>
    <div class="user-handle">
      <p>${tweetObj.user.handle}</p>
    </div>
  </header>
  `;
  const markUpFooter = `<footer>
    <p class="tweet-time">${timeago.format(tweetObj.content.created_at)}</p>
    <Flags>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </Flags>
  </footer>
  `;
  $tweet.append(markUpHeader);
  //Make content safe from XSS
  const markUpContent = $('<div class="old-tweet">').text(tweetObj.content.text);
  $tweet.append(markUpContent);
  $tweet.append(markUpFooter);
  return $tweet;
};

//rendering all tweets received
const renderTweets = function(tweetObjects) {
  $('#tweets-container').empty();
  tweetObjects.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });
};

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

//Load tweets
const loadTweets = function() {
  const params = {
    url: '/tweets',
    method: 'GET'
  };
  $.ajax(params)
    .then((response) => {
      renderTweets(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

$(document).ready(function() {
  
  initialHideElements();

  $('.right-nav').click(tweetFormToggle);

  loadTweets();
});