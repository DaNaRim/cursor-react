import {ADD_USER, DELETE_USERS} from "./type"

export const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    case DELETE_USERS:
      return action.payload
    default:
      return state
  }
}