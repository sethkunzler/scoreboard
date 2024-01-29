// TODO establish win condition

let homeScoreElement = document.getElementById('homeScore')
let awayScoreElement = document.getElementById('awayScore')
let scoreHome = 0
let scoreAway = 0
console.log(homeScoreElement)
console.log(scoreHome)
function drawHomeScore(score) {
  scoreHome += score
  homeScoreElement.innerText = scoreHome 
  console.log('this is the new home score', scoreHome)
}
function drawAwayScore(score) {
  scoreAway += score
  awayScoreElement.innerText = scoreAway
}



function reset() {
  scoreAway = 0
  scoreHome = 0
  homeScoreElement.innerText = scoreHome
  awayScoreElement.innerText = scoreAway
}