import React, { Component } from 'react';

export class Roll extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	//rolls dice on load
	componentWillMount() {
		this.props.onClick();
	}

	//rolls dice on click
	handleClick() {
		this.props.onClick();
	}

	render() {
		return(
			<div className='roll-button' onTouchStart="" onClick={this.handleClick}>
				Roll
			</div>
		)
	}

}