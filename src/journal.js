export function Entry() {
  this.title = "";
  this.body = "";
}

Entry.prototype.getTeaser = function () {
  let finalMessage = "";
  let bodyArray = this.body.split(" ");
  if (bodyArray.length > 8) {
    let firstSentence = this.body.split(/[?!.](.*)/s);
    return firstSentence[0];
  } else {
    finalMessage = this.body;
    return finalMessage;
  }
};

Entry.prototype.countWords = function () {
  let bodyArray = this.body.split(" ");
  if (bodyArray.includes("."))
    return bodyArray.length;
};

Entry.prototype.countLetters = function () {
  let bodyArray = this.body.toLowerCase().split("");
  let vowelCount = 0;
  let consonantCount = 0;
  const vowelArray = ["a", "e", "i", "o", "u"];
  bodyArray.forEach(function(letter){
    if (vowelArray.includes(letter)) {
      vowelCount += 1;
    } else if (letter.match(/[bcdfghjklmnpqrstvwxyz]/g)) {
      consonantCount += 1;
    }
  });
  return "Vowels: " + vowelCount + ", Consonants: " + consonantCount;
};

