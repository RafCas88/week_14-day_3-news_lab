import React, { Component } from "react"
import NewsList from "../components/NewsList.js"
class NewsBox extends Component {
  render(){
    return(
          <div>
              <h1>This is a news box!</h1>
              <NewsList/>
          </div>
        )
  }
}

export default NewsBox
