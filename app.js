// TODO establish win condition

let homeScoreElement = document.getElementById('homeScore')
let awayScoreElement = document.getElementById('awayScore')
let scoreHome = 0
let scoreAway = 0
console.log(homeScoreElement)
console.log(scoreHome)
let victoryBannerElement = document.getElementById('victoryBanner')

function drawHomeScore(score) {
  scoreHome += score
  homeScoreElement.innerText = scoreHome 
  endGame()
}
function drawAwayScore(score) {
  scoreAway += score
  awayScoreElement.innerText = scoreAway
  endGame()
}
function reset() {
  scoreAway = 0
  scoreHome = 0
  homeScoreElement.innerText = scoreHome
  awayScoreElement.innerText = scoreAway
}
function endGame() {
  if (scoreAway == 21) {
    console.log("Away wins!")
    reset()
    victoryBannerElement.innerHTML = `<h2>Away Wins!</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/Rjap4R1b6p8?si=bhpP6SaEk2ddrALq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
  else if (scoreHome == 21) {
    console.log("Home wins!")
    reset()
    victoryBannerElement.innerHTML = `<h2>Home Wins!</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/04854XqcfCY?si=qXDHC4McPnINsHn1&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  }
}
