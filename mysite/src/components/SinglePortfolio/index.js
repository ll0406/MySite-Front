import React, { Component } from 'react';
import { TweenMax, TimelineMax } from "gsap";
import './SinglePortfolio.scss';
import cx from 'classnames';
export default class SinglePortfolio extends Component {
  constructor() {
    super();

    this.portRef = React.createRef();
  }

  componentDidMount() {
    TweenMax.staggerFrom(
      this.portRef.current.children, 1.0, { x:-50, autoAlpha:0 }, 0.2
    )
  }

  render() {
    const { portfolio } = this.props;
    return(
      <div className={cx('SinglePortfolio')} ref={this.portRef}>
        <div className='port-image-div'>
          <img src={portfolio.image} alt={'PortfolioImage'}/>
        </div>
        <div className='port-text-div'>
          <h1> {portfolio.title} </h1>
          <h2> {portfolio.summary} </h2>
          <h3> {portfolio.content} </h3>
        </div>
      </div>
    )
  }
}
