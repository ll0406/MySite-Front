import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TweenMax, TimelineMax } from "gsap";
import cx from 'classnames';
import './BlogRow.scss';

class BlogRow extends Component {
  constructor() {
    super();
    this.groupRef = React.createRef();
  }

  componentDidMount() {
    TweenMax.staggerFrom(this.groupRef.current.children, 0.8, {x: 50, autoAlpha: 0}, 0.2);
    ///console.log("LOADED")
  }

  render() {
    const { data } = this.props;
    return (
        <div className='BlogRow'>
          <div className='display-div' ref={this.groupRef}>
          {
              data.map((datum, i) => {
                return (
                  <div className={cx('single-blog', (i+1)%3 === 0 ? 'tail':null)} key={i} onClick={() => {this.props.history.push(`/blog/${datum.id}`)}}>
                      <h1> <span style={{color: '#990000'}}> {datum.date} </span> &#8194; {datum.title} </h1>
                      <div className='split-div' />
                      <p> {datum.summary} </p>
                  </div>
                )
              })
          }
          </div>
        </div>
    )
  }
}

export default withRouter(BlogRow);
