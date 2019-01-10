import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
import MainVideo from './components/main-video';
import VideoList from './components/video-list';
import Footer from './components/footer';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: 1150px;
	min-width: 440px;
	background: #fff;
	margin: 0 auto;
`;

class App extends Component {
	state = {
		videos: [],
		currentVideo: 'Ns9YYSqLxyI',
		pageToken: null
	};

	fetchVideoYT = () => {
		// const key = process.env.REACT_APP_WEATHER_API_KEY;
		const key = 'AIzaSyB867T2qGqRCqtgNJIF1axp9-GlwwSC-GQ';
		const playlistId = 'PLsaCoV-pu477s_G0et3RiWblR2V1fSU7v';

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
			<Container>
				<MainVideo video={this.state.currentVideo} />
				<VideoList itemClicked={this.itemClicked} videos={this.state.videos} />
				<Footer buttonClicked={this.buttonClicked} results={this.state.pageToken} />
			</Container>
		);
	}
}

export default App;
