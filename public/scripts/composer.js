//Handle page scrolling
const handleScrollPage = function(event) {
  if ($(window).scrollTop() > $(window).height() / 4) {
    $('.fa-angle-double-up').show();
    $('.right-nav').hide();
  } else {
    $('.fa-angle-double-up').hide();
    $('.right-nav').show();
  }
}


$(document).ready(function() {
  $(document).scroll(handleScrollPage);

  $('#scroll-top-button').click(function(event) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    tweetFormShow();
  });

  //Handle tweet post
  $('#tweet-post').submit(function(event) {
    event.preventDefault();
    $('div.error').slideUp();
    const newTweet = $(this).serialize();
    if ($('#tweet-text').val() === "") {
      $('div.error h6').text("Please enter new tweet before posting!");
      $('div.error').slideDown();
    } else if ($('#tweet-text').val().length > LENGTH_OF_INPUT_TEXT) {
      $('div.error h6').text(`Tweet cannot have more than ${LENGTH_OF_INPUT_TEXT} characters!`);
      $('div.error').slideDown();
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
          $('output.counter').val(`${LENGTH_OF_INPUT_TEXT}`);
        })
        .catch((error) => {
          console.log(error);
        });
      $('.new-tweet').slideUp();
    }
  });
});