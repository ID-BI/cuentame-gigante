import React from 'react';
import Logo from '../logo.png';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import App from '../App';
// import Inspire from '../Inspire';
// import Lions from '../Lions';
// import Marketers from '../Marketers';

const Div = styled.div`
	position: fixed;
	z-index: 10;
	overflow: hidden;
	width: 100%;
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
// const Main = () => (
// 	<main>
// 		<Switch>
// <Route exact path="/" component={App} />
// <Route exact path="/inspire" component={Inspire} />
// <Route exact path="/lions" component={Lions} />
// <Route exact path="/marketers" component={Marketers} />
// 		</Switch>
// 	</main>
// );
const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Marketers = () => <h2>Marketers</h2>;

const Header = () => {
	return (
		<Router>
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
								<img src={Logo} alt="" />
							</Link>
						</li>
						<li>
							<Link to="/lions">
								<img src={Logo} alt="" />
							</Link>
						</li>
						<li>
							<Link to="/marketers">
								<img src={Logo} alt="" />
							</Link>
						</li>
					</Ul>
				</HeaderTop>
				<Route path="/" exact component={Index} />
				<Route path="/inspire/" component={About} />
				<Route path="/lions/" component={Users} />
				<Route path="/marketers/" component={Marketers} />
			</Div>
		</Router>
	);
};

export default Header;
