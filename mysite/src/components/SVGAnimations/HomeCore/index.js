import React, { Component } from 'react';
import './HomeCore.scss';
import { TweenMax, Linear, TimelineMax, } from "gsap";
import lottie from 'lottie-web';

class HomeCore extends Component {
  constructor(props) {
    super(props);
    this.coreRef = React.createRef();
    this.anim = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.jsonData !== nextProps.jsonData) {
      return true;
    } else {
      return false;
    }
  }

  componentWillReceiveProps(nextProps) {
    const { jsonData } = nextProps;
    //Clean up
    lottie.destroy();

    //Reload
    this.anim = lottie.loadAnimation({
      container: this.coreRef.current, // the dom element that will contain the animation
      animationData: jsonData,
      renderer: 'svg',
      autoplay: true,
      loop: true,
    });

    this.anim.addEventListener('DOMLoaded', () => {
      TweenMax.from(this.coreRef.current, 1, {x: 100});
    })
  }

  componentDidMount() {
    const { jsonData } = this.props;
    let anim = lottie.loadAnimation({
      container: this.coreRef.current, // the dom element that will contain the animation
      animationData: jsonData,
      renderer: 'svg',
      autoplay: true,
      loop: true,
    });

    anim.addEventListener('DOMLoaded', () => {
      TweenMax.from(this.coreRef.current, 1, { x: 100});
    })
  }

  render() {
    return (
      <div className='HomeCore' ref={this.coreRef}>
      </div>
    )
  }
}

export default HomeCore;
