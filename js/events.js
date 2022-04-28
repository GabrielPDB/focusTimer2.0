import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame
} from './elements.js'

export default function ({ controls }) {
  buttonFlame.addEventListener('click', () => {
    controls.toggleAudioButton('buttonFlame')
  })

  buttonTree.addEventListener('click', () => {
    controls.toggleAudioButton('buttonTree')
  })

  buttonRain.addEventListener('click', () => {
    controls.toggleAudioButton('buttonRain')
  })

  buttonMarket.addEventListener('click', () => {
    controls.toggleAudioButton('buttonMarket')
  })

  buttonPlay.addEventListener('click', () => {
    controls.playCountdown()
  })

  buttonStop.addEventListener('click', () => {
    controls.stopCountdown()
  })

  buttonPlus.addEventListener('click', () => {
    controls.increaseCountdown()
  })

  buttonLess.addEventListener('click', () => {
    controls.decreaseCountdown()
  })
}
