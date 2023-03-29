import React, { Component } from 'react';
import  { Fragment, lazy, Suspense } from "react";
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";



export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      // 
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
            <Suspense >
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/login'}/>
                    }}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/products'} component={Home}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact patr={'/cart'} component={ShoppingCart}/>
                </Switch>
                </Suspense>
            </React.Fragment>
            </BrowserRouter>
            <Footer/>

        </Provider>
        
    );
  }
}

export default App;
