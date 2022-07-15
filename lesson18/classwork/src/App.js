import "./App.css"

import {PostComponent} from "./Post"

function App() {
  const posts = [
    {
      id: "1",
      title: "This title",
      subTitle: "This subTitle",
      img: "https://i.imgflip.com/2kuh6f.jpg"
    },
    {
      id: "2",
      title: "This title 2",
      subTitle: "This subTitle 2",
      img: "https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/12-1.png?lossy=1&strip=1&webp=1"
    },
    {
      id: "3",
      title: "This title 2",
      subTitle: "This subTitle 3",
      img: "https://miro.medium.com/max/1400/1*gBhX2KjnmYa-Q-c583cCcw.png"
    }
  ]

  return (
    <div className="App">
      {posts.map(post => <PostComponent data={post} key={post.id}/>)}
    </div>
  )
}

export default App
