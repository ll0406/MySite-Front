import React, { Component } from 'react';
import './AnimationTest.scss';
import { TweenMax, Linear, TimelineMax, Expo, Power0 } from "gsap";
import CSSPlugin from 'gsap/src/uncompressed/plugins/CSSPlugin';
import cx from 'classnames';
import Scene from '../../components/ThreeScene';
import Wave from '../../components/ThreeScene/wave';

import lottie from 'lottie-web';
import testJSON from './newAnimation.json'

import HomeTech from '../../components/SVGAnimations/HomeTech/index.js';
import HomeCore from '../../components/SVGAnimations/HomeCore/index.js';
import NewsJSON from './news.json';
import Dots from './2333.json'
import Home from './home.json';
import Info from './info.json';
import Skipping from './skipping.json';
import homePNG from './assets/home.png';
import hirePNG from './assets/hire.png';
import aboutPNG from './assets/about.png';
import solPNG from './assets/sol.png';
import techPNG from './assets/tech.png';


export default class AnimationTest extends Component {


  constructor(props) {
    super(props);
    // This is for animate with Scroll
    // this.divRef = React.createRef();
    this.pageRef = React.createRef();
    this.tl = new TimelineMax({paused: true});

    //Tech Animation
    // this.divRef1 = React.createRef();
    // this.divRef2 = React.createRef();
    // this.divRef3 = React.createRef();
    // this.divRef4 = React.createRef();
    this.sideBar = React.createRef();

    //menu expanding effect
    this.logoBackground = React.createRef();
    //svgrefs
    this.triangles = React.createRef();
    //lottieRef
    this.lottieContainer = React.createRef();

    //DEMO re = React.createRef();
    this.techSVG = React.createRef();
    this.svgDivRef = React.createRef();
    this.state = {
      barIndex: -1,
      idle: true,
    }
  }

  componentWillUnmount() {
    // animaet with scroll
     //window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {

    //lottie Test
    //this.lottieInit();


    // Animate with scroll
    //window.addEventListener('scroll', this.handleScroll, { passive: true })
    // this.tl.to(this.divRef.current, 2, {x: 300, ease: Expo.easeIn});


    // Triangles rotate. consider replace it with Lottie
    // const triangles = this.triangles.current.children;
    // for (let i = 0; i < triangles.length; i++) {
    //   TweenMax.to(triangles[i],  Math.random() * 2 + 30, {rotation: 360, repeat: -1, ease:Power0.easeNone, transformOrigin: '50% 50%'})
    // }
    //TweenMax.to(triangles, 5, {bezier:[{x:100, y:250}, {x:300, y:0}, {x:500, y:400}], repeat:-1})

    this.highlightBar(0);


  }



  handleScroll = (event) => {
      // Animate with Scroll
      let totalScroll = this.pageRef.current.clientHeight - window.innerHeight;
      let scrollProgress = window.scrollY / totalScroll;
      this.tl.progress(scrollProgress);
  }


  renderAnimateScroll = () => {
    return (
      <div className='animate'>
        <div className='test' ref={this.divRef}>
        </div>
      </div>
    )
  }

  renderTechDiv = () => {
    return(
      <React.Fragment>
        <div className='div-1' ref={this.divRef1} onClick={() => this.divOnFocus(this.divRef1)}/>
        <div className='div-2' ref={this.divRef2} onClick={() => this.divOnFocus(this.divRef2)}/>
        <div className='div-3' ref={this.divRef3} onClick={() => this.divOnFocus(this.divRef3)}/>
      </React.Fragment>
    )
  }

  divOnFocus = (ref) => {
    let refs = [this.divRef1.current, this.divRef2.current, this.divRef3.current];
    let otherRefs = refs.filter(el => el !== ref.current);
    TweenMax.to(otherRefs, 0.5, {width: '15%', ease: Expo.easeInOut});
    TweenMax.to(ref.current, 0.5, {width: '70%', ease: Expo.easeInOut});
  }

  //Logo expand need to happen at route level, and
  //there need to be a designated layer for background.
  //todo:
  //Try implement this with a left menu component and have it
  //Animate with different layers and zIndex
  logoExpand = (ref) => {
    let tl = new TimelineMax();
    tl.to(ref.current, 0.5, {scale: 100, ease:Expo.easeIn});
    tl.to(ref.current, 0.5, {zIndex: -3, ease:Expo.easeIn});
  }

  //wheel event
  wheel = (event) => {
    //console.log(event.deltaY);
  }


  rotateTriangles = () => {
    const triangles = this.triangles.current.children;
    TweenMax.to(triangles, 3, {rotation:360, transformOrigin:"50% 50%"})
  }

  renderLottieContainer = () => {
    return (
      <div className='lottie-div' ref={this.lottieContainer}>
      </div>
    )
  }

  lottieInit = () => {
    let anim = lottie.loadAnimation({
      container: this.lottieContainer.current, // the dom element that will contain the animation
      animationData: testJSON,
      renderer: 'svg',
      autoplay: false,
    });

    this.anim = anim;
    this.anim.addEventListener('DOMLoaded', () => {
      this.tl.to(
        {frame: 0}, 2,
        {frame: anim.totalFrames-1, onUpdate:this.applyValue, onUpdateParams:["{self}"]},
      );
    })
  }

  applyValue = (tween) => {
    this.anim.goToAndStop(tween.target.frame, true)
  }

  highlightBar = (index) => {
    console.log(index);
    this.setState({barIndex: index})
    for (let i = 0; i < 5; i++) {
      let scaleFactor = 1.3 - 0.25 * Math.abs(index - i);
      let yOffset = (-5 * 0.25 * (index - i)**2) * (i - 2);
      TweenMax.to(this.sideBar.current.children[i], 0.2, {scale:scaleFactor, transformOrigin: '10% 50%', y: yOffset})
      TweenMax.set(this.sideBar.current.children[i], {webkitFilter:"blur(" + Math.abs(index - i) + "px)"});
    }
  }

  resetBar = () => {
    this.setState({barIndex: 0, idle: true})
    for (let i = 0; i < 5; i++) {
      TweenMax.to(this.sideBar.current.children[i], 0.2, {scale:1, y: 0, transformOrigin: '10% 50%'})
      TweenMax.set(this.sideBar.current.children[i], {webkitFilter:"blur(0px)"});
    }
  }

  renderBack = () => {
    const { barIndex } = this.state;
    switch (barIndex) {
      case 0:
        return(
          <HomeCore jsonData={Dots}/>
        )
        break;
      case 1:
        return(
          <HomeTech />
        )
        break;
      case 2:
        return(
          <HomeCore jsonData={Info}/>
        )
        break;
      case 3:
        return(
          <HomeCore jsonData={NewsJSON}/>
        )
        break;
      case 4:
        return(
          <HomeCore jsonData={Skipping}/>
        )
        break;
    }
  }



  render() {
    const { barIndex } = this.state;
    return(
      <div className='AnimationTest' ref={this.pageRef} onWheel = {(e) => this.wheel(e)}>
        <div className='side-bar' ref={this.sideBar}>
          <div className={cx('bar', barIndex == 0 ? 'selected':'')} onMouseEnter={() => {this.highlightBar(0); this.setState({idle: false})}}>
            <div className={'logo-div'}>
              <img src={homePNG} />
            </div>
            <p className={'bar-text'}> Home </p>
          </div>
          <div className={cx('bar', barIndex == 1 ? 'selected':'')} onMouseEnter={() => {this.highlightBar(1); this.setState({idle: false})}}>
            <div className='logo-div'>
              <img src={techPNG} />
            </div>
            <p className={'bar-text'}> Technology </p>
          </div>
          <div className={cx('bar', barIndex == 2 ? 'selected':'')} onMouseEnter={() => {this.highlightBar(2); this.setState({idle: false})}}>
            <div className='logo-div'>
              <img src={solPNG} />
            </div>
            <p className={'bar-text'}> Solution </p>
          </div>
          <div className={cx('bar', barIndex == 3 ? 'selected':'')} onMouseEnter={() => {this.highlightBar(3); this.setState({idle: false})}}>
            <div className='logo-div'>
              <img src={aboutPNG} />
            </div>
            <p className={'bar-text'}> About </p>
          </div>
          <div className={cx('bar', barIndex == 4 ? 'selected':'')} onMouseEnter={() => {this.highlightBar(4); this.setState({idle: false})}}>
            <div className='logo-div'>
              <img src={hirePNG} />
            </div>
            <p className={'bar-text'}> We are Hiring! </p>
          </div>
        </div>
        <div className='content'>
           <div className='svgback-div'>
            {
              this.renderBack()
            }
            </div>
        </div>
      </div>
    )
  }
}
