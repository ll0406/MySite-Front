import React, { Component } from 'react';
//import * as THREE from 'three';
import THREE from '../../helpers/three';


let SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

class Wave extends Component {
  constructor(props) {
    super(props)
    this.mount = React.createRef();
    this.scene = null;
    this.renderer = null;
    this.particles = null;
    this.count = 0;
    this.state = {
      mouseX: -200,
      mouseY: -200,
      count: 0,
    }
  }

  componentDidMount() {
    window.addEventListener( 'resize', this.onWindowResize);
    this.init();
  }

  componentWillUnmount() {
    this.stop()
    window.removeEventListener("resize", this.onWindowResize);
    this.mount.current.removeChild(this.renderer.domElement)
  }

  init = () => {
    const width = this.mount.current.clientWidth;
    const height = this.mount.current.clientHeight;

    //Camera
    const camera = new THREE.PerspectiveCamera( 75, width / height, 1, 10000 );
		camera.position.z = 1000;
    this.camera = camera;

    //scene
    const scene = new THREE.Scene();
    this.scene = scene;

    //particles
    let PI2 = Math.PI * 2;
    let particles = new Array();

    let material = new THREE.SpriteCanvasMaterial( {
					color: 0xffffff,
					program: function ( context ) {
						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();
					}
        });

    let particleIndex = 0;
    let particle;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[ particleIndex ++ ] = new THREE.Sprite();
						particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
						particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
						scene.add( particle );
      }
    }
    this.particles = particles;

    //renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize( width, height );
    this.renderer = renderer

    //Add to dom
    this.mount.current.appendChild(renderer.domElement);
    this.start();
  }

  onWindowResize = () => {
    const {camera} = this;
    const width = this.mount.current.clientWidth;
    const height = this.mount.current.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);

  }

  handleMouseMove = (e) => {
    const width = this.mount.current.clientWidth;
    const height = this.mount.current.clientHeight;
    this.setState({
      mouseX: e.clientX - (width / 2),
      mouseY: e.clientY - (height / 2)
    });
  }


  renderScene = () => {
      let { camera, scene, renderer, particles } = this;
      const { mouseX, mouseY, count } = this.state;
			camera.position.x += ( mouseX - camera.position.x ) * .05;
			camera.position.y += ( - mouseY - camera.position.y ) * .05;
			camera.lookAt( scene.position );

      let particle;
			let i = 0;
			for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
				for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
					particle = particles[ i++ ]; //may cause issue
					particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
						( Math.sin( ( iy + count ) * 0.5 ) * 50 );
					particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 +
						( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
				}
			}
			renderer.render( scene, camera );
			let newCount = count + 0.1;
      this.setState({count: newCount});
	}

  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%', zIndex:-1, position: 'absolute' }}
        ref={this.mount}
        onMouseMove={this.handleMouseMove}
      />
    )
  }

}

export default Wave;
