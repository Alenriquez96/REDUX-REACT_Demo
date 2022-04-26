import React, { Component } from 'react'
import Nav from './Nav'
import {userContext} from '../../context/userContext';
import Button from '@mui/material/Button';

export class Header extends Component {
  render() {
    return (
      <header>
        <Nav/>
        <div>
          <userContext.Consumer>
          {({user,logout}) => 
              user?
                <>
                  <p>Hola, {user}</p>
                  <Button variant="contained" onClick={logout}>Logout</Button>
                </>:""
          }
          </userContext.Consumer>

        </div>
        </header>
    )
  }
}

export default Header