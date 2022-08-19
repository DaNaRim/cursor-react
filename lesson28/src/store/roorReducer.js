import {combineReducers} from "redux"
import appReducer from "./appReducer/appReducer"
import authReducer from "./authReducer/authReducer"

const rootReducer = combineReducers({
  appReducer,
  authReducer
})

export default rootReducer
