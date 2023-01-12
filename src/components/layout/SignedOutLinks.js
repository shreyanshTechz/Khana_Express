import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="right">
            <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>
            </ul>
      </div>
    )
  }
}
