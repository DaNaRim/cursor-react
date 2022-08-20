import nlp from "compromise"
import {SAVE_WORDS, TEXT_PARSER} from "../../types"

const wordsParser = words => {
  return {
    type: TEXT_PARSER,
    payload: words
  }
}

const save = words => {
  return {
    type: SAVE_WORDS,
    payload: localStorage.setItem("words", JSON.stringify(words))
  }
}

export function saveWords() {
  return (dispatch, getState) => {
    const words = getState().textParserReducer
    dispatch(save(words))
  }
}

export function exactWordsToCollections() {
  return (dispatch, getState) => {
    const text = getState().addTextReducer
    const doc = nlp(text)
    dispatch(wordsParser(doc.json(0).terms))
  }
}
