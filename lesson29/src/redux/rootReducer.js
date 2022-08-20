import {combineReducers} from "redux"
import {addTextReducer} from "./reducers/addTextReducer/addTextReducer"
import {textParserReducer} from "./reducers/textParserReduer/textParserReducer"

const rootReducer = combineReducers({
  addTextReducer,
  textParserReducer
})

export default rootReducer
