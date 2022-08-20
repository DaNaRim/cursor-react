import {ADD_TEXT} from "../../types"


export const addTextReducer = (state = "", action) => {
  const {type, payload} = action

  switch (type) {
    case ADD_TEXT:
      return payload
    default:
      return state
  }
}