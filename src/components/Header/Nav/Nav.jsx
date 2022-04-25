import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/listachefs">Lista Chefs</Link>
      <br/>
      <Link to="/aboutme">About me</Link>
      <br/>
      <Link to="/contact">Contact</Link>
    </div>;
  }
}

export default Nav;
