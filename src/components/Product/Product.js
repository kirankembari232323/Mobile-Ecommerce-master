import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../utils/priceFormatter";

import './Product.scss';
import {addProductToCart} from "../../actions";


const Product = (props) => {

    const {
        title,
        price,
        images,
        description,
        id,
    } = props.product;

    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    const [aItem, setAItem] = useState(0);

    return (
        <div className="card h-100 product">
            <Link to={`/products/${id}`} className="product__link"><img
               
                className="card-img-top product__img" src={img} alt={title} ref={imageRef}/>
                
            </Link>
            <div className="card-body product__text">
                <h4 className="card-title product__title">
                    <Link to={`/products/${id}`}>{title}</Link>
                </h4>
                <h5 className="product__price">₹{formatMoney(price)}</h5>
                <p className="card-text product__description">{description}</p>
                <button
                    onClick={() => {
                        props.dispatch(addProductToCart({...props.product}))
                    }}
                    className="btn btn-info product__add-to-cart">Add to cart
                </button>
            </div>
        </div>
    );
};

export default connect()(Product);

