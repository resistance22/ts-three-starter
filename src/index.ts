import { MeshBasicMaterial, BoxGeometry, Mesh, BufferGeometry, BufferAttribute } from 'three'
import App from './App'
import './scss/index.scss'

const triangles = 25000

const positoinsArray = new Float32Array(triangles * 9)

for( let i =0; i< triangles; i++ ){
  positoinsArray[i] = (Math.random() - 0.5) * 4
}

const bufferAttribute = new BufferAttribute(positoinsArray, 3)

const material = new MeshBasicMaterial( {color: 'cyan', wireframe: true})
const geom = new BufferGeometry()
geom.setAttribute('position', bufferAttribute)
const mesh = new Mesh(geom, material)
const  app = new App()
const {scene, camera} = app

scene.add(mesh)

app.init()