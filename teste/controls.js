export default function ({
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame
}) {
  function toggleButtonTree() {
    buttonTree.classList.add('selected')
    buttonRain.classList.remove('selected')
    buttonMarket.classList.remove('selected')
    buttonFlame.classList.remove('selected')
  }

  function toggleButtonRain() {
    buttonTree.classList.remove('selected')
    buttonRain.classList.add('selected')
    buttonMarket.classList.remove('selected')
    buttonFlame.classList.remove('selected')
  }

  function toggleButtonMarket() {
    buttonTree.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonMarket.classList.add('selected')
    buttonFlame.classList.remove('selected')
  }

  function toggleButtonFlame() {
    buttonTree.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonMarket.classList.remove('selected')
    buttonFlame.classList.add('selected')
  }

  return {
    toggleButtonFlame,
    toggleButtonMarket,
    toggleButtonRain,
    toggleButtonTree
  }
}
