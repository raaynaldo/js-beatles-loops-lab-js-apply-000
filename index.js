// add solution here
function theBeatlesPlay(musicians, instruments){
  var text = [];

  for (var i = 0; i < musicians.length; i++) {
    text[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return text;
}

function johnLennonFacts(facts){
  var text = [];

  for (var i = 0; i < facts.length; i++) {
    text = facts[i] + "!!!";
  }

  return text;
}
