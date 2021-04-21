import React, { Component } from 'react';
import config from '../config';
import Product from './product';


class ProductList extends Component {
  state = { 
    productList: [],
    productListBackup: [],
    filterText: ""
  }

  componentDidMount(){
    this.setState({ 
      productList: config,
      productListBackup: config
     });     
  }

  _handleOnChange = (value)=>{
    const { productListBackup } = this.state;    
    this.setState({ filterText: value},()=>{      
      if(this.state.filterText.trim().length){
        this._filterProducts();
      } else{
        this.setState({ productList: productListBackup });
      }
    });    
  }

  _filterProducts = ()=>{
    const { productListBackup, filterText } = this.state;
    const filteredList = productListBackup.filter((each)=>{
      return (
        each.title.toLowerCase().includes(filterText.toLowerCase()) ||
        each.description.toLowerCase().includes(filterText.toLowerCase()) ||
        each.type.toLowerCase().includes(filterText.toLowerCase())
      );
    })
    this.setState({ productList: filteredList });
  }

  render() { 
    const { productList, filterText } = this.state;
    
    return ( <div className="product-list">
      <div className="filter-wrap">
        <input className="form-control" placeholder="Search Here.." type="text" value={filterText} onChange={(e)=>this._handleOnChange(e.target.value)}/>
      </div>
      <div>
        {React.Children.toArray(productList.map((each)=>
          <Product product={each}></Product>
        ))}
      </div>
      {productList.length===0 && <div>No such produts found!</div>}
    </div> );
  }
}
 
export default ProductList;