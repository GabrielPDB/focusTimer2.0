export default function ({
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame,
  sound,
  timer
}) {
  let audioButtons = {
    buttonTree,
    buttonFlame,
    buttonMarket,
    buttonRain
  }

  function toggleAudioButton(whichButton) {
    Object.keys(audioButtons).forEach(key => {
      audioButtons[key].classList.remove('selected')
    })

    audioButtons[whichButton].classList.add('selected')
    sound.chooseAudio(whichButton + 'Audio')
  }

  function playCountdown() {
    timer.countdown()
  }

  function stopCountdown() {
    timer.reset()
  }

  function increaseCountdown() {
    timer.increaseMinutes(5)
  }

  function decreaseCountdown() {
    timer.decreaseMinutes(5)
  }

  return {
    toggleAudioButton,
    playCountdown,
    stopCountdown,
    increaseCountdown,
    decreaseCountdown
  }
}
