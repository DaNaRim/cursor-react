import {TEXT_PARSER} from "../../types"

export const textParserReducer = (state = [], action) => {
  const {type, payload} = action

  switch (type) {
    case TEXT_PARSER:
      return payload
    default:
      return state
  }
}
