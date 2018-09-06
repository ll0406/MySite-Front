import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './HomePage.scss';
import ReactDOM from 'react-dom';
import { TweenMax, Linear, TimelineMax, Expo } from "gsap";
import TextPlugin from 'gsap/src/uncompressed/plugins/TextPlugin';
import CSSPlugin from 'gsap/src/uncompressed/plugins/CSSPlugin';
import { connect } from 'react-redux';

import mask1 from './assets/mask_1.png';
import mask2 from './assets/mask_2.png';
import mask3 from './assets/mask_3.png';
import mask4 from './assets/mask_4.png';
import mask5 from './assets/mask_5.png';
import FB from './assets/facebook.png';
import INS from './assets/instagram.png';
import IN from './assets/linkedin.png';
import SM from './assets/steam.png';

import WelcomeAnime from '../WelcomeAnime';
import Header from '../../components/Header';
import { watchWelcome } from '../../actions/user.actions';

//Provide triangle colors
const COLORS = ['#ff2400', '#D3D3D3', '	#FFFFFF'];
const ROLES = ['Software Engineer', 'Gamer', 'Gamer',
'Pianist', 'Pianist',
'Photographer', 'Photographer',
'EDM Fan', 'EDM Fan',
'Software Engineer']
const DENSITY = 80;

const mapStateToProps = (state) => ({
    firsttime: state.userReducer.firstVisit,
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.introTextRef = React.createRef();
    this.contentRef = React.createRef();
    this.introRef = React.createRef();
    this.mask1Ref = React.createRef();
    this.mask2Ref = React.createRef();
    this.mask3Ref = React.createRef();
    this.mask4Ref = React.createRef();
    this.mask5Ref = React.createRef();
    this.state = {
      welcome: false,
    }

  }


   componentDidMount() {
     const { firsttime } = this.props;
     console.log(firsttime);
     if (firsttime === true) {
       this.setState({welcome: true});
     } else {
       this.onWelcomeFinished();
     }
   }

   curtainAnime = () => {
     TweenMax.to(this.mask1Ref.current, 0.5, {width: '100%', ease: Expo.easeOut})
     TweenMax.to(this.mask1Ref.current, 0.5, {width: '0%', ease: Expo.easeIn}).delay(1)
     TweenMax.to(this.mask2Ref.current, 0.5, {width: '100%', ease: Expo.easeOut})
     TweenMax.to(this.mask2Ref.current, 0.5, {width: '0%', ease: Expo.easeIn}).delay(1.2)
     TweenMax.to(this.mask3Ref.current, 0.5, {width: '100%', ease: Expo.easeOut})
     TweenMax.to(this.mask3Ref.current, 0.5, {width: '0%', ease: Expo.easeIn}).delay(1.4)
     TweenMax.to(this.mask4Ref.current, 0.5, {width: '100%', ease: Expo.easeOut})
     TweenMax.to(this.mask4Ref.current, 0.5, {width: '0%', ease: Expo.easeIn}).delay(1.6)
     TweenMax.to(this.mask5Ref.current, 0.5, {width: '100%', ease: Expo.easeOut})
     TweenMax.to(this.mask5Ref.current, 0.5, {width: '0%', ease: Expo.easeIn}).delay(1.8)
   }

   onWelcomeFinished = () => {
     const { dispatch } = this.props;
     dispatch(watchWelcome());
     this.setState({
       welcome: false
     }, () => {
       //TweenMax.to(this.introTextRef.current, 2, {text:"This is the new text", ease:Linear.easeNone}).delay(1)
       TweenMax.from(this.contentRef.current, 2, {x: -50, ease: Expo.easeOut, opacity: 0})
       let tl = new TimelineMax({repeat: -1, delay: 2.3});
       this.curtainAnime();
       TweenMax.to(this.introRef.current, 0.5, {opacity: 1}).delay(2.3);
       ROLES.forEach((el, i) => {
         tl.to(this.introTextRef.current, 1, {text:`I am a ${el}`, ease:Linear.easeNone, delay:2});
       })

     })
   }

   revealCurtain = (ref) => {
     TweenMax.to(ref.current, 0.5, {width: '100%', ease: Expo.easeOut});
   }

   closeCurtain = (ref) => {
     TweenMax.to(ref.current, 0.5, {width: '0%', ease: Expo.easeIn});
   }

   renderCurtain = () => {
     return(
       <div className='curtain-div'>
         <div className='sub-curtain' onMouseEnter={() => this.revealCurtain(this.mask1Ref)} onMouseLeave={() => this.closeCurtain(this.mask1Ref)}>
           <div className='mask' ref={this.mask1Ref}>
             <img src={mask1} alt={'1'} />
           </div>
         </div>
         <div className='sub-curtain' onMouseEnter={() => this.revealCurtain(this.mask2Ref)} onMouseLeave={() => this.closeCurtain(this.mask2Ref)}>
           <div className='mask' ref={this.mask2Ref}>
             <img src={mask2} alt={'2'} />
           </div>
         </div>
         <div className='sub-curtain' onMouseEnter={() => this.revealCurtain(this.mask3Ref)} onMouseLeave={() => this.closeCurtain(this.mask3Ref)}>
           <div className='mask' ref={this.mask3Ref}>
             <img src={mask3} alt={'3'} />
           </div>
         </div>
         <div className='sub-curtain' onMouseEnter={() => this.revealCurtain(this.mask4Ref)} onMouseLeave={() => this.closeCurtain(this.mask4Ref)}>
           <div className='mask' ref={this.mask4Ref}>
             <img src={mask4} alt={'4'} />
           </div>
         </div>
         <div className='sub-curtain' onMouseEnter={() => this.revealCurtain(this.mask5Ref)} onMouseLeave={() => this.closeCurtain(this.mask5Ref)}>
           <div className='mask' ref={this.mask5Ref}>
             <img src={mask5} alt={'5'} />
           </div>
         </div>
       </div>
     )
   }


  render() {
    return (
      <div className="HomePage">
      {
        this.state.welcome ?
          <WelcomeAnime
            onFinished={this.onWelcomeFinished}
            />
          :
          <div className='content' ref={this.contentRef}>
            {
              this.renderCurtain()
            }

            <div className='intro-div' ref={this.introRef}>
              <h1> Hey, my name is Li Liu</h1>
              <h1 ref={this.introTextRef} className='red-text'>I am a Software Engineer</h1>
              <div className='break-div' />
              <div className='detail-intro'>
                <img src={FB} onClick={() => {window.open("https://www.facebook.com/li.liu.545", "_blank")}}/>
                <img src={INS} onClick={() => {window.open("https://www.instagram.com/liliu0406/", "_blank")}}/>
                <img src={IN} onClick={() => {window.open("https://www.linkedin.com/in/li-liu-96737113b/", "_blank")}}/>
                <img src={SM} onClick={() => {window.open("https://steamcommunity.com/profiles/76561198076365471", "_blank")}}/>
              </div>
            </div>
          </div>
      }

      </div>
    );
  }
}


export default connect(mapStateToProps)(withRouter(HomePage));
