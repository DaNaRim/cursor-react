import {Route, Routes} from "react-router"
import "./App.css"
import "./admin.scss"
import Documentation from "./components/Documentation/Documentation"
import NewPost from "./components/NewPost/NewPost"
import Posts from "./components/Posts/Posts"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewPost/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/docs" element={<Documentation/>}/>
      </Routes>
    </div>
  )
}

export default App
