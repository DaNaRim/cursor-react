import {applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import {logger} from "redux-logger/src"
import thunk from "redux-thunk"

const middlewares = composeWithDevTools(applyMiddleware(
  logger,
  thunk
))

export default middlewares