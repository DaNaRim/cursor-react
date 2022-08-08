import React, {useContext} from "react"
import {OurContext} from "../App"

const Section = () => {
  const {counter, setCounter} = useContext(OurContext)
  return <div>
    <button onClick={() => setCounter(counter + 1)}>Click from section</button>
  </div>
}

export default Section
