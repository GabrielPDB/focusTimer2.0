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
import Controls from './controls.js'
import Events from './events.js'
import Sound from './sounds.js'

const controls = Controls({ buttonTree, buttonRain, buttonMarket, buttonFlame })

const sound = Sound()

Events({ controls, sound })
