export default function () {
  const treeAudio = new Audio('./assets/Floresta.wav')
  const rainAudio = new Audio('./assets/Chuva.wav')
  const marketAudio = new Audio('./assets/Cafeteria.wav')
  const flameAudio = new Audio('./assets/Lareira.wav')

  function pressTree() {
    treeAudio.play()
    rainAudio.pause()
    marketAudio.pause()
    flameAudio.pause()
  }
  function pressRain() {
    treeAudio.pause()
    rainAudio.play()
    marketAudio.pause()
    flameAudio.pause()
  }
  function pressMarket() {
    treeAudio.pause()
    rainAudio.pause()
    marketAudio.play()
    flameAudio.pause()
  }
  function pressFlame() {
    treeAudio.pause()
    rainAudio.pause()
    marketAudio.pause()
    flameAudio.play()
  }

  return {
    pressTree,
    pressFlame,
    pressMarket,
    pressRain
  }
}
