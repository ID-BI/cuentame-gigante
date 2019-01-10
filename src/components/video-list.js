import React from 'react';
import VideoItem from './video-item';
import styled from 'styled-components';

const Main = styled.main`
	max-width: 540px;
	background-color: #f6f6f6;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 370px 4px 10px;
	border-left: 1px solid #b4babe;
	border-right: 1px solid #b4babe;
	text-align: center;

	/*----------  Break Point 1 - 500px  ----------*/
	@media only screen and (max-width: 500px) {
		border: none;
		padding: 330px 4px 10px;
	}

	/*----------  Break Point 1 - 400px  ----------*/
	@media only screen and (max-width: 400px) {
		padding: 270px 4px 10px;
	}
`;
class VideoList extends React.Component {
	render() {
		return (
			<Main>
				{this.props.videos.map((video) => (
					<VideoItem itemClicked={this.props.itemClicked} key={video.title} video={video} />
				))}
			</Main>
		);
	}
}
export default VideoList;
