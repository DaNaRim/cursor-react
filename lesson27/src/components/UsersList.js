import React, {Component} from "react"
import {connect} from "react-redux"

class UsersList extends Component {
  render() {
    const {users} = this.props
    if (users.length === 0) return

    return (
      <div>
        {users.map((user, index) => <div key={index}>{user}</div>)}
      </div>
    )
  }
}

const getStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(getStateToProps, null)(UsersList)
