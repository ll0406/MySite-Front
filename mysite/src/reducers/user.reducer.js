import { INVALIDATE_USER, WATCH_WELCOME } from '../actionTypes';

const initialState={
    firstVisit: true,
    isFetching: false,
    user: undefined,
    isLoggedIn: false,
    userDetail: {

    },
};

function userReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    const { type, payload, error } = action;

    switch (type) {
        case WATCH_WELCOME:
            newState.firstVisit = false;
            break;
        case INVALIDATE_USER:
            newState = initialState;
            break;
        case 'persist/REHYDRATE':
            if (payload !== undefined && payload !== null) {
                newState = payload.userReducer;
                //newState.firstVisit = true;
            }

    }
    return newState;
}

export default userReducer;
