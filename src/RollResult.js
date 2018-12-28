import React, { Component } from 'react';

export class RollResult extends Component {
	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
	}

	//prevent highlight
	handleSelect() {
		return false;
	}

	render() {

		let imageArr=[];

		//makes an img for each dice
		if (this.props.rolls.length) {
			for (var i=0; i<3; i++) {
				imageArr.push(<img className="dice" src={this.props.rolls[i]} key={"roll"+i} onSelectStart={this.handleSelect} style={{pointerEvents:'none'}} alt=""/>);
			}
		}

		return(
			<div>
				{imageArr}
			</div>
		)
	}

}