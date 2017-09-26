function theBeatlesPlay(musicians, instruments) {
  let musiciansWithInstruments = [];
  for (var i = 0; i < musicians.length; i++) {
    musiciansWithInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansWithInstruments
}

// function johnLennonFacts(facts) {
//   let johnFacts = [];
//   let counter = 0;
//   while (johnFacts.length !== facts.length) {
//     johnFacts.push(facts[counter]+ "!!!")
//     counter++
//   }
//   return johnFacts
// }
function johnLennonFacts(facts) {
  let johnFacts = [];
  let counter = 0;
  while (counter < facts.length) {
    johnFacts.push(facts[counter]+ "!!!")
    counter++
  }
  return johnFacts
}
