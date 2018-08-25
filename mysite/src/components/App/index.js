import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './App.scss';
import configureStore from '../../configureStore';
import AppRoutes from '../AppRoutes';
import SideBar from '../SideBar';
import Header from '../Header';

const { persistor, store } = configureStore();


const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
              <Router>
                <div className='App'>
                  <Header />
                  <Route path="/" component={AppRoutes} />
                </div>
              </Router>
        </PersistGate>
    </Provider>
);




export default App;
