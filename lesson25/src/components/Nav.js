import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Nav
