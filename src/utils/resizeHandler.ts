import { PerspectiveCamera, WebGLRenderer } from 'three'
import config from '../config'

export default (camera:PerspectiveCamera , renderer: WebGLRenderer) => () => {
  camera.aspect = config.ratio
  camera.updateProjectionMatrix()
  renderer.setSize(config.width, config.height)
  renderer.setPixelRatio(Math.min(config.pixelRation, 3))
}