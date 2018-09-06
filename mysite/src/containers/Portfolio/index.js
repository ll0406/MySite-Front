import React, { Component } from 'react';
import { TweenMax, TimelineMax } from "gsap";
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import cx from 'classnames';
import lottie from 'lottie-web';
import scrollJSON from './assets/scrolldown.json';

import SinglePortfolio from '../../components/SinglePortfolio';
import './Portfolio.scss';


class Portfolio extends Component {
  constructor() {
    super();

    this.scrollIndicatorContainer = React.createRef();
    this.contentRef = React.createRef();


    this.state = {
      portfolios: null,
      viewIndex: 0,
      inScroll: false
    }
  }

  componentDidMount() {
    this.lottieInit();
    axios.get(`https://api.liliu.me/portfolio/?format=json`)
        .then(res => {
          this.setState({
            portfolios: res.data
          })
        })
  }

  lottieInit = () => {
    console.log("INIT CALLED");
    let anim = lottie.loadAnimation({
      container: this.scrollIndicatorContainer.current, // the dom element that will contain the animation
      animationData: scrollJSON,
      renderer: 'svg',
      autoplay: true,
      loop: true,
    });
    this.anim = anim;
  }

  animatePortfolio = (refIndex) => {
    let target = this.portfolioRefs[refIndex];
    TweenMax.staggerFrom(target.current.children, 0.8, {autoAlpha:0, x:-50}, 0.2);
  }


  render() {
    const { portfolios, viewIndex } = this.state;

    return(
      <div className='Portfolio'>
        <div className='content' ref={this.contentRef}>
          <div className='scroll-indicator-div' ref={this.scrollIndicatorContainer} />
          <div className={cx('intro-div', 'full-window', 'id0')}>
            <div className='title-div'>
              <h1> &#60; Portfolio /&#62; </h1>
            </div>
            <div className='text-div'>
              <div className='intro-text'>
                <h2> Full-Stack Developer <br/> Love to create animated interactive experience across all platforms </h2>
              </div>
            </div>
          </div>

          {
            portfolios !== null &&
            portfolios.map((el, i) => {
              let idClassname = `id${i+1}`
              return (
                <div className={cx(idClassname)}  key={i}>
                  <LazyLoad offset={-100} height={800} unmountIfInvisible>
                    <SinglePortfolio portfolio={el}/>
                  </LazyLoad>
                </div>
              )
            })
          }


        </div>
      </div>
    )
  }
}

export default Portfolio;
