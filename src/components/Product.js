import React, { Component } from 'react';
import './Product.css';

class Product extends Component{

    render(){
        return(
            <div key={this.props.product.product_id} className="d-flex flex-column product m-4 p-2">
                
                <div className="product-image-container d-flex justify-content-center align-items-center">
                    <img src={this.props.product.product_img} alt={this.props.product.product_name} />
                </div>
                <label className="product-name ml-2">{this.props.product.product_name}</label>
                <div className="d-flex flex-row">
                    <label>PRICE: {this.props.product.product_price}</label>
                    <button className="ml-auto btn btn-primary add-btn" style={{"width":"80px","height":"40px"}}> Add</button>
                </div>
            </div>
        );
    }
}

export default Product;