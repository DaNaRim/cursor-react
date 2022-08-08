import React, {Component} from "react"

class ClassCard extends Component {
  handleClick = () => {
    this.setState({...this.state, counter: this.state.counter + 1})
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log("initialized")

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        this.setState({...this.state, users: res})
      })
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log({prevProps, prevState, snapshot})
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return nextState.users.length > 9;
  // }

  render() {
    const {state, handleClick} = this

    console.log(this.state.users)

    return (
      <div>
        Counter: {state.counter}
        <button onClick={handleClick}>Click me</button>
        {state.users && state.users.map(el => <h3 key={el.id}>{el.name}</h3>)}
      </div>
    )
  }
}

export default ClassCard