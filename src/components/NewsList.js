import React from "react"
import NewsItem from "./NewsItem.js"
const NewsList = (props) =>{

  const story = props.stories.map((story, index) => {
    return (<NewsItem key={index} story={story}/>
  )})

  return(
    <div>
    <h2>Headlines</h2>
    <ul>
    {story}
    </ul>
    </div>
  )
  }

  export default NewsList
