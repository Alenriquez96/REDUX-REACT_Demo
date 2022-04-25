import React, { Component } from "react";
import PokeList from "./PokeList";

class Chefs extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mostrar: false,
      lista: []
    }
  }

  handleShow = () => {
    this.setState({
      mostrar: !this.state.mostrar
    })
  }

  handleClick = () => {
    this.setState({
      lista: [
        {name: "Pokemon1", url: "url"},
        {name: "Pokemon2", url: "url"},
        {name: "Pokemon3", url: "url"},
        {name: "Pokemon4", url: "url"},
        {name: "Pokemon5", url: "url"}
      ]
    })
  }

  render(){
    // const lista = [{ name: 'pokeapi', ulr: 'https://pokeapi.co/' }]
      return (
          <>
            <button onClick={this.handleClick}>Carga chefs por defecto</button>
            <button onClick={this.handleShow}>{this.state.show ? 'Ocultar' : 'Mostrar'}</button>
            { this.state.mostrar ? <PokeList defaultList={this.state.lista}/> : null }
          </>
      );
  }
}

export default Chefs;
