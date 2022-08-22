import axios from "axios"
import nlp from "compromise"
import {ADD_TEXT, DELETE_WORD, GET_WORDS, PARSE_TEXT, SAVE_WORDS, UPDATE_WORD} from "./textActionTypes"

const BASE_URL = "http://localhost:8090"

export const addText = text => ({type: ADD_TEXT, payload: text})

export const exactWordsToCollections = () => (dispatch, getState) => {
  const text = getState().textReducer.text
  const doc = nlp(text)
  const words = doc.json(0).terms

  dispatch(({type: PARSE_TEXT, payload: words}))
}

export const saveWords = () => (dispatch, getState) => {
  const words = getState().textReducer.words

  axios.post(`${BASE_URL}/words`, words)
       .then(({data}) => dispatch(({type: SAVE_WORDS, payload: data})))
}

export const getWords = () => (dispatch) => {
  axios.get(`${BASE_URL}/words`)
       .then(({data}) => dispatch(({type: GET_WORDS, payload: data})))
}

export const updateWord = word => (dispatch) => {
  axios.put(`${BASE_URL}/words/${word._id}`, word)
       .then(() => dispatch(({type: UPDATE_WORD, payload: word})))
}

export const deleteWord = word => (dispatch) => {
  axios.delete(`${BASE_URL}/words/${word._id}`)
       .then(() => dispatch(({type: DELETE_WORD, payload: word})))
}
