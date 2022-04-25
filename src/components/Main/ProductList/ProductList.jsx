import React, { Component } from 'react'
import ProductItem from './ProductItem'
import dataCakes from './cakes.json'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

        <form onSubmit={this.addCake} className='form'>
          <TextField id="outlined-basic" label="Nombre tarta" variant="filled" name='cake'/>
          <TextField id="outlined-basic" label="Precio" variant="filled" name='price'/>
          <TextField id="outlined-basic" label="URL imagen" variant="filled" name='image'/>
          <Button variant="contained" type="submit" className="Button" sx={{margin:1}}>Guardar</Button>
        </form>

        <div className='cake-list'>
          {this.paintCakes()}
        </div>
        
        <Button variant="contained" type="submit" onClick={this.removeAllCakes} sx={{margin:1}}>Borrar tartas</Button>
        <Button variant="contained" type="submit" onClick={this.resetCakes} sx={{margin:1}}>Recarga tartas</Button>
        {/* <button onClick={this.addCake}>Clicka y añade tarta</button>
        <button onClick={this.removeAllCakes}>Borrar tartas</button>
        <button onClick={this.resetCakes}>Recarga tartas</button> */}
        
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