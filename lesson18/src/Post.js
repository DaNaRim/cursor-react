import React from "react"

export const PostComponent = ({data}) => {
  const {title, subTitle, img} = data

  const styles = {
    border: "1px solid grey",
    margin: "15px"
  }

  const styleImage = {
    height: "300px",
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  }

  return (
    <div style={styles}>
      <h4>{title}</h4>
      <h5>{subTitle}</h5>
      <div style={styleImage}></div>
    </div>
  )
}