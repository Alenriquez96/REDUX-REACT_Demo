import React, { Component } from "react";
import {userContext} from '../../../context/userContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

class Contact extends Component {
  static contextType = userContext; // Para consumir contexto por JS

  constructor(props) {
    super(props)
  
    this.state = {
       user:"",
       id:0
    }
  }

  login = async(event) => {
    event.preventDefault();
    const user = event.target.user.value;
    
    // Guardar en el contexto de user
    //const loginUser = this.context.login; // Leer la función login
    //loginUser(user); 
    this.context.login(user);

    //Llamada a la API para hacer POST
            
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts',{user});
    const json = res.data;
    console.log(json);
    // Lo guardo en el estado
    this.setState(json); // {user,id}

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

      <p>Usuario introducido:{this.state.user?this.state.user:"--"}. ID en el sistema:{this.state.id}</p>

    </div>;
  }
}

export default Contact;
