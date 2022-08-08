import {createContext, useEffect, useRef, useState} from "react"
import "./App.css"
import ClassCard from "./components/ClassCard"

export const OurContext = createContext()

function App() {
  const [counter, setCounter] = useState(0)

  const myInputRef = useRef(null)

  const myCustomRef = useRef({
    a: 1,
    b: 2
  })

  // useEffect(() => {
  //   console.log(myInputRef.current?.getBoundingClientRect() )
  // })

  useEffect(() => {
//   console.log(myInputRef.current?.getBoundingClientRect() )
    // myInputRef.current?.focus()

    // console.log({myCustomRef})

    setTimeout(() => {
      myCustomRef.current.a = 10
    }, 3000) //optional changing

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/*<OurContext.Provider value={{counter, setCounter}}>*/}
        {/*  <Card/>*/}
        {/*  <Section/>*/}
        {/*</OurContext.Provider>*/}

        {/*<button onClick={() => setCounter(counter + 1)}>Click</button>*/}

        <ClassCard></ClassCard>


        {/*<input type="text" ref={myInputRef}/>*/}

      </header>
    </div>
  )
}

export default App

// function App() {
//   // const [firstName, setFirstName] = useState()
//   // const [lastName, setLastName] = useState()
//   //
//   // const firstNameChange = (e) => {
//   //   setFirstName(e.target.value)
//   // }
//   //
//   // const lastNameChange = (e) => {
//   //   setLastName(e.target.value)
//   // }
//   //
//   // const submit = () => {
//   //   console.log({firstName, lastName})
//   // }
//
//   // const [counter, setCounter] = useState(0)
//   //
//   // const handleUp = () => {
//   //   setCounter(prev => prev + 1)
//   // }
//   //
//   // const handleDown = () => {
//   //   setCounter(prev => prev - 1)
//   // }
//   //
//   // useEffect(() => {
//   //   console.log({counter})
//   // }, [counter])
//
//   const [users, setUsers] = useState(null)
//   const [value, setValue] = useState("")
//
//   const controlClick = () => console.log("click")
//
//   const callBackMemo = useCallback(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(setUsers)
//   }, [])
//
//   useEffect(() => {
//     callBackMemo()
//
//     window.addEventListener("click", controlClick)
//
//     return () => {
//       console.log("deactivated")
//       window.removeEventListener("click", controlClick)
//     }
//   }, [callBackMemo])
//
//   // const unique = useId()
//
//
//   const valueMemo = useMemo(() => {
//
//     // console.log("asd")
//
//     if (users === null) return
//
//     let value = 0
//     for (let i = 0; i <= 10_000; i++) {
//       value += i
//     }
//     return value
//   }, [users])
//
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/*<div>{firstName}</div>*/}
//         {/*<input type="text" value={firstName} placeholder="First name" onChange={firstNameChange}/>*/}
//         {/*<input type="text" value={lastName} placeholder="Last name" onChange={lastNameChange}/>*/}
//         {/*<button disabled={!firstName || !lastName} onClick={submit}>Click me</button>*/}
//
//         {/*<button onClick={handleUp}>Increase counter</button>*/}
//         {/*<button onClick={handleDown}>Decrease counter</button>*/}
//         {/*<h2>Counter: {counter}</h2>*/}
//
//         <input type="text" value={value} onChange={e => {
//           setValue(e.target.value)
//         }}/>
//
//         <h2>{valueMemo}</h2>
//
//
//         {users ? users.map(el => {
//           return <div key={el.id}>{el.name}</div>
//         }) : null}
//       </header>
//     </div>
//   )
// }
