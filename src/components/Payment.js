import React, { Component } from 'react';
import  { connect } from 'react-redux';
import './Payment.css';

class Payment extends Component{

    getCartValiue(){
        var cart_value =0;
        this.props.cart_products.forEach(function(product) {
            cart_value += parseInt(product.product_price);
        });
        return (cart_value);
    }

    productList(){
        return this.props.cart_products.map(product => {
            return (
                <li className="d-flex flex-row product-list-item  mt-2 py-2 align-items-center" key={product.product_id}>

                    <label className="product-item-name ml-2">{product.product_name}</label>
                    <div className="product-item-image-container d-flex justify-content-center align-items-center">
                        <img src={product.product_img} alt={product.product_name} />
                    </div>
                    <div className="d-flex flex-row">
                        <label>
                            <i className=" ml-2 fa fa-rupee"></i>
                            <span className="font-weight-bold">{product.product_price}</span>
                        </label>
                    </div>
                </li>
            );
        });

    }

    render(){
        return(
            <div  className="container-fluid d-flex flex-column  ">
                <div>
                    <h3 className="payment-header mt-3 mb-2">Checkout</h3>
                </div>
                <div>
                    <ul className="product-list">
                        {this.productList()}
                        <span className="font-weight-bold mt-3 float-right">Total Cart Value: {this.getCartValiue()}</span>
                    </ul>
                </div>
                <div>
                
                    
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { cart_products : state.cart_products};
}

export default connect(mapStateToProps)(Payment);