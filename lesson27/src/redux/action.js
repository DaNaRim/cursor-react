import {ADD_USER, DELETE_USERS} from "./type"

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}

export const deleteUsers = () => {
  return {
    type: DELETE_USERS,
    payload: []
  }
}