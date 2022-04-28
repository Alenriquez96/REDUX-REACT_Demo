import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/listachefs'>Lista Chefs</Link>
      <br/>
      <Link to='/about'>About</Link>
      <br/>
      <Link to='/delivery'>Delivery</Link>
      <br/>
      <Link to='/topics'>Topics</Link>
      <br/>
      <Link to='/contact'>Contact</Link>
      <br/>
    </nav>;
  }
}

export default Nav;
