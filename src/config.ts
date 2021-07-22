const config =  {
  ratio: window.innerWidth / window.innerHeight,
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRation: window.devicePixelRatio
}

window.addEventListener('resize', function(){
  config.ratio = window.innerWidth / window.innerHeight 
  config.width = window.innerWidth
  config.height = window.innerHeight
  config.pixelRation = window.devicePixelRatio
})

export default config