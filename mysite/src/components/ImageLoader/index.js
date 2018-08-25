import React, { Component } from 'react';
import { TweenMax } from "gsap";
import lottie from 'lottie-web';
import cx from 'classnames';

import loadJSON from './assets/loader.json';
import './ImageLoader.scss';

export default class ImageLoader extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      divHeight: 0,
    }

    this.lottieRef = React.createRef();
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.lottieInit();
  }

  lottieInit = () => {
    let anim = lottie.loadAnimation({
      container: this.lottieRef.current, // the dom element that will contain the animation
      animationData: loadJSON,
      renderer: 'svg',
      autoplay: true,
      loop: true,
    });
    this.anim = anim;
  }

  _onLoad = ({target:img}) => {
    console.log("ONLOAD TRIGGEr")
    setTimeout(() => {
      console.log(img.offsetWidth, img.offsetHeight)
      this.setState({
        divHeight: img.offsetHeight,
        isLoading: false
      }, () => {
        TweenMax.to(this.imgRef.current, 0.5, {opacity: 1});
      })
    }, 1000)
  }

  render() {
    const { addClassName, imgSrc, imgAlt } = this.props;
    const { isLoading,divHeight } = this.state;
    return(
      <div className={cx(addClassName, 'ImageLoader')} >
          {isLoading && <div className='lottie-div' ref={this.lottieRef} />}
          <div className='img-container' ref={this.imgRef} >
            <img src={imgSrc} alt={imgAlt} onLoad={this._onLoad} ref={this.imgRef} />
          </div>
      </div>
    )
  }
}
