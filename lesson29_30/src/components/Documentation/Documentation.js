import React, {Component} from "react"
import LeftPanel from "../LeftPanel/LeftPanel"
import TopPanel from "../TopPanel/TopPanel"

class Documentation extends Component {
  render() {
    return (
      <div>
        <TopPanel/>
        <div className="admin-page">
          <LeftPanel/>
          <div className="content">
            Documentation
          </div>
        </div>
      </div>
    )
  }
}

export default Documentation

