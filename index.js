// add solution here
function theBeatlesPlay(musicians, instruments){
  var text = [];
  console.log(musicians);
  for (var i = 0; i < musicians.length; i++) {
    text[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return text;
}
