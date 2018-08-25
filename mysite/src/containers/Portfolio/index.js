import React, { Component } from 'react';
import { TweenMax, TimelineMax } from "gsap";
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import cx from 'classnames';
import lottie from 'lottie-web';
import scrollToElement from 'scroll-to-element';
import scrollJSON from './assets/scrolldown.json';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

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
    axios.get(`http://django-env.hfmmi3iqww.us-east-1.elasticbeanstalk.com/portfolio/?format=json`)
        .then(res => {
          this.setState({
            portfolios: res.data
          }, () => {
            disableBodyScroll(this.contentRef.current);
          })

        })
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
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

  moveForward = () => {
    const { portfolios, viewIndex } = this.state;
    if (portfolios !== null && viewIndex < portfolios.length) {
      this.setState({
        inScroll: true,
        viewIndex: viewIndex+1
      }, () => {
        scrollToElement(`.id${viewIndex+1}`, {
        	offset: 0,
        	ease: 'out-circ',
        	duration: 1000
        });
      })
    }

    setTimeout(() => {
      this.setState({inScroll: false})
    }, 1100);
  }

  moveBackward = () => {
    const { portfolios, viewIndex } = this.state;
    if (portfolios !== null && viewIndex > 0) {
      this.setState({
        inScroll: true,
        viewIndex: viewIndex-1
      }, () => {
        scrollToElement(`.id${viewIndex-1}`, {
        	offset: 0,
        	ease: 'out-circ',
        	duration: 1000
        });

        setTimeout(() => {
          this.setState({inScroll: false})
        }, 1100);
      })
    }

  }

  //wheel event
  wheel = (event) => {
    if (event.deltaY >= 5 && !this.state.inScroll) {
      this.moveForward();
    }
    else if (event.deltaY <= -5 && !this.state.inScroll) {
      this.moveBackward();
    }
  }

  render() {
    const { portfolios, viewIndex } = this.state;

    return(
      <div className='Portfolio'>
        <div className='content' onWheel = {(e) => this.wheel(e)} ref={this.contentRef}>
          <div className='scroll-indicator-div' ref={this.scrollIndicatorContainer} />
          <div className={cx('intro-div', 'full-window', 'id0')}>
            <div className='title-div'>
              <h1> &#60; Portfolio /&#62; </h1>
            </div>
            <div className='text-div'>
              <div className='intro-text'>
                <h2> dd </h2>
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
