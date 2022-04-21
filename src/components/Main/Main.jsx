import React, { Component } from 'react'
import ProductList from './ProductList'

export class Main extends Component {
  render() {
    return (
      <main>
          <h1>Futura web - Exploding Cakes</h1>
          <p>Esto es el Main</p>
          <ProductList/>
        </main>
    )
  }
}

export default Main

