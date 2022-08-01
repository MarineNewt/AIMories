import React, { Component } from 'react';
import logo from '../images/logo.jpg';

class Nav extends Component{
  render() {
    const Mobile = window.innerWidth >= 550 ? 'false' : 'true';
        return (
        <nav style={{display: 'inline-flex'}}className="navbar navbar-dark fixed-top bg-dark p-1 shadow">
          <div
            className="navbar-brand"
            rel="noopener noreferrer"
          >
            Ai Mories
          </div>
          <small style={{fontSize: '1.75vw'}} className="navbar-brand col-sm-1 "> {this.props.account} </small>
          {Mobile === 'false' && <img src={logo} style={{height:'3vw'}}  alt="" />}
        </nav>
        )
    }
}

    export default Nav;
