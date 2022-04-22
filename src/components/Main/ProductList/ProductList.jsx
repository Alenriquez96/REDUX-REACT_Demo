import React, { Component } from 'react'
import ProductItem from './ProductItem'
import dataCakes from './cakes.json'

export class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cakes: dataCakes, //[] de cakes de la "bbdd"
      lastCake: {}
    }
  }

  addCake = (event) => {
    //const price = prompt("introduce precio");
    //const name = prompt("introduce tipo de tarta");
    //alert(`has añadido: ${name} ${price}€`)

    event.preventDefault();

    const name = event.target.cake.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    
    const newCake = {price,name,image};
    
    // añadir al estado lastCake el último Cake
    this.setState({lastCake:newCake});

    //Añadir al estado cakes el nuevo Cake
    this.setState({cakes:[...this.state.cakes,newCake]});
  }

  paintCakes = () => this.state.cakes.map((cake,i)=> <ProductItem data={cake} key={i} remove={()=>this.removeCake(i)}/>)

  removeAllCakes = () => this.setState({cakes:[]});

  resetCakes = () => this.setState({cakes:dataCakes});

  removeCake = (i) => {
    const remainingCakes = this.state.cakes.filter((cake,j)=>i!==j);
    this.setState({cakes:remainingCakes});
  }
  
  render() {
    //let cakes = this.state.cakes;
    let {name,price} = this.state.lastCake;
    return (
      <div>

        <h1>Añadir nuevo cake</h1>

        <form onSubmit={this.addCake}>
          <label htmlFor="cake">Nombre tarta:</label><br/>
          <input type="text" id="cake" name="cake"/><br/>
          <label htmlFor="price">Precio:</label><br/>
          <input type="text" id="price" name="price"/><br/>
          <label htmlFor="image">URL imágen:</label><br/>
          <input type="url" id="image" name="image"/><br/>
          <input type="submit" value="Enviar"/>
        </form>

        {this.paintCakes()}
        
        <button onClick={this.addCake}>Clicka y añade tarta</button>
        <button onClick={this.removeAllCakes}>Borrar tartas</button>
        <button onClick={this.resetCakes}>Recarga tartas</button>
        
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