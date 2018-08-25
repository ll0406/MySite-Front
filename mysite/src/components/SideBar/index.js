import React, { Component } from 'react';
import { TweenMax, Linear, TimelineMax, Expo } from "gsap";
import './SideBar.scss';
import Phone from './assets/phone.png';
import { withRouter } from "react-router-dom";

class SideBar extends Component {
  constructor() {
    super();
    this.phoneBackRef = React.createRef();
    this.sideBarRef = React.createRef();
  }

  logoExpand = (ref) => {
    setTimeout(()=>this.props.history.push('about'), 700)
    let tl = new TimelineMax();
    tl.to(ref.current, 0.8, {scale: 100, ease:Expo.easeIn});
    //tl.to(this.sideBarRef.current, 0.5, {zIndex: -1, ease:Expo.easeIn});
    //tl.eventCallback("onComplete", ()=>{this.props.history.push('about')})
  }

  render() {
    return(
      <div className='SideBar' ref={this.sideBarRef}>
        <div className='png-div' onClick={() => this.logoExpand(this.phoneBackRef)}>
          <div className='png-background' ref={this.phoneBackRef}/>
          <img src={Phone} alt={'phone'} />
        </div>
      </div>
    )
  }
}

export default withRouter(SideBar);
