import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import {NavLink} from 'react-router-dom';

const ProductDetail = (props) => {

    console.log(props);

    return (
        <Fragment>
        <div className="container" style={{padding: '6rem 0'}}>
            
            <div className="">
              <NavLink className="nav-link" to={"/products"}><span className="right-icon"><i class="fa fa-arrow-left"></i></span>Go To productList</NavLink>
            </div>
               
            <div className="card">
                <div className="row">
                    <ProductSlider images={props.product.images}/>
                    <ProductDetailComponent product={props.product}/>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

const mapStateToProps = (state, props) =>  {

    const product = state.shop.products.find(product => product.id === +props.match.params.id);

    return {
        product
    }
};



export default connect(mapStateToProps, null)(ProductDetail);
