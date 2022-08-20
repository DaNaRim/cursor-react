import React, {Component} from "react"

class WordsList extends Component {
  render() {
    return (
      <div>
        {this.props.words.map((word, index) =>
          <p key={index}>{word.text}</p>
        )}
      </div>
    )
  }
}

export default WordsList
