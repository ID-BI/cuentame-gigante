import React from 'react';
import styled from 'styled-components';
const Section = styled.section`
	/* background-color: #e9e9e9; */
	width: 100%;
	position: fixed;
	z-index: 10;
	top: 50px;
	@media screen and(max-width: 700px) {
		position: static;
		padding-top: 50px;
	}
`;
const InnerSection = styled.div`
	height: auto;
	box-sizing: border-box;
	max-width: 540px;
	margin: 0 auto;
	border-left: 1px solid #b4babe;
	border-right: 1px solid #b4babe;
	@media only screen and(max-width: 500px) {
		border: none;
	}
`;
const Wrapper = styled.div`
	max-width: 540px;
	overflow: hidden;
	margin: 0 auto;
`;
const VideoWrapper = styled.div`
	position: relative;
	padding-bottom: 54%;
	/* 16:9 */
	padding-top: 12px;
	height: 0;
	@media only screen and(max-width: 500px) {
		padding-bottom: 53%;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;
class MainVideo extends React.Component {
	render() {
		const video = `https://www.youtube.com/embed/${this.props
			.video}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0`;
		console.log(video);
		return (
			<Section>
				<InnerSection>
					<Wrapper>
						<VideoWrapper>
							<iframe className="video" title="pre-video" src={video} frameBorder="0" allowFullScreen />
						</VideoWrapper>
					</Wrapper>
				</InnerSection>
			</Section>
		);
	}
}
export default MainVideo;
