import React, { Component } from 'react'
// import ProductList from './ProductList'
import Chefs from './Chefs'
export class Main extends Component {
  render() {
    return (
      <main>
          <h1>Futura web - Exploding Cakes</h1>
          <p>Esto es el Main</p>
          {/* <ProductList/> */}
          <Chefs/>
        </main>
    )
  }
}

export default Main

