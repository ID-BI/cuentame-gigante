import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding: 8px 12px;
	margin: 8px auto;
	box-sizing: border-box;
	border: 2px solid #f6f6f6;
	transition: border .2s ease-in-out;
	cursor: pointer;
	max-width: 500px;
	text-align: left;
	:hover {
		border: 2px solid rgba(237, 164, 163, 0.8);
	}
`;
const Container = styled.div`
	width: 112px;
	height: 80px;
	overflow: hidden;
	position: relative;
	border-radius: 4px;
	flex-shrink: 0;
	img {
		position: absolute;
		left: 50%;
		top: 50%;
		height: 100%;
		width: auto;
		transform: translate(-50%, -50%);
	}
`;

const Details = styled.div`
	padding: 8px 22px;
	@media only screen and(max-width: 500px) {
		padding: 14px;
	}
	p {
		margin-top: 4px;
		word-wrap: break-word;
		word-break: break-word;
	}
	h1 {
		font-family: 'Montserrat', sans-serif;
		line-height: 1.2;
		font-weight: 500;
		font-size: 1em;
		color: #2f3940;
	}
`;

class VideoItem extends React.Component {
	render() {
		let video = this.props.video;
		// console.log(video);
		let img = this.props.video.thumbnails.medium.url;
		return (
			<Article onClick={() => this.props.itemClicked(video.resourceId.videoId)}>
				<Container>
					<img src={img} className="thumb" alt="Video Thumbnail" />
				</Container>
				<Details>
					<h1>{video.title}</h1>
					<p>{video.description.substring(0, 100) + ' ...'}</p>
				</Details>
			</Article>
		);
	}
}
export default VideoItem;
