import React, { Component } from 'react';

export class Roll extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	//rolls dice on load
	componentWillMount() {
		this.props.onClick();
	}

	//rolls dice on click
	handleClick() {
		this.props.onClick();
	}

	//prevent highlight
	handleSelect() {
		return false;
	}

	render() {
		return(
			<div className='roll-button' onTouchStart="" onClick={this.handleClick} onSelectStart={this.handleSelect} alt="">
				Roll
			</div>
		)
	}

}