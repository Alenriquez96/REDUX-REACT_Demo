import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo-cake.png'

class Nav extends Component {
  render() {
    return <div className="nav">
      <img src={logo} alt='logo'></img>
      <Link to="/" className="nav__element">Home</Link>
      <Link to="/listachefs" className="nav__element">Lista Chefs</Link>
      <Link to="/aboutme" className="nav__element">About me</Link>
      <Link to="/contact" className="nav__element">Contact</Link>
    </div>;
  }
}

export default Nav;
