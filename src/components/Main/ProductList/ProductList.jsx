import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cakes: [
        { name: "limón", price: 5 },
        { name: "queso", price: 3, company: "Eseqesite SL" },
        { name: "chocolate", price: 4, company: "Sargento del queso SA" }
      ],
      lastCake: {}
    }
  }

  addCake = () => {
    const price = prompt("introduce precio");
    const name = prompt("introduce tipo de tarta");
    //alert(`has añadido: ${name} ${price}€`)
    
    // añadir al estado lastCake el último Cake
    const newCake = {price,name};
    this.setState({lastCake:newCake});
  }

  render() {
    let cakes = this.state.cakes;
    let {name,price} = this.state.lastCake;
    return (
      <div>
        <ProductItem data={cakes[0]} />
        <ProductItem data={cakes[1]} />
        <ProductItem data={cakes[2]} />
        <button onClick={this.addCake}>Clicka y añade tarta</button>
        {
          name&&price?
            <p>Última tarta añadida:{name} Precio:{price}€</p>
          :""
        }
      </div>      
    )
  }
}

export default ProductList