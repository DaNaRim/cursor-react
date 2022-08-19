import {useDispatch, useSelector} from "react-redux"
import "./App.css"
import {
  decreaseAction,
  getRemotePostsAction,
  increaseAction,
  updateSpecificUserAction
} from "./store/appReducer/appActions"
import {counterSelector, postsSelector, usersSelector} from "./store/appReducer/appReducer"

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(counterSelector)
  const users = useSelector(usersSelector)
  const posts = useSelector(postsSelector)

  const increaseCounter = () => {
    dispatch(increaseAction())
  }

  const decreaseCounter = () => {
    dispatch(decreaseAction())
  }

  const updateSpecificUser = (id, age) => {
    dispatch(updateSpecificUserAction(id, age))
  }

  const getPosts = () => {
    console.log("click")
    dispatch(getRemotePostsAction())
  }

  return <div className="App">
    <header className="App-header">
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={getPosts}>Get posts</button>
      <h1>Counter value: {counter}</h1>
      {users.map(user =>
        <div key={user.id} onClick={updateSpecificUser.bind(null, user.id, user.age * 1.2)}>
          {user.name}
          <span> {user.age}</span>
        </div>
      )}
    </header>
  </div>
}

export default App
