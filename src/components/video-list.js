import React from 'react';
import VideoItem from './video-item';
import styled from 'styled-components';

const Main = styled.div`
	/* max-width: 540px;
	background-color: #f6f6f6;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 370px 4px 10px;
	border-left: 1px solid #b4babe;
	border-right: 1px solid #b4babe;
	text-align: center; */
	background: #222;
	margin-top: 80px;
	/* margin-right: 10px; */
	width: 28%;
	height: 400px;
	overflow: hidden;
	float: right;
	/* padding-top: 80px;
	top: 80px; */

	:hover {
		overflow-y: auto;
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
