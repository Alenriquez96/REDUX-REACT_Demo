import React, { Component } from 'react'
import Nav from './Nav'
import {userContext} from '../../context/userContext';

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
                  <button onClick={logout}>Logout</button>
                </>:""
          }
          </userContext.Consumer>

        </div>
        </header>
    )
  }
}

export default Header