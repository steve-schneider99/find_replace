describe('findWord', function() {
  it('checks to see if two words are the same', function() {
    expect(findWord("apple", "apple")).to.equal(true)
  });
});

describe('replaceWord', function() {
  it('replaces a word in a sentence with a different specified word', function() {
    expect(replaceWord("the cat meows", "cat", "dog")).to.equal("the dog meows ")
  });

  it('replaces a word in multiple places in a sentence with a different specified word', function() {
    expect(replaceWord("the cat cat cat meows", "cat", "dog")).to.equal("the dog dog dog meows ")
  });
});
