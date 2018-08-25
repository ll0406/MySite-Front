import { INVALIDATE_USER, WATCH_WELCOME } from '../actionTypes';

export const watchWelcome = () => dispatch => {
  dispatch({type: WATCH_WELCOME});
}
