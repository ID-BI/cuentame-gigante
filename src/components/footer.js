import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer onClick={this.props.buttonClicked}>
				<div className="inner-footer">
					<button className={this.props.results ? 'load-more' : 'load-more disabled'}>
						{this.props.results ? 'Cargar Más' : 'No hay resultados'}
					</button>
				</div>
			</footer>
		);
	}
}
export default Footer;
