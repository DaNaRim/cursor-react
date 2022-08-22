import React, {Component} from "react"
import {connect} from "react-redux"
import {deleteWord, updateWord} from "../../redux/reducers/textReducer/textActions"

class PostItem extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      post: props.word.post
    }
  }

  submitPost = e => {
    this.setState({post: e.target.value})
  }

  editWord = () => {
    const {word} = this.props
    word.post = this.state.post

    this.props.updateWord(word)
  }

  deleteWord = () => {
    this.props.deleteWord(this.props.word)
  }

  render() {
    const {word} = this.props
    const {post} = this.state

    return (
      <div>
        <div className="word-cart">
          <h4>{word.text}</h4>
          <textarea cols="30"
                    rows="10"
                    defaultValue={post}
                    onChange={this.submitPost}/>
          <div>
            <button onClick={this.editWord}>Save</button>
            <button onClick={this.deleteWord}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateWord: word => dispatch(updateWord(word)),
  deleteWord: word => dispatch(deleteWord(word))
})

export default connect(null, mapDispatchToProps)(PostItem)
