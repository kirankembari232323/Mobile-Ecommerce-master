import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "../../components/Product/Product";
import LayoutMode from "../../components/LayoutMode/LayoutMode";
import {phones} from "../../data/phones";
import {NavLink} from 'react-router-dom';


class ProductList extends Component {

    state = {
        colValue : 'col-lg-4',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3,
        products1: phones,
    };

    changeLayout = (n) => {
        this.setState({gridValue: n});

        let realGridValue;

        if(n === 4) {
            realGridValue = 3
        } else {
            realGridValue = 4;
        }

      this.setState({
          colValue: `col-lg-${realGridValue}`
      });
    };

    render() {

        let isActive = this.state.colValue[this.state.colValue.length -1];

        return (
            <div className="col-lg-12">

                <div className="row mb-3">
                    <div className="col-12 d-none d-lg-block d-xl-block">
                        <div className="card ">
                            <div className="card-header d-flex justify-content-end">
                                <span className="mr-3">Change Layout: </span>
                                <LayoutMode len={3} isActive={this.state.gridValue === 3} click={this.changeLayout} />
                                <LayoutMode len={4} isActive={this.state.gridValue === 4}  click={this.changeLayout} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {(this.state.products1).map(product =>{
                        let classes = `${this.state.colValue} col-md-6 mb-4`;
                        return (<div className={classes}>
                            <Product key={product.id} product={product} />
                        </div>)
                    })}
                </div>
                <div className="d-flex justify-content-end">
                   
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartLength: state.shop.cart.length
    }
  };
export default connect( mapStateToProps,null)(ProductList);
