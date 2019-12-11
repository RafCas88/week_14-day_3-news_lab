import React from "react"
const NewsItem = (props)=>{
  return (<li>
    <a href={props.story.url}>
    <h3>{props.story.title}</h3>
    <h4>{props.story.by}</h4></a>
    </li>
)
}

export default NewsItem
