import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {saveWords} from "../../redux/reducers/textParserReduer/textParserActions"

class TopPanel extends Component {
  render() {
    return (
      <div className="top-panel">
        <Link to="/">Words Extraction Admin</Link>
        <button onClick={this.props.saveWords}>Save</button>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    saveWords: () => dispatch(saveWords())
  }
}

export default connect(null, mapDispatchToProps)(TopPanel)