import React, { Component } from "react"
import NewsList from "../components/NewsList.js"
import NewsFilter from "../components/NewsFilter.js"
class NewsBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      storiesNumber: [],
      stories:[],
      selectedStories: []
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount(){
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res => res.json())
    .then(data => this.setState({storiesNumber: data}))
    .then(something => {
      const storiesURL = this.state.storiesNumber.map(number => `https://hacker-news.firebaseio.com/v0/item/${number}.json`);
      const slicedURLs = storiesURL.slice(0,10)
      Promise.all(slicedURLs.map(storyURL => fetch(storyURL).then(res => res.json())))
      .then(data => this.setState({stories: data}))
      .then(() => this.setState({selectedStories: this.state.stories}))
    })
    }

    handleFilter(event){
      if(event.target.value === "default"){this.setState({selectedStories: this.state.stories})}
      else{this.setState({selectedStories: [this.state.stories[event.target.value]]})}
    }

  render(){
    return(
          <div>
              <h1>Big News</h1>
              <NewsFilter stories={this.state.stories} onFilter={this.handleFilter}/>
              <NewsList stories={this.state.selectedStories}/>
          </div>
        )
  }
}

export default NewsBox
