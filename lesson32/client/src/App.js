import {useMutation, useQuery} from "@apollo/client"
import {useEffect, useState} from "react"
import "./App.css"
import {CREATE_USER} from "./mutation/user"
import {GET_ALL_USERS} from "./query/user"

function App() {

  const {data, loading, error, reFetch} = useQuery(GET_ALL_USERS, {pollInterval: 5000})
  const [newUser] = useMutation(CREATE_USER)

  const [users, setUsers] = useState([])
  const [username, setUsername] = useState("")
  const [homeworks, setHomeworks] = useState("")

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
  })

  const addUser = e => {
    e.preventDefault()
    newUser({
      variables: {
        input: {
          username,
          homeworks
        }
      }
    }).then(() => {
      setUsername("")
      setHomeworks("")
      // reFetch()
    })
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>

        <label htmlFor="homeworks">Complete tasks:</label>
        <input type="text" name="homeworks" value={homeworks} onChange={e => setHomeworks(e.target.value)}/>

        <div className="btn">
          <button onClick={addUser}>Add</button>
        </div>
      </form>
      {users.map(user =>
        <div className="user" key={user.id}>{user.username} {user.homeworks}</div>
      )}
    </div>
  )
}

export default App
