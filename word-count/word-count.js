export var countWords = function (words) {
  let totalWords = {}
  words = words.match(/\w+('\w+)?/g);
  for (let i in words) {
    if (totalWords[words[i].toLowerCase()] == undefined) {
      totalWords[words[i].toLowerCase()] = 1;
    } else {
      totalWords[words[i].toLowerCase()] += 1;
    }
  }
  return totalWords;
};


