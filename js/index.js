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
import Sound from './sounds.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'

let sound = Sound()
let timer = Timer(minutesDisplay, secondsDisplay)
let controls = Controls({
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
})

Events({ controls })
