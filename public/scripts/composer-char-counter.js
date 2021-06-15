const LENGTH_OF_INPUT_TEXT = 140;

//Event handle for text enterd in new tweet box
$(document).ready(function() {
  $('#tweet-text').on('input', function(event){
    const currentLength = $(this).val().length;
    const spaceLeft = LENGTH_OF_INPUT_TEXT - currentLength;
    $(this).parentsUntil(".new-tweet").find(".counter").val(spaceLeft);
    //change color of character counter based on space left or not
    if (spaceLeft < 0) {
      $(this).parentsUntil(".new-tweet").find(".counter").css('color', 'red');
    }
    if (spaceLeft >= 0) {
      $(this).parentsUntil(".new-tweet").find(".counter").css('color', '#545149');
    }
  });
});