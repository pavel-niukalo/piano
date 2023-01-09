const keys = document.querySelectorAll('.key')
const note = document.querySelector('.current-key')
const hints = document.querySelectorAll('.key__hints')

function playNote (evt) {
  const audio = document.querySelector(`audio[data-key='${evt.keyCode}']`)
  const key = document.querySelector(`.key[data-key='${evt.keyCode}']`)

  if (!key) return;

  const keyNote = key.dataset.note

  key.classList.add('key--playing')
  note.textContent = keyNote
  audio.currentTime = 0
  audio.play()
}

function removeTransition (evt) {
  if (evt.propertyName !== 'transform') return
  this.classList.remove('key--playing')
}

hints.forEach((hint, index) => {
  hint.setAttribute('style', `transition-delay: ${ index * 50 }ms`)
})

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

document.addEventListener('keydown', playNote)