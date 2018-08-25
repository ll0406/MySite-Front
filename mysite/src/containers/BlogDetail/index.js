import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TweenMax, Linear, TimelineMax, Expo } from "gsap";
import axios from 'axios';

import './BlogDetail.scss';

class BlogDetail extends Component {
  constructor() {
    super();
    this.state = {
      datum: null,
      date: '',
    }

    this.titleSummaryRef = React.createRef();
    this.pageRef = React.createRef();

  }

  animateEnter = () => {
    let tl = new TimelineMax();
    tl.add(TweenMax.from())
  }

  componentDidMount() {
    axios.get(`http://django-env.hfmmi3iqww.us-east-1.elasticbeanstalk.com/blogs/${this.props.match.params.id}/`)
        .then(res => {
          let datum = res.data;
          let dateArray = new Date(datum.created).toDateString().split(' ');
          let date = dateArray[1] + ' ' + dateArray[2];
          this.setState({
            datum,
            date
          }, () => {
            TweenMax.staggerFrom(this.pageRef.current.children, 0.5, {x:100, autoAlpha:0}, 0.2);
          })
        })

  }

  render() {
    const { datum, date } = this.state;

    if (datum === null) {
      return (
        <div className='BlogDetail' />
      )
    }

    return(
      <div className='BlogDetail' ref={this.pageRef}>
        <div className='title-summary' ref={this.titleSummaryRef}>
          <h1> <span style={{color: '#990000'}}> {date} </span> &#8194; {datum.title} </h1>
          <div className='split-div' />
          <p> {datum.summary} </p>
        </div>

        {
          datum.image !== null &&
            <div className='blog-image-div'>
              <img src={datum.image} />
            </div>
        }
        <div className='content'>
          <p> {datum.content} </p>
        </div>
      </div>
    )
  }
}

export default BlogDetail;
