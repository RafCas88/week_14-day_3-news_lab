import React from "react"

const NewsFilter = (props)=>{

  const titles = props.stories.map((story, index) =>{
  return ( <option key={index} value={index}>
    {story.title}
    </option>)
  })
  return (<select defaultValue="default" onChange={props.onFilter}>
      <option value="default" >All news stories</option>
      {titles}
    </select>)
  }

  export default NewsFilter
