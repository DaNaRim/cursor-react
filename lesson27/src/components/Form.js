import React, {Component} from "react"
import {connect} from "react-redux"
import {addUser, deleteUsers} from "../redux/action"

class Form extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      user: ""
    }
  }

  onChangeInput = e => {
    this.setState({user: e.target.value})
  }

  onSubmitInput = () => {
    // this.props.getUser(this.state.user)
    this.props.addUser(this.state.user)
    this.setState({user: ""})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeInput} value={this.state.user}/>
        <button onClick={this.onSubmitInput}>Add</button>
        <button onClick={this.props.delUsers}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user)),
    delUsers: () => dispatch(deleteUsers())
  }
}

export default connect(null, mapDispatchToProps)(Form)
