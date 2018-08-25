import React, { Component } from 'react';
import { TweenMax } from "gsap";
import lottie from 'lottie-web';
import LoaderJSON from './loader.json';
import './Loading.scss';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.loadingRef = React.createRef();
    this.anim = null;
  }

  componentDidMount() {
    TweenMax.from(this.loadingRef.current, 0.5, {x: 100});
    let anim = lottie.loadAnimation({
      container: this.loadingRef.current, // the dom element that will contain the animation
      animationData: LoaderJSON,
      renderer: 'svg',
      autoplay: true,
      loop: true,
    });
  }

  render() {
    return (
      <div className='Loading' ref={this.loadingRef}>
      </div>
    )
  }
}

export default Loading;
