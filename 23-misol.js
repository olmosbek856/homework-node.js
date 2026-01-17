
function reverseWords(str) {
  const wordsArray = str.split(' ');
  const reversedArray = wordsArray.reverse();
  const reversedStr = reversedArray.join(' ');
  return reversedStr;
}

const s = "the sky is blue";
console.log(reverseWords(s));
