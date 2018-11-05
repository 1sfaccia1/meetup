import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render(){
    return(
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Meetups</a>
            <a href="main-menu" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="fa fa-bars"></i></a>
            <ul className="right hide-on-sm-only">
              <li><Link to = "/"><i className="fa fa-users"></i>Meetups</Link></li>
            </ul>
            <ul id="main-menu" className="sidenav slide-out">
              <li><Link to = "/"><i className="fa fa-users"></i>Meetups</Link></li>
              <li><Link to = "/meetups/add"><i className="btn-floating btn-large waves-effect waves-light red"></i>Add Meetups</Link></li>
              <li><Link to = "/about"><i className=""></i>About</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
