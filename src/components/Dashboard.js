import React, { Component } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import productData from './products_data.json';

import './Dashboard.css';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            products : productData.products
            // cart_value: this.props.product
        };
    }

    renderCartDetails(){
        if(this.props.cart_products.length>0){
            var cart_value =0;
            this.props.cart_products.forEach(function(product) {
                cart_value += parseInt(product.product_price);
            });
            return(
                <div className="cart-details d-flex flex-row mt-2">
                    <div className="ml-auto d-flex align-items-center mr-2">
                        <span className="font-weight-bold">Total Price :</span>
                        <span className="font-weight-bold">{cart_value}</span>
                    </div>
                    <div className="mr-3">
                        {/* <a className="btn btn-danger" href="/payment">Checkout</a> */}
                        <Link className="btn btn-danger" to="/payment">Checkout</Link>
                    </div>

                </div>
            );
        }   
    }
    
    renderProducts(){
        return this.state.products.map(product => {
            return (
                <Product product={product}  key={product.product_id}/>
            );
        });
    }

    render(){
        return(
            <div className="dashboard">
               {this.renderCartDetails()}

                <div className="container-fluid d-flex flex-row product-container">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { cart_products : state.cart_products};
}

export default connect(mapStateToProps)(Dashboard);