import React, {useState} from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../utils/priceFormatter";
import './CartItem.scss';
import {removeProductToCart} from "../../actions";

const CartItem = (
    {
        title,
        price,
        description,
        quantity,
        id,
        img,
        dispatch
    }
) => {

    console.log(id);
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const removeItem = () => {
        dispatch(removeProductToCart(id));
    };

  


    return (
        <div className="row align-items-center mb-3">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <img className="img-responsive" src={img} style={{height: '60%', width: '60%'}} alt={description}
                      />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h4 className="product-name"><strong>{(title)}</strong></h4>
                <h4>
                    <small className="product-description">{description}</small>
                </h4>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                <div className="col-6 col-sm-6 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                    <h6><strong>{formatMoney(price)} <span className="text-muted">x</span></strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    
                </div>
                <div className="col-2 col-sm-2 col-md-1">
                    <button
                        onClick={removeItem}
                        type="button" className="btn btn-outline-danger btn-xs delete-btn">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default connect()(CartItem);
