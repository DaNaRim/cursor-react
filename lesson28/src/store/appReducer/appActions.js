import {DECREMENT, GET_REMOTE_POSTS, GET_REMOTE_POSTS_FAIL, INCREMENT, UPDATE_USER} from "./appTypes"

export const increaseAction = () => ({type: INCREMENT})
export const decreaseAction = () => ({type: DECREMENT})

export const updateSpecificUserAction = (id, age) => ({
  type: UPDATE_USER,
  payload: {
    id,
    age
  }
})

export const getRemotePostsAction = () => {
  return async dispatch => {
    try {
      const request = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await request.json()

      dispatch({
        type: GET_REMOTE_POSTS,
        payload: {posts}
      })
    } catch (error) {
      dispatch({
        type: GET_REMOTE_POSTS_FAIL,
        payload: {error}
      })
    }
  }
}
