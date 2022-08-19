const initState = {
  isAuthenticated: false
}

const authReducer = (state = initState, action) => {
  const {type, payload} = action

  switch (type) {
    default:
      return state
  }
}

export default authReducer
