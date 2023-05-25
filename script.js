let scriptExists = true

let valence = 0
let strength = 0
let confidence = 0

function selectValence() {
  valence = Math.floor(Math.random()*3)
  return valence
}

console.log(selectValence())