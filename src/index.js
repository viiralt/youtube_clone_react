import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDazMhsfLD4mozuOfMLxCYg41SIMebQFWU';

// create a new component, which should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
    // passing this.state.videos (props) to the child element VideoList
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('web development');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

// push this component's generated HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container')); // instance of app, DOM target node
