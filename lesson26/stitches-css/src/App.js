import "./App.css"
import {globalStyles, styled} from "./theme"

const Button = styled("button", {
  mt: 40,
  variants: {
    variant: {
      outlined: {
        border: "1px solid $red600"
      }
    },
    transparent: {
      true: {
        background: "transparent"
      }
    }
  }
})

function App() {
  return (
    <div className="App">
      {globalStyles()}
      <header className="App-header">
        <h1>this is an h1</h1>
        <Button variant="outlined" transparent>
          test
        </Button>
      </header>
    </div>
  )
}

export default App
