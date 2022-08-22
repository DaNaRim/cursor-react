import React from "react"
import {NavLink} from "react-router-dom"

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <ul>
        <li><NavLink to="/">New post</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        <li><NavLink to="/docs">Docs</NavLink></li>
      </ul>
    </div>
  )
}

export default LeftPanel

