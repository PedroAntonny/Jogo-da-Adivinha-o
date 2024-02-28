const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const inputNumber = document.querySelector('#input-number')
inputNumber.focus()

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleKeyDown)

// Funções

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleTryClick(event) {
  event.preventDefault()

  if (isValidInput(inputNumber.value)) {
    if (isTheRightNumber(inputNumber.value)) {
      toggleScreen()
      screen2.querySelector('h2').innerText = `Parabéns você acertou em ${
        xAttempts === 1 ? xAttempts + ' tentativa' : xAttempts + ' tentativas'
      }`
    } else {
      screen1.querySelector('#error-message').innerHTML = isBiggerOrSmaller()
    }
  }

  inputNumber.value = ''
}

function handleResetClick() {
  toggleScreen()
  inputNumber.focus()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function handleKeyDown(event) {
  if (screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function isValidInput(value) {
  if (value === '') return false

  if (Number(value) < 0 || Number(value) > 10) {
    alert('Digite um número entre 0 e 10')
    return false
  }
  return true
}

function isTheRightNumber(value) {
  if (Number(value) !== randomNumber) {
    xAttempts++
    return false
  }
  return true
}

function isBiggerOrSmaller() {
  if (Number(inputNumber.value) <= randomNumber) {
    return '<p>Você Errou! O número é maior.</p>'
  } else {
    return '<p>Você Errou! O número é menor.</p>'
  }
}

// function isValidInput(value) {
//   if (value !== '') {
//     if (Number(value) >= 0 && Number(value) <= 10) {
//       return true
//     }
//     alert('Digite um número entre 0 e 10')
//   }
//   return false
// }

// function isTheRightNumber(value) {
//   if (Number(value) === randomNumber) {
//     return true
//   }
//   xAttempts++
//   return false
// }
