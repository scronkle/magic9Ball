let scriptExists = true

let valence = 0
let strength = 0
let confidence = 0


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