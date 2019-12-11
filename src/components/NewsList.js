import React from "react"
import NewsItem from "./NewsItem.js"
const NewsList = (props) =>{

  const story = props.stories.map((story, index) => {
    return (<NewsItem key={index} story={fetch("https://hacker-news.firebaseio.com/v0/item/"+story+".json")
    .then(res => res.json())
    .then(data => data)}/>
  )})

  return(
    <div>
    <h2> This is a NewsList!</h2>
    {story}
    </div>
  )
  }

  export default NewsList
