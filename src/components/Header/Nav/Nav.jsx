import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo-cake.png'

class Nav extends Component {
  render() {
    return <div className="nav">
      <img src={logo} alt='logo'></img>
      <Link to="/">Home</Link>
      <Link to="/listachefs">Lista Chefs</Link>
      <Link to="/aboutme">About me</Link>
      <Link to="/contact">Contact</Link>
    </div>;
  }
}

export default Nav;
