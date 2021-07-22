import {Scene, PerspectiveCamera, WebGLRenderer, Object3D, } from 'three'
import config from './config';
import resizeHandler from './utils/resizeHandler';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

class App {
  scene = new Scene();
  camera = new PerspectiveCamera(75, config.ratio, 0.1, 1000)
  renderer = new WebGLRenderer()

  init = ():void => {
    // camera 
    this.camera.position.z = 0
    this.camera.position.y = 0
    this.camera.position.x = -1
    this.camera.lookAt(0,0,0)
    this.scene.add(this.camera)

    // redrer 
    this.renderer.setSize( window.innerWidth, window.innerHeight )
    this.renderer.setPixelRatio(Math.min(config.pixelRation, 3))
    document.body.appendChild( this.renderer.domElement )

    // conttrols 
    new OrbitControls( this.camera, this.renderer.domElement )

    // handle resize
    window.addEventListener('resize', resizeHandler(this.camera, this.renderer))

    requestAnimationFrame(this.animate)
  }

  animate = (): void => {
    requestAnimationFrame(this.animate)
    //render the app 
    this.renderer.render(this.scene, this.camera)
  }
}
export default App