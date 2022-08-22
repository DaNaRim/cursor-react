import React, {Component} from "react"
import {connect} from "react-redux"
import {getWords} from "../../redux/reducers/textReducer/textActions"
import LeftPanel from "../LeftPanel/LeftPanel"
import TopPanel from "../TopPanel/TopPanel"
import PostItem from "./PostItem"

class Posts extends Component {

  componentDidMount() {
    this.props.getWords()
  }

  render() {
    const {words} = this.props

    return (
      <div>
        <div>
          <TopPanel/>
          <div className="admin-page">
            <LeftPanel/>
            <div className="content">
              {words.map((word, index) =>
                <PostItem key={index} word={word}/>
              )}
            </div>
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
  getWords: () => dispatch(getWords())
})

export default connect(getStateFromProps, mapStateToProps)(Posts)
