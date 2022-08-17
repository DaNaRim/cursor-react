import {combineReducers, createStore} from "redux"
import {users} from "./redux/reducer"

const reducer = combineReducers({
  users
})

const store = createStore(reducer)

export default store