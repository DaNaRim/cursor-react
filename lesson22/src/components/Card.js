import React, {useState} from "react"

const Card = () => {
  const {counter, setCounter} = useState(0)

  const handleClick = () => {
    setCounter((prev) => prev + 1)
  }

  return <div>
    Counter: {counter}
    <button onClick={handleClick}>Click from card</button>
  </div>
}

export default Card
