import {DECREMENT, GET_REMOTE_POSTS, INCREMENT, UPDATE_USER} from "./appTypes"

const initialState = {
  counter: 0,
  theme: "light",
  users: [
    {id: 1, name: "John", age: 30},
    {id: 2, name: "Pete", age: 20},
    {id: 3, name: "Mary", age: 25}
  ],
  posts: null
}

const appReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1}
    case DECREMENT:
      return {...state, counter: state.counter - 1}
    case UPDATE_USER: {
      const userIndex = state.users.findIndex(user => user.id === payload.id)
      const users = [...state.users]
      users[userIndex].age = payload.age

      return {...state, users}
    }
    case GET_REMOTE_POSTS:
      return {...state, posts: payload.posts}
    default:
      return state
  }
}

export const counterSelector = state => state.appReducer.counter
export const usersSelector = state => state.appReducer.users
export const postsSelector = state => state.appReducer.posts

export default appReducer
