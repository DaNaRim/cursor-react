const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const cors = require("cors")
const schema = require("./schema")

const users = [{id: 1, username: "Dan", homeworks: 5}]

const app = express()
app.use(cors())

const createUser = input => {
  const id = Date.now()
  return {
    id, ...input
  }
}

const root = {
  getAllUsers: () => users,

  createUser: ({input}) => {
    const user = createUser(input)
    users.push(user)
    return user
  }
}

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))


app.listen(8090, () => console.log("Server started on port 8090"))