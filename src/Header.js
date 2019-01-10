import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './img/logo.png';
import Inspirarte from './img/inspirarte.png';
import Gigante from './img/gigante.png';
import Marketeros from './img/marketeros.png';
import Lions from './Lions';
import Inspire from './Inspire';
// import Lions from './Lions';
import Marketers from './Marketers';

const H2 = styled.div`
	position: fixed;
	z-index: 10;
	top: 50px;
`;
const Index = () => <H2>Home</H2>;

const Div = styled.div`
	position: fixed;
	z-index: 10;
	overflow: hidden;
	width: 100%;
	/* margin-bottom: 100px; */
`;
const HeaderTop = styled.header`
	background-color: #e9e9e9;
	width: 100%;
	z-index: 10;
	margin: 0;
	padding: 2px 2px;
	display: flex;
	align-items: center;
	height: 50px;
	/* position: relative; */
`;
const HeaderLogo = styled.div`
	border-top: none;
	box-sizing: border-box;

	img {
		width: 110px;
	}
`;
const Ul = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	margin: 0;
	color: #34495e;
	text-transform: uppercase;
	margin-left: auto;

	li {
		margin: 0 10px;
	}
	img {
		width: 100px;
	}
`;
const Header = () => {
	return (
		<Router>
			<div>
				<Div>
					<HeaderTop>
						<HeaderLogo>
							<Link to="/">
								<img src={Logo} alt="logo" />
							</Link>
						</HeaderLogo>
						<Ul>
							<li>
								<Link to="/inspire">
									<img src={Inspirarte} alt="" />
								</Link>
							</li>
							<li>
								<Link to="/lions">
									<img src={Gigante} alt="" />
								</Link>
							</li>
							<li>
								<Link to="/marketers">
									<img src={Marketeros} alt="" />
								</Link>
							</li>
						</Ul>
					</HeaderTop>
				</Div>

				<Route path="/" exact component={Index} />
				<Route path="/inspire/" component={Inspire} />
				<Route path="/lions/" component={Lions} />
				<Route path="/marketers/" component={Marketers} />
			</div>
		</Router>
	);
};

export default Header;
