import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

export default function ({ controls, sound }) {
  buttonFlame.addEventListener('click', () => {
    controls.toggleButtonFlame()
    sound.pressFlame()
  })

  buttonTree.addEventListener('click', () => {
    controls.toggleButtonTree()
    sound.pressTree()
  })

  buttonRain.addEventListener('click', () => {
    controls.toggleButtonRain()
    sound.pressRain()
  })

  buttonMarket.addEventListener('click', () => {
    controls.toggleButtonMarket()
    sound.pressMarket()
  })
}
