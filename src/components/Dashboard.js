import React, { Component } from 'react';
import Product from './Product';

import './Dashboard.css';

class Dashboard extends Component{
    
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
            <div className="container-fluid d-flex flex-row product-container">
                {this.renderProducts()}
            </div>
        );
    }
}

export default Dashboard;