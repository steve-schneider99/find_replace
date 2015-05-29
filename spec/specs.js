describe('findWord', function() {
  it('checks to see if two words are the same', function() {
    expect(findWord("apple", "apple")).to.equal(true)
  });
});

describe('replaceWord', function() {
  it('replaces a word in an array with a different specified word', function() {
    expect(replaceWord("cat", "dog")).to.equal("dog")
  });
});
