import {useState} from "react"
import styled, {ThemeProvider} from "styled-components"
import "./App.css"
import Button from "./comps/Button"
import {darkTheme, theme as defaultTheme} from "./theme/theme"

const H1 = styled.h1`
  color: ${({theme}) => theme.$colorPrimary};
`

function App() {
  const [theme, setTheme] = useState(defaultTheme)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <H1>this is a h1 with styled</H1>
          <Button variant="outlined"
                  height={111}
                  onClick={() => setTheme(darkTheme)}>
            test
          </Button>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
