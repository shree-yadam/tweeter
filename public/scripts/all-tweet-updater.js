const tweet = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1623610194129
};

$(document).ready(function() {
  //Change this after posting message to server
  $('div.user-profile img').attr('src', tweet.user.avatars);
  $('div.user-profile p').text(tweet.user.name);
  $('.user-handle p').text(tweet.user.handle);
  $('tweet').text(tweet.content.text);
  $('.tweet-time').text(timeago.format(tweet.created_at));
  //change code above
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