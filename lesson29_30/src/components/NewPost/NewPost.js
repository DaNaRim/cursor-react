import React, {Component} from "react"
import {connect} from "react-redux"
import {addText, exactWordsToCollections} from "../../redux/reducers/textReducer/textActions"
import LeftPanel from "../LeftPanel/LeftPanel"
import TopPanel from "../TopPanel/TopPanel"
import WordsList from "./WordsList"

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

const getStateFromProps = state => ({
  words: state.textReducer.words
})

const mapStateToProps = dispatch => ({
  addText: e => dispatch(addText(e.target.value)),
  exactWordsToCollections: () => dispatch(exactWordsToCollections())
})

export default connect(getStateFromProps, mapStateToProps)(NewPost)
