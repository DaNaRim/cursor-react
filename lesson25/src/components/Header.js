import React, {Component} from "react"
import Nav from "./Nav"


class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Logo</h1>
        <Nav/>
        {
          this.props.url === "/users" ? <button className="btn">Add user</button> : null
        }
      </div>
    )
  }
}

export default Header
