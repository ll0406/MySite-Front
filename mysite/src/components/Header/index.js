import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TweenMax, TimelineMax, Expo, Linear } from "gsap";
import CSSPlugin from 'gsap/src/uncompressed/plugins/CSSPlugin';
import TextPlugin from 'gsap/src/uncompressed/plugins/TextPlugin';
import lottie from 'lottie-web';
import cx from 'classnames';

import menuJSON from './menu.json';
import './Header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.headerRef = React.createRef();
    this.textRef = React.createRef();
    this.blogRef = React.createRef();
    this.portfolioRef = React.createRef();
    this.contactRef = React.createRef();

    //menu lottie div ref
    this.menuLottieRef = React.createRef();
    //lottie control Timeline
    this.lottieTL = new TimelineMax();

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    this.lottieInit();
  }

  lottieInit = () => {
    let anim = lottie.loadAnimation({
      container: this.menuLottieRef.current, // the dom element that will contain the animation
      animationData: menuJSON,
      renderer: 'svg',
      autoplay: false,
    });
    this.anim = anim;
  }

  applyValue = (tween) => {
    this.anim.goToAndStop(tween.target.frame, true)
  }


  handleClick = () => {
    if (!this.state.isOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }



  openMenu = () => {
    this.setState({isOpen: true}, () => {

      this.lottieTL.to(
        {frame: 0}, 2,
        {frame: (this.anim.totalFrames-1) / 2, onUpdate:this.applyValue, onUpdateParams:["{self}"]},
      );

      let tl = new TimelineMax();
      tl.to(this.headerRef.current, 0.3, {width: '300px', backgroundColor: 'gray', ease: Expo.easeOut});
      tl.to(this.headerRef.current, 0.3, {height: '100vh', ease: Expo.easeOut});
      let linkRefs = [this.homeRef.current, this.blogRef.current, this.portfolioRef.current, this.contactRef.current];
      tl.staggerFrom(linkRefs, 0.5, {x: 100, opacity: 0, ease: Expo.easeOut}, 0.05);
      tl.to(this.textRef.current, 0.4, {text:"close", ease:Linear.easeNone});
    })
  }

  closeMenu = () => {
    this.lottieTL.to(
      {frame: (this.anim.totalFrames-1) / 2}, 2,
      {frame: (this.anim.totalFrames-1), onUpdate:this.applyValue, onUpdateParams:["{self}"]},
    );
    let tl = new TimelineMax();
    let linkRefs = [this.contactRef.current, this.portfolioRef.current, this.blogRef.current, this.homeRef.current];
    tl.staggerTo(linkRefs, 0.5, {x: 100, autoAlpha: 0, ease: Expo.easeOut}, 0.05);
    tl.to(this.headerRef.current, 0.3, {height: '80px',ease: Expo.easeOut});
    tl.to(this.headerRef.current, 0.3, {width: '50px', backgroundColor: 'transparent' ,ease: Expo.easeOut});
    tl.to(this.textRef.current, 0.4, {text:"menu", ease:Linear.easeNone});
    tl.eventCallback('onComplete', () => this.setState({isOpen: false}));
  }

  toCredit = () => {
    this.props.history.push('/credits');
    this.closeMenu();
  }

  toProfolio = () => {
    this.props.history.push('/portfolio');
    this.closeMenu();
  }

  toBlog = () => {
    this.props.history.push('/blog');
    this.closeMenu();
  }

  toHome = () => {
    this.props.history.push('/');
    this.closeMenu();
  }

  render() {
    return (
      <div className='Header' ref={this.headerRef} >
          <div className='svg-div' onClick={this.handleClick}>
            <div className='lottie-div' ref={this.menuLottieRef} />
            <p ref={this.textRef}>
              menu
            </p>
          </div>
          {
            this.state.isOpen &&
              <div className='menu-div'>
                <div className='link-div' ref={this.homeRef} onClick={this.toHome}>
                  <p>Home</p>
                </div>
                <div className='link-div' ref={this.blogRef} onClick={this.toBlog}>
                  <p>Blog</p>
                </div>
                <div className='link-div' ref={this.portfolioRef} onClick={this.toProfolio}>
                  <p>Portfolio</p>
                </div>
                <div className={cx('link-div', 'credit-div')} ref={this.contactRef} onClick={this.toCredit}>
                  <p>Credits</p>
                </div>
              </div>
          }
      </div>
    )
  }

}

export default withRouter(Header);
