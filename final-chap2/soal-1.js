function changeWord(selectedText, changedText, text) {
  return text.replace(selectedText, changedText);
}

const text1 = "Andini sangat mencintai kamu selamanya";
const text2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("Andini", "jajang", text1));
console.log(changeWord("bromo", "semeru", text2));
