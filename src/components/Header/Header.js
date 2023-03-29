import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

function Header(props,isLoggedIn) {

function renderLoggedNavlink(){
    //let isLoggedIn = localStorage.getItem('isLoggedIn')
    //if(isLoggedIn && isLoggedIn == "true"){
        return(
            <Fragment>
                <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                                                          aria-hidden="true" />Cart {props.cartLength ? `(${props.cartLength})`: ''}</NavLink>
                        </li>
                {/* <li className="nav-item">
                            <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/login"}>Logout</NavLink>
                        </li> */}
            </Fragment>
        )
   // }
}
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                <div>
                    <ul className="navbar-nav ml-auto">
                        {renderLoggedNavlink()}
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);


/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */