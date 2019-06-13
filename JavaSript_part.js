const symbols = {rock: 'rock', paper: 'paper', scissors: 'scissors'}
const results = {draft: 0, win: 1, loss: 2}

const chooseSymbol = () => {
  const id = Math.floor(Math.random() * Math.floor(3))
  return Object.keys(symbols)[id]
}

const determineWinner = (first, second) => {
  if (first === second) return results.draft
  if (
    (first === symbols.rock && second === symbols.scissors) ||
    (first === symbols.paper && second === symbols.rock) ||
    (first === symbols.scissors && second === symbols.paper)
  ) return results.win
  return results.loss
}

const playGame = () => {
  const first = chooseSymbol()
  const second = chooseSymbol()
  firstEl.dataset.figure = first
  secondEl.dataset.figure = second
  resultEl.dataset.result = determineWinner(first, second)
}

const buttonEl = document.getElementById('button')
const firstEl = document.getElementById('first')
const secondEl = document.getElementById('second')
const resultEl = document.getElementById('result')
button.addEventListener('click', playGame)
