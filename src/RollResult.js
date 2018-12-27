import React, { Component } from 'react';

export class RollResult extends Component {

	render() {

		let imageArr=[];

		//makes an img for each dice
		if (this.props.rolls.length) {
			for (var i=0; i<3; i++) {
				imageArr.push(<img src={this.props.rolls[i]} key={"roll"+i}/>);
			}
		}

		return(
			<div>
				{imageArr}
			</div>
		)
	}

}