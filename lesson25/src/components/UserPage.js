import React, {Component} from "react"
import {users} from "../setvice"
import Header from "./Header"

class UserPage extends Component {
  render() {
    const index = this.props.match.params.id
    const user = users[index]

    const baseUrl = this.props.location.pathname
    return (
      <div>
        <Header url={baseUrl}/>
        <div className="user">
          <strong>{user.name}</strong>
          <p>Comments: {user.comments}</p>
        </div>
      </div>
    )
  }
}

export default UserPage
