import { GET_QUOTE, RECEIVE_BLOG } from '../actionTypes';
import axios from 'axios';

export const getQuote = () => dispatch => {
  axios.get(`https://talaikis.com/api/quotes/random/`)
      .then(res => {
        dispatch({type: GET_QUOTE, payload: res.data});
      })
}

export const getBlog = () => dispatch => {
  axios.get(`https://api.liliu.me/blogs/?format=json`)
      .then(res => {
        console.log(res.data);
        let data = res.data.map((datum) => {
          let dateArray = new Date(datum.created).toDateString().split(' ');
          let date = dateArray[1] + ' ' + dateArray[2];
          return ({
            url: datum.url,
            owner: datum.owner,
            title: datum.title,
            summary: datum.summary,
            imgUrl: datum.image,
            date: date,
            id: datum.id,
          })
        })
        console.log(data);
        dispatch({type: RECEIVE_BLOG, payload: data});
      })
}
