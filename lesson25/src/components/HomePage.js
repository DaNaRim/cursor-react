import React, {Component} from "react"
import Header from "./Header"

class HomePage extends Component {
  render() {
    const baseUrl = this.props.location.pathname
    return (
      <div>
        <Header url={baseUrl}/>
        <strong>Home Page</strong>
      </div>
    )
  }
}

export default HomePage
