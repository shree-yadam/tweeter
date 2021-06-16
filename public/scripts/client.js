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

$(document).ready(function() {
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
  loadTweets();
  //Handle tweet post
  $('#tweet-post').submit(function(event) {
    event.preventDefault();
    const newTweet = $(this).serialize();
    if ($('#tweet-text').val() === "") {
      alert("Please enter new tweet before posting!");
    } else if ($('#tweet-text').val().length > 140) {
      alert("Tweet cannot have more than 140 characters!");
    } else {
      const params = {
        url: '/tweets',
        method: 'POST',
        data: newTweet
      };
      $.ajax(params)
        .then((response) => {
          loadTweets();
          $('#tweet-text').val("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
});