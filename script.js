let scriptExists = true

let valence = 0
let strength = 0
let confidence = 0

const valenceArr = ["NO", "MAYBE", "YES"]
const strengthArr = ["very weak", "weak", "moderate", "strong", "very strong"]


//set valence to one of 3 values
function selectValence() {
  valence = Math.floor(Math.random()*3)
  return valence
}


//set strength to one of 5 values
function selectStrength() {
  strength = Math.floor(Math.random()*5)
  return strength
}

//set confidence to a percentage?
function selectConfidence() {
  confidence = Math.floor(Math.random()*100)
  return confidence
}

function generateAnswer() {
  let userValence = valenceArr[selectValence()]
  let userStrength = strengthArr[selectStrength()]
  console.log(`The answer is a ${userStrength} ${userValence}.`)
  selectConfidence()
  console.log(`I am ${confidence}% confident about this.`)
}

generateAnswer()