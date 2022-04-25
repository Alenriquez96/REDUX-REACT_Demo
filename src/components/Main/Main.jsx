import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './ProductList'
import Chefs from './Chefs'
export class Main extends Component {
  render() {
    return (
      <main>
          <h1>Futura web - Exploding Cakes</h1>
          <p>Esto es el Main</p>
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/listachefs' element={ <Chefs/>}/>
          </Routes>
        </main>
    )
  }
}

export default Main

