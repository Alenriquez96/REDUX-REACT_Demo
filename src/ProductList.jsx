import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  render() {
    return (
      <div>
          <ProductItem name="limón" price="5"/>
          <ProductItem name="queso" price="3"/>
          <ProductItem name="chocolate" price="4"/>
        </div>
    )
  }
}

export default ProductList