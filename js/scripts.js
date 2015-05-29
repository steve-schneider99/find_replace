var findWord = function(word1, word2) {
  if (word1 === word2) {
    return true;
} else {
    return false;
  }
};

var replaceWord = function(sentence, original, replacement) {
  inputArray = sentence.split(" ");
  inputArray.forEach(function(word, index) {
    if (original === word) {
      inputArray[index] = replacement;
  } else {
  }
});
  inputArray.join(" ");
  return inputArray;
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
