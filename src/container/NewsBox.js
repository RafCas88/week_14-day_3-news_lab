import React, { Component } from "react"
import NewsList from "../components/NewsList.js"
class NewsBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      stories:[]
    }
  }

  componentDidMount(){
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res => res.json())
    .then(data => this.setState({stories: data}))
  }

  render(){
    return(
          <div>
              <h1>This is a news box!</h1>
              <NewsList stories={this.state.stories}/>
          </div>
        )
  }
}

export default NewsBox
