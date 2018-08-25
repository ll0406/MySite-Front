import { GET_QUOTE, RECEIVE_BLOG } from '../actionTypes';

const initialState = {
    quote: null,
    date: null,
    blogs: null,
};

function blogReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    const { type, payload, error } = action;

    switch (type) {
        case GET_QUOTE:
            newState.quote = payload;
            newState.date = new Date().toDateString();
            break;
        case RECEIVE_BLOG:
            newState.blogs = payload;
            break;
        case 'persist/REHYDRATE':
            if (payload !== undefined && payload !== null) {
                newState = payload.blogReducer;
            }
    }
    return newState;
}

export default blogReducer;
