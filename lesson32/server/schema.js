const {buildSchema} = require('graphql')

const schema = buildSchema(`
    
    type User {
        id: ID
        username: String
        homeworks: String 
    }
      
    input UserInput {
        id: ID
        username: String
        homeworks: String   
   } 
    
   type Query {
        getAllUsers: [User]
   }
   
   type Mutation {
        createUser(input: UserInput): User
   }
`)

module.exports = schema