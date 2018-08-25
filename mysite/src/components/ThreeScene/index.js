import React, { Component } from 'react';
//import * as THREE from 'three';
import THREE from '../../helpers/three';


const MAX_POINTS = 50000;

class ThreeScene extends Component {
  constructor(props) {
    super(props)

    this.mount = React.createRef();
  }

  componentDidMount() {
    window.addEventListener( 'resize', this.onWindowResize);
    this.lineInitSetting();

  }
  componentWillUnmount() {
    this.stop()
    window.removeEventListener("resize", this.onWindowResize);
    this.mount.current.removeChild(this.renderer.domElement)
  }

  onWindowResize = () => {
    const {camera} = this;
    const width = this.mount.current.clientWidth;
    const height = this.mount.current.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);

  }

  lineInitSetting = () => {
    const width = this.mount.current.clientWidth;
    const height = this.mount.current.clientHeight;

    //scene init
    const scene = new THREE.Scene();
    //renderer init
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height)
    //camera initi
    const camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
    camera.position.set(0, 0, 200);
    camera.lookAt( scene.position );
    //controls
    const controls = new THREE.PointerLockControls(camera, renderer.domElement);
    controls.enabled = true;
    scene.add( controls.getObject() );
    //geometry - the line
    let geometry = new THREE.BufferGeometry();
    let positions = new Float32Array(MAX_POINTS * 3) // 3 vertices per pointer
    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3)); //? WHat is the 3 meaning

    //drawcalls
    let drawCount = 2; //Draw the first 2 points
    geometry.setDrawRange(0, drawCount);

    // material
	  let material = new THREE.LineBasicMaterial( { color: 0xff0000, linewidth: 2 } );

    //material + BoxGeometry line
  	let line = new THREE.Line( geometry,  material );
  	scene.add( line );

    //binding?
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;
    this.renderer= renderer;
    this.line = line;
    this.drawCount = drawCount;
    //update positions

    this.lineUpdate();
    this.mount.current.appendChild(this.renderer.domElement)
    this.startLine();
  }

  lineUpdate = () => {
    let positions = this.line.geometry.attributes.position.array;
    let index = 0;

    // attractor's initials
    let x = -12.1;
    let y = -22;
    let z = 0;

    let a = 10;
    let b = 28;
    let c = 8/3;

    let dt, dx, dy, dz;
    for ( let i = 0, l = MAX_POINTS; i < l; i ++ ) {
  		positions[ index ++ ] = x;
  		positions[ index ++ ] = y;
  		positions[ index ++ ] = z;

      // attractor is here
  		dt = 0.01;
      dx = (a * (y - x)) * dt;
      dy = (x * (b - z) - y) * dt;
      dz = (x * y - c * z) * dt;

      x = x + dx;
      y = y + dy;
      z = z + dz;

	 }


  }

  initSetting = () => {
    const width = this.mount.current.clientWidth
    const height = this.mount.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube

    this.mount.current.appendChild(this.renderer.domElement)
    this.start()
  }

  animateLine = () => {
      this.drawCount = (this.drawCount + 1 ) % MAX_POINTS;
      this.line.geometry.setDrawRange( 0, this.drawCount );
    	if ( this.drawCount === 0 ) {
    		// periodically, generate new data
    		this.lineUpdate();
    		this.line.geometry.attributes.position.needsUpdate = true; // required after the first render
    		this.line.material.color.setHSL( Math.random(), 1, 0.5 );
    	}
    	//this.controls.update();

    	this.renderScene();
      this.frameId = window.requestAnimationFrame(this.animateLine);
  }

  startLine = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animateLine);
    }
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  renderScene = () => {
   this.renderer.render(this.scene, this.camera)
  }

  animate = () => {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%', zIndex:-1 }}
        ref={this.mount}
      />
    )
  }

}

export default ThreeScene;
