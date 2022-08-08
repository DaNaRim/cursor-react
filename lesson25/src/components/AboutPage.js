import React, {Component} from "react"
import Header from "./Header"

class AboutPage extends Component {
  render() {
    const baseUrl = this.props.location.pathname
    return (
      <div>
        <Header url={baseUrl}/>
        <strong>About page</strong>
      </div>
    )
  }
}

export default AboutPage

