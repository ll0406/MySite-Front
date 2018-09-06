import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { Helmet } from "react-helmet";
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Site</title>
                </Helmet>
                  <Header />
                  <Route path="/" component={AppRoutes} />
                </div>
              </Router>
        </PersistGate>
    </Provider>
);




export default App;
