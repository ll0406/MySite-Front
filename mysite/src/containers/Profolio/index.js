import React, { Component } from 'react';
import cx from 'classnames';
import { TweenMax, TimelineMax, Expo, Linear } from "gsap";
import CSSPlugin from 'gsap/src/uncompressed/plugins/CSSPlugin';

import './Profolio.scss';

/*
Todo:
Profolio card: hover show info, and dim backgroundC
Also add bottom carousel

*/

const FAKEPROFO = [
  {
    imgUrl: 'https://media.istockphoto.com/photos/christmas-lights-defocused-background-bokeh-gold-blue-picture-id619377088?k=6&m=619377088&s=612x612&w=0&h=Xz7OHZ-_argQGe0ezQqLOqCfuSekuURrGAmJKrvHfWU=',
    title: 'Profolio1',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imgUrl: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350',
    title: 'Profolio2',
    summary: 'Lorem ipsum dolor sit amet, c sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imgUrl: 'http://interfacelift.com/wallpaper/previews/02105_blueforest_672x420.jpg',
    title: 'Profolio3',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f6908fa5e81286213c7211276e6b3d&w=1000&q=80',
    title: 'Profolio4',
    summary: 'Lorem ipsum dolor sit amet, consectetur adiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },

]

class Profolio extends Component {
  constructor() {
    super();
    this.leftCard = React.createRef();
    this.midCard = React.createRef();
    this.rightCard = React.createRef();

    this.state = {
      midIndex: 0,
      currentLen: FAKEPROFO.length,
      inTransition: false,
    }
  }

  forward = () => {
    if (!this.state.inTransition) {
      this.setState({midIndex: this.state.midIndex + 1, inTransition: true}, () => {
        let tl = new TimelineMax();
        tl.from(this.leftCard.current, 0.5, { x:400, y:-20, opacity: 1});
        tl.from(this.midCard.current, 0.5, { x: 400, y:20}, "-=0.5");
        tl.eventCallback("onComplete", () => { this.setState({inTransition: false}) });
      })
    }
  }

  backward = () => {
    if (!this.state.inTransition) {
      this.setState({midIndex: this.state.midIndex - 1, inTransition: true}, () => {
        let tl = new TimelineMax();
        tl.from(this.rightCard.current, 0.5, {x: -400, y: -20, opacity: 1});
        tl.from(this.midCard.current, 0.5, {x: -400, y:20},  "-=0.5");
        tl.eventCallback("onComplete", () => { this.setState({inTransition: false}) });
      })
    }
  }



  render() {

    const { midIndex, currentLen } = this.state;

    return(
      <div className='Profolio'>
       <div className='content'>
        <div className='profolio-card-area'>
        {
          midIndex > 0 &&
            <div className={cx('card','left')} ref={this.leftCard} onClick={this.backward}>
              <img className='card-img' src={FAKEPROFO[midIndex-1].imgUrl} alt={'card-image'} />
              <h1> {FAKEPROFO[midIndex-1].title} </h1>
              <h2> {FAKEPROFO[midIndex-1].summary} </h2>
            </div>
        }

          <div className={cx('card','mid')} ref={this.midCard}>
            <img className='card-img' src={FAKEPROFO[midIndex].imgUrl} alt={'card-image'} />
            <h1> {FAKEPROFO[midIndex].title} </h1>
            <h2> {FAKEPROFO[midIndex].summary} </h2>
          </div>
        {
          midIndex < (currentLen-1) &&
            <div className={cx('card','right')} ref={this.rightCard} onClick={this.forward}>
              <img className='card-img' src={FAKEPROFO[midIndex+1].imgUrl} alt={'card-image'} />
              <h1> {FAKEPROFO[midIndex+1].title} </h1>
              <h2> {FAKEPROFO[midIndex+1].summary} </h2>
            </div>
        }
        </div>

       </div>

      </div>
    )
  }
}

export default Profolio;
