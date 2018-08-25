import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import anime from 'animejs'; //Provide svg path animation
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax, Expo } from "gsap";
import './WelcomeAnime.scss';
import { watchWelcome } from '../../actions/user.actions';

//Provide triangle colors
const COLORS = ['#ff2400', '#D3D3D3', '	#FFFFFF'];
const DENSITY = 80;

class WelcomeAnime extends Component {
  constructor(props) {
    super(props);

    this.welcomeRef = React.createRef();
    this.pageRef = React.createRef();

    //Generate all trianlges
    let tempArray = []
    for (let i = 0; i < DENSITY; i++) {
      let newTriangle = {
        opacityEnd: Math.random(),
        rotate: Math.random() * 360,
        color: COLORS[Math.floor(Math.random()*COLORS.length)],
        reference: React.createRef(),
        yStart:  Math.random() * 400 - 200,
        yEnd: Math.random() * 400 - 200,
        scale: Math.random() * 2,
      }
      tempArray.push(newTriangle);
    }

    this.triangles = tempArray;

    this.state = {
      welcomeAnime: false,
      triAnime: true,
    }

  }

  animateTriangles = () => {
    const { triangles } = this;
    this.triangles.forEach((el, i) => {
      let tl =  new TimelineMax({delay:i*0.01});
      tl.fromTo(el.reference.current, 1,
        {y: el.yStart, x: 0, opacity: 0},
        {y: el.yEnd, x: this.pageRef.current.clientWidth/2 + (Math.random() * 200 - 100), rotation: el.rotate/2, opacity: el.opacityEnd, scale: el.scale, ease: Expo.easeOut});
      tl.to(el.reference.current, 1,
        {y: el.yStart, x: this.pageRef.current.clientWidth-80, opacity: 0, scale: 1 , ease: Expo.easeIn}
      );
    });
  }

  renderTriangles = (el, i) => {
    return (
      <svg width="50.308px" height="50.309px" viewBox="0 0 100 100" ref={el.reference} key={i}>
        <polygon points="0 0, 0 100, 100 0" fill={el.color}/>
      </svg>
    );
  }

  componentDidMount() {
    setTimeout(() => {this.welcomeAnim()}, 800)
    this.animateTriangles();
  }

  welcomeAnim = () => {
    this.setState({welcomeAnime: true}, () => {
      let timeline = anime.timeline();
      timeline
       .add({
         targets: 'path',
         strokeDashoffset: [anime.setDashoffset, 0],
         easing: 'easeInOutSine',
         duration: 1000,
         delay: function(el, i) { return i * 250 },
       })
       .add({
         offset: '+= 1000',
         targets: this.welcomeRef.current,
         translateX: 50,
         opacity: 0,
         easing: 'easeInOutQuart',
         duration: 500,
         complete: () => {
           this.setState({welcomeAnime: false});
           this.props.onFinished();
         }
       })
    })
  }

  render() {
    return (
      <div className="WelcomeAnime" ref={this.pageRef}>
        {
          this.state.triAnime &&
          <div className="triangleDiv">
            {
              this.triangles.map(this.renderTriangles)
            }
          </div>
        }
        {
          this.state.welcomeAnime &&
          <div className="svg-div">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.36 50.4" ref={this.welcomeRef}>
              <g stroke="white" stroke-width="2" fill="none">
              <path d="M0,1.15H16.27l5.54,16.78L27.36,1.15H37.87l5.54,16.78L49,1.15H65.23l-15.84,48h-12L32.62,34.63,27.79,49.18h-12ZM23,43.42l9.58-30.17,9.58,30.17H44L56,6.91H54.07L43.13,40.1,32.62,6.91,22.1,40.1,11.16,6.91H9.22l12,36.5Z" />
              <path d="M66.31,1.15h28.3v12.6h-13v5.33H94.39V31H81.65v5.54H95.11v12.6H66.31ZM89.78,43.42V41.69H75.38V25.92H89.06V24.19H75.38V8.64h14.4V6.91H73.51v36.5Z" />
              <path d="M99.43,1.15h16V36.58h13.25v12.6H99.43Zm25.2,42.26V41.69H108.5V6.91h-1.87v36.5Z" />
              <path d="M127.94,25.2a25.87,25.87,0,0,1,2-10.4,24.24,24.24,0,0,1,5.47-8,23.85,23.85,0,0,1,8.06-5.08A27.15,27.15,0,0,1,153.29,0a30.55,30.55,0,0,1,7.31.79,34.62,34.62,0,0,1,5.51,1.8,25.89,25.89,0,0,1,4.61,2.52l-7.56,13.32a25.81,25.81,0,0,0-2.52-1.66,24.37,24.37,0,0,0-2.92-1.12,12.65,12.65,0,0,0-3.85-.54,10.39,10.39,0,0,0-7.38,3,9.88,9.88,0,0,0-3,7.13,9.43,9.43,0,0,0,.83,3.92,10.08,10.08,0,0,0,2.27,3.2A10.72,10.72,0,0,0,150,34.49a11.13,11.13,0,0,0,4.25.79,13.44,13.44,0,0,0,4.1-.58,15.09,15.09,0,0,0,3-1.3,11.14,11.14,0,0,0,2.52-1.87l7.56,13.32a21.38,21.38,0,0,1-4.61,2.81,39.06,39.06,0,0,1-5.54,1.87,28.91,28.91,0,0,1-7.42.86,28.52,28.52,0,0,1-10.37-1.84,24.43,24.43,0,0,1-8.21-5.15,23.37,23.37,0,0,1-5.4-8A26.32,26.32,0,0,1,127.94,25.2Zm9.07,0a17.56,17.56,0,0,1,1.19-6.48,15.75,15.75,0,0,1,3.35-5.26,15.59,15.59,0,0,1,5.26-3.53,17.74,17.74,0,0,1,6.91-1.3,20.14,20.14,0,0,1,3.35.25,15.11,15.11,0,0,1,2.48.61,9.45,9.45,0,0,1,2.09.86l1-1.73q-1.15-.5-2.45-.94a27.51,27.51,0,0,0-2.81-.65,20.8,20.8,0,0,0-3.67-.29,19.29,19.29,0,0,0-7,1.3,18,18,0,0,0-5.9,3.71,18.18,18.18,0,0,0-5.65,13.43,18.9,18.9,0,0,0,1.48,7.63,17.19,17.19,0,0,0,4.07,5.8,18.11,18.11,0,0,0,6,3.71,20.74,20.74,0,0,0,7.34,1.3,19,19,0,0,0,3.89-.36,23.12,23.12,0,0,0,3-.79,14.45,14.45,0,0,0,2.45-1.15l-1-1.73a9.08,9.08,0,0,1-2.16,1.08,16.14,16.14,0,0,1-2.59.76,17,17,0,0,1-3.53.32,18.66,18.66,0,0,1-7.13-1.3,15.81,15.81,0,0,1-5.36-3.53,15.45,15.45,0,0,1-3.38-5.26A17.56,17.56,0,0,1,137,25.2Z" />
              <path d="M167.83,25.2a24.53,24.53,0,0,1,2-9.79A25.19,25.19,0,0,1,183.24,2a25.21,25.21,0,0,1,19.58,0,25.19,25.19,0,0,1,13.43,13.43,24.55,24.55,0,0,1,2,9.79,24.55,24.55,0,0,1-2,9.79,25.19,25.19,0,0,1-13.43,13.43,25.21,25.21,0,0,1-19.58,0A25.19,25.19,0,0,1,169.81,35,24.52,24.52,0,0,1,167.83,25.2Zm6.77,0A17.92,17.92,0,0,0,176,32.36a18.57,18.57,0,0,0,9.83,9.83,18.53,18.53,0,0,0,14.33,0A18.57,18.57,0,0,0,210,32.36,18.54,18.54,0,0,0,210,18a18.57,18.57,0,0,0-9.83-9.83,18.53,18.53,0,0,0-14.33,0A18.57,18.57,0,0,0,176,18,17.92,17.92,0,0,0,174.6,25.2ZM193,41.76a16,16,0,0,1-6.44-1.3,16.86,16.86,0,0,1-8.82-8.82,16,16,0,0,1-1.3-6.44,16,16,0,0,1,1.3-6.44,16.86,16.86,0,0,1,8.82-8.82,16.67,16.67,0,0,1,12.89,0,16.86,16.86,0,0,1,8.82,8.82,16,16,0,0,1,1.3,6.44,16,16,0,0,1-1.3,6.44,16.86,16.86,0,0,1-8.82,8.82A16,16,0,0,1,193,41.76ZM183,25.2a9.79,9.79,0,0,0,.79,3.92,10.11,10.11,0,0,0,5.36,5.36,10.12,10.12,0,0,0,7.85,0,10.11,10.11,0,0,0,5.36-5.36,10.12,10.12,0,0,0,0-7.85A10.12,10.12,0,0,0,197,15.91a10.12,10.12,0,0,0-7.85,0,10.12,10.12,0,0,0-5.36,5.36A9.79,9.79,0,0,0,183,25.2Z" />
              <path d="M222.19,1.15h12.67l12.53,18.43L259.85,1.15h12.67v48H257.18V31.9l-9.79,14.4-9.86-14.4V49.18H222.19Zm9.07,42.26v-33l16.13,23.47,16.06-23.47v33h1.87V6.91h-1.87L247.39,30.6,231.26,6.91h-1.87v36.5Z" />
              <path d="M277.56,1.15h28.3v12.6h-13v5.33h12.74V31H292.89v5.54h13.46v12.6h-28.8ZM301,43.42V41.69h-14.4V25.92h13.68V24.19H286.63V8.64H301V6.91H284.76v36.5Z" />
              </g>
            </svg>
          </div>
          }
        </div>
    )
  }


}

export default WelcomeAnime;
