import React, { Component } from "react";
import {userContext} from '../../../context/userContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class Contact extends Component {
  static contextType = userContext; // Para consumir contexto por JS

  constructor(props) {
    super(props)
  
    this.state = {
       user:""
    }
  }

  login = (event) => {
    event.preventDefault();
    const user = event.target.user.value;
    this.setState({user});
    // Guardar en el contexto de user
    //const loginUser = this.context.login; // Leer la función login
    //loginUser(user); 
    this.context.login(user);
  }

  render() {
    return <div>
      <h1>Contacto</h1>
      <form onSubmit={this.login} className='contact'>
        {/* <label htmlFor="user">Nombre usuario:</label>
        <input type="text" id="user" name="user" /> */}
        <TextField id="outlined-basic" label="Nombre usuario" variant="filled" name='user'/>
        <Button variant="contained" type="submit" sx={{margin:1}}>Enviar</Button>
      </form>

      <p>Usuario introducido:{this.state.user?this.state.user:"--"}</p>

    </div>;
  }
}

export default Contact;
