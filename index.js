// add solution here
function theBeatlesPlay(musicians, instruments){
  text = [];

  for (var i = 0; i < musicians.length; i++) {
    text[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return text;
}
