import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"
import AboutPage from "./components/AboutPage"
import HomePage from "./components/HomePage"
import UserPage from "./components/UserPage"
import UsersPage from "./components/UsersPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/users" exact component={UsersPage}/>
        <Route path="/users/:id" exact component={UserPage}/>
      </Router>
    </div>
  )
}

export default App
