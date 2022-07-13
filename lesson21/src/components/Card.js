import React, {useContext} from "react"
import {OurContext} from "../App"

const Card = () => {
  const {counter, setCounter} = useContext(OurContext)
  return <div>
    <button onClick={() => setCounter(counter + 1)}>Click from card</button>
  </div>
}

export default Card
