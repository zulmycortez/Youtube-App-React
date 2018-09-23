import ReactDOM from 'react-dom';
import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/search-bar.js';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js'
import './index.css';
const API_KEY = "";
const axios = require('axios');

class App extends Component {
  constructor () {
      super()

      this.state = {
        videos: [],
        selectedVideo: null,
      }

      this.videoSearch = this.videoSearch.bind(this);
      // this.videos = this.videos.bind(this);

    }

    videoSearch (term) {
      const url = 'https://www.googleapis.com/youtube/v3/search';

      const params = {
        part: 'snippet',
        key: API_KEY,
        q: term,
        type: 'video'
      };

      axios.get(url, { params: params })
        .then(response => {
          this.setState({
             videos: response.data.items,
             selectedVideo: response.data.items[0]
           });
        })
        .catch(error => {
          console.error(error);
        });
    }

    render () {
      return (
        <div>
          <SearchBar onSearchTermChange={this.videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} />
        </div>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
