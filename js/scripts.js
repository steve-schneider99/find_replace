var findWord = function(word1, word2) {
  if (word1 === word2) {
    return true;
} else {
    return false;
  }
};

var replaceWord = function(sentence, original, replacement) {
  var inputArray = sentence.split(" ");
  var outputText = ""
  inputArray.forEach(function(word) {
    if (original === word) {
      outputText += (replacement + " ");
  } else {
    outputText += (word + " ");
  }
});
  return outputText;
}

$(document).ready(function() {
  $('form#find_replace').submit(function(event) {
    var inputString = ($('input#input_string').val());
    var targetWord = ($('input#target_word').val());
    var newWord = ($('input#new_word').val());
    var result = replaceWord(inputString, targetWord, newWord);
    $('.new_sentence').text(result);
    $('#replace_result').show();
    event.preventDefault();
  });
});
