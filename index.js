const paragraphText = document.getElementById('inputText');
const newParagraphText= document.getElementById('paragraph');

paragraphText.addEventListener('input', function() {
  const newParagraph = paragraphText.value;
  newParagraphText.textContent = newParagraph;
});

const changeTextButton = document.getElementById('changeText');
const paragraph = document.getElementById('paragraph');

changeTextButton.addEventListener('click', function() {
  paragraph.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
});