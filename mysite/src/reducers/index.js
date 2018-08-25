import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import blogReducer from './blog.reducer';

const appReducer = combineReducers({
    userReducer,
    blogReducer,
});

export default appReducer;
