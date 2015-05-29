var findWord = function(word1, word2) {
  if (word1 === word2) {
    return true;
} else {
    return false;
  }
};








$(document).ready(function() {
  $('form#initial_input').submit(function(event) {
    var input_string = ($('input#input_string').val());

    $('span#input_sentence').text(input_string)
    $('#user_sentence').show();
    event.preventDefault();
  });
});
