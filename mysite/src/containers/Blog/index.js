import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { TweenMax, TimelineMax } from "gsap";
import LazyLoad from 'react-lazyload';

import BlogRow from '../../components/BlogRow';
import './Blog.scss';
import { getQuote, getBlog } from '../../actions/blog.actions';



/*
// TODO:
- Connect to Redux state and get a new quote every day and reuse it: DONE
- react-lazyload to load blog posts:
- build my own blog posts component:
*/



const mapStateToProps = (state) => ({
    date: state.blogReducer.date,
    quote: state.blogReducer.quote,
    blogs: state.blogReducer.blogs,
});

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      blogs: [],
    }

    this.titleQuoteRef = React.createRef();
  }



  componentDidMount() {

    if (this.props.quote === null || this.props.date === null || this.props.date !== new Date().toDateString()) {
      this.props.dispatch(getQuote());
    } else {
      this.setState({quote: this.props.quote}, () => {
        let tl = new TimelineMax();
        // targets[0] is <Blog /> and targets[1] is quote div
        let targets = this.titleQuoteRef.current.children
        tl.staggerFrom(targets, 1.0, {x:-50, autoAlpha:0}, 0.5);
      });
    }


    this.props.dispatch(getBlog());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quote !== this.props.quote) {
        this.setState({quote: nextProps.quote}, () => {

        });
    }

    if (nextProps.blogs !== null) {
      let rawList = nextProps.blogs;
      let groupedList = [];
      for (let i = 0; i < rawList.length; i+=3) {
        let group = [];
        group.push(rawList[i])
        if (i+2 < rawList.length) {
          group.push(rawList[i+1]);
          group.push(rawList[i+2]);
        } else if ( i+1 < rawList.length) {
          group.push(rawList[i+1]);
        }
        groupedList.push(group);
      }
      this.setState({blogs: groupedList})
    }

  }

  render() {
    const { quote, blogs } = this.state;
    return(
      <div className='Blog'>
        <div className='content'>
          <div className='title-quote-div' ref={this.titleQuoteRef}>
            <div className='title-div'>
              <h1> &#60; Blog /&#62; </h1>
            </div>
            <div className='quote-div'>
              <div className='quote-text'>
                <h2 className='quote'> {quote.quote} </h2>
                <h2 className='author'> &#8212; {quote.author} </h2>
              </div>
            </div>
          </div>
          <div className='blog-div'>
            { blogs !== null &&
                blogs.map((blogGroup, i) => {
                  return (
                    <LazyLoad offset={-100} height={300} once key={i}>
                      <BlogRow data={blogGroup}/>
                    </LazyLoad>
                  )
                })
            }
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(withRouter(Blog));
