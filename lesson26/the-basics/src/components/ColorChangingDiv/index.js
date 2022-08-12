import React, {useState} from "react"
import "./style.css"

const ColorChangingDiv = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <div className={clicked ? "clicked" : "default"}>test</div>

      <button onClick={() => setClicked(p => !p)}>click</button>
    </div>
  )
}

export default ColorChangingDiv
