import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Use to persist the redux state
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
    let persistor = persistStore(store);
    return { store, persistor }
}
