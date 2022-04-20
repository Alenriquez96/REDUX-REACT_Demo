import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    return (
      <div>
          <h4>Tarta de {this.props.name}</h4>
          <p>Precio:{this.props.price}€</p>
      </div>
    )
  }
}

export default ProductItem