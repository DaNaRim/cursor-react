import nlp from "compromise"
import {ADD_TEXT, PARSE_TEXT, SAVE_WORDS} from "./textActionTypes"

export const addText = text => ({type: ADD_TEXT, payload: text})

export const exactWordsToCollections = () => (dispatch, getState) => {
  const text = getState().textReducer.text
  const doc = nlp(text)
  const words = doc.json(0).terms

  dispatch(({type: PARSE_TEXT, payload: words}))
}

export const saveWords = () => (dispatch, getState) => {
  const words = getState().textReducer.words
  localStorage.setItem("words", JSON.stringify(words))

  dispatch(({type: SAVE_WORDS, payload: words}))
}







