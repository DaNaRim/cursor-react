import React, {Component} from "react"
import {connect} from "react-redux"
import {addText} from "../../redux/reducers/addTextReducer/addTextActions"
import {exactWordsToCollections} from "../../redux/reducers/textParserReduer/textParserActions"
import LeftPanel from "../LeftPanel/LeftPanel"
import WordsList from "../Posts/WordsList"
import TopPanel from "../TopPanel/TopPanel"

class NewPost extends Component {
  render() {
    return (
      <div>
        <TopPanel/>
        <div className="admin-page">
          <LeftPanel/>
          <div className="content">
            <textarea
              cols="30"
              rows="10"
              onChange={this.props.addText}/>

            <button className="parse-btn" onClick={this.props.exactWordsToCollections}>Parse</button>
            <WordsList words={this.props.words}/>
          </div>
        </div>
      </div>
    )
  }
}

const getStateToProps = state => {
  return {
    words: state.textParserReducer
  }
}

const mapStateToProps = dispatch => {
  return {
    addText: e => dispatch(addText(e.target.value)),
    exactWordsToCollections: () => dispatch(exactWordsToCollections())
  }
}

export default connect(getStateToProps, mapStateToProps)(NewPost)

