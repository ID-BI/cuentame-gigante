import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
	position: relative;
	padding-bottom: 52%;
	height: 0;
	width: 70%;
	float: left;
	padding-top: 50px;
	top: 80px;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 400px;
	}
`;
class MainVideo extends React.Component {
	render() {
		const video = `https://www.youtube.com/embed/${this.props
			.video}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0`;
		console.log(video);
		return (
			<VideoWrapper>
				<iframe className="video" title="pre-video" src={video} frameBorder="0" allowFullScreen />
			</VideoWrapper>
		);
	}
}
export default MainVideo;
