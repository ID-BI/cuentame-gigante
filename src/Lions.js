import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
import MainVideo from './components/main-video';
import VideoList from './components/video-list';
import Footer from './components/footer';

class App extends Component {
	state = {
		videos: [],
		currentVideo: '2OHbjep_WjQ',
		pageToken: null
	};

	fetchVideoYT = () => {
		// const key = process.env.REACT_APP_WEATHER_API_KEY;
		const key = 'AIzaSyB867T2qGqRCqtgNJIF1axp9-GlwwSC-GQ';
		const playlistId = 'PLWKjhJtqVAblNvGKk6aQVPAJHxrRXxHTs';

		const token = this.state.pageToken ? `&pageToken=${this.state.pageToken}` : '';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${key}&maxResults=10${token}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				let toReturn = data.items.map((item) => item.snippet);
				console.log(toReturn[0]);

				this.setState({
					// ...this.state,
					videos: toReturn,
					pageToken: data.nextPageToken
				});
			})
			.catch((err) => err);
	};
	componentDidMount() {
		this.fetchVideoYT();
	}

	itemClicked = (id) => {
		this.setState({ currentVideo: id });
	};

	buttonClicked = () => (this.state.pageToken ? this.fetchVideoYT() : null);

	render() {
		return (
			<div className="App">
				<MainVideo video={this.state.currentVideo} />
				<VideoList itemClicked={this.itemClicked} videos={this.state.videos} />
				<Footer buttonClicked={this.buttonClicked} results={this.state.pageToken} />
			</div>
		);
	}
}

export default App;
