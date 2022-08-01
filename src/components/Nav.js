import React, { Component } from 'react';
import logo from '../images/logo.jpg';

class Nav extends Component{
  render() {
        return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-1 shadow">
          <div
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            rel="noopener noreferrer"
          >
            Ai Mories
          </div>
          <small className="navbar-brand col-sm-1 "> {this.props.account} </small>
          <img src={logo} height="40" width="40"  alt="" />
        </nav>
        )
    }
}

    export default Nav;
