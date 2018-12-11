import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';


import './Dashboard.css';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
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
                        <a className="btn btn-danger" href="/checkout">Checkout</a>
                    </div>

                </div>
            );
        }   
    }
    
    renderProducts(){
        return this.props.products.map(product => {
            return (
                <Product product={product}  key={product.product_id}/>

                // <div key={product.product_id} className="d-flex flex-column product m-4 p-2">
                
                //     <div className="product-image-container d-flex justify-content-center align-items-center">
                //         <img src={product.product_img} alt={product.product_name} />
                //     </div>
                //     <label className="product-name ml-2">{product.product_name}</label>
                //     <div className="d-flex flex-row">
                //         <label>PRICE: {product.product_price}</label>
                //         <button className="ml-auto btn btn-primary add-btn" style={{"width":"80px","height":"40px"}}> Add</button>
                //     </div>
                // </div>
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