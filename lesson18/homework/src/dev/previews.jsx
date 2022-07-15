import React from "react"
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox"
import App from "../App"
import Post from "../components/Post"
import {PaletteTree} from "./palette"

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Post">
        <Post/>
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews