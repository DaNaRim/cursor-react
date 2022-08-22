import {ADD_TEXT, PARSE_TEXT, SAVE_WORDS} from "./textActionTypes"

const initialState = {
  text: "",
  words: []
}

export const textReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case ADD_TEXT:
      return {...state, text: payload}
    case PARSE_TEXT:
      console.log(payload)
      return {...state, words: payload}
    case SAVE_WORDS:
      return {...state, words: payload}
    default:
      return state
  }
}
