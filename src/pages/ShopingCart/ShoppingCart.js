import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../utils/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import {NavLink} from 'react-router-dom';

const ShoppingCart = (props) => {
   function proceedToBuy(){
         /// code for checkout page
         alert("Sorry, Currently Payment getway is not integrated.")
            }

    function  renderByeButton(){
        let isLoggedIn = localStorage.getItem('isLoggedIn')
        if(isLoggedIn && isLoggedIn == "true" &&(props.totalPrice>0)){
          return (
            <button
            onClick={proceedToBuy}
            type="button" className="btn btn-outline-primary btn-xs buy-btn">
            Proceed To Buy
        </button>
          )
        }
    }

    function  renderLogoutButton(){
        let isLoggedIn = localStorage.getItem('isLoggedIn')
        if(isLoggedIn && isLoggedIn == "true"){
          return (
            <div className="logout-button">
            <NavLink className="nav-link" to={"/login"}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</NavLink>
         </div>
          )
        }
    }

    function  renderBackButton(){
        let isLoggedIn = localStorage.getItem('isLoggedIn')
        if(isLoggedIn && isLoggedIn == "true"){
          return (
            <div className="">
                    <NavLink className="nav-link" to={"/products"}><span className="right-icon"><i class="fa fa-arrow-left"></i></span>Go To productList</NavLink>
         </div>
          )
        }
    }
    return (
         <Fragment>
                {renderLogoutButton()}
                <div className="container" style={{paddingTop: '6rem'}}>
                  {renderBackButton()}
                    <div className="card shopping-cart">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Shipping cart
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {props.cartItemCount ? props.cartItems.map(cart => (
                                <CartItem {...cart} img={cart.images[0]} />
                            )) : <h1 className="display-4 mt-5 text-center">There is no product in your cart</h1> }
                        </div>
                        <div className="card-footer">
                            <div className="pull-right" style={{margin: '10px'}}>
                                <div className="pull-right" style={{margin: '5px'}}>
                                    Total price: <b>{formatMoney(props.totalPrice)}</b>
                                </div>
                                <div>
                                {renderByeButton()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fragment>
                    );
};


const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
