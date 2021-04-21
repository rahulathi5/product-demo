import React, { Component } from 'react';
import ProductDetailsModal from './product-details-modal';

class Product extends Component {
  state = { 
    productModal:{
      isOpen: false,
      data: null
    }

  }

  _openProductDetails = ()=>{
    const { productModal } = this.state;
    productModal.isOpen = true;
    productModal.data = this.props.product;
    this.setState({ productModal });
  }

  _closeProductModal = ()=>{
    const { productModal } = this.state;
    productModal.isOpen = false;
    productModal.data = null;
    this.setState({ productModal });
  }

  render() { 
    const { product } = this.props;      
    return (
      <div className="card" onClick={()=>this._openProductDetails()}>
        <img src={require("../assets/fast-food.png").default} alt="product-img" style={{width:100}}/>
        <div className="container">
          <h5><b>{product.title}</b></h5>           
          <p>{product.description}</p>           
        </div>
        <ProductDetailsModal 
          isOpen={this.state.productModal.isOpen}
          data={this.state.productModal.data}
          toggle={this._closeProductModal}
        ></ProductDetailsModal>
      </div>
    );
  }
}
 
export default Product;