/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweetObj) {
  const $tweet = $('<article class="tweet">');
  const markUp = `
  <header>
    <div class="user-profile">
      <img src=${tweetObj.user.avatars}>
      <p>${tweetObj.user.name}</p>
    </div>
    <div class="user-handle">
      <p>${tweetObj.user.handle}</p>
    </div>
  </header>
  <div class="old-tweet">
    <tweet>${tweetObj.content.text}</tweet>
  </div>
  <footer>
    <p class="tweet-time">${timeago.format(tweetObj.content.created_at)}</p>
    <Flags>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </Flags>
  </footer>
  `;
  $tweet.append(markUp);
  return $tweet;
};

const renderTweets = function(tweetObjects) {
  tweetObjects.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });

  //Box-shadow while hover
  $('.tweet').on('mouseover', function(event) {
    $(this).css('box-shadow', '5px 5px #778ba5');
  });
  $('.tweet').on('mouseout', function(event) {
    $(this).css('box-shadow', 'none');
  });

  //Change color of flags when in focus
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
};

const sendNewTweet = function(event) {
  console.log("Submit pressed");
  event.preventDefault();
  const newTweet = $(this).serialize();
  console.log(newTweet);
  const params = {
    url: '/tweets',
    method: 'POST',
    data: newTweet
  };
  $.ajax(params)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
$(document).ready(function() {
  $('#tweet-post').submit(sendNewTweet);

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
  loadTweets();
});