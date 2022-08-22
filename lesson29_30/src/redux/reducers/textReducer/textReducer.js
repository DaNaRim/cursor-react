import {ADD_TEXT, DELETE_WORD, GET_WORDS, PARSE_TEXT, UPDATE_WORD} from "./textActionTypes"

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
      return {...state, words: payload}
    case GET_WORDS:
      return {...state, words: payload}
    case UPDATE_WORD:
      return {...state, words: state.words.map(word => word._id === payload._id ? payload : word)}
    case DELETE_WORD:
      return {...state, words: state.words.filter(w => w._id !== payload._id)}
    default:
      return state
  }
}
