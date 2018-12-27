import React, { Component } from 'react';

export class Preload extends Component {

	render() {
		let preloads=[];

		//makes an preload img for each dice
		
		for (var i=0; i<this.props.images.length; i++) {
			preloads.push(<link rel="preload" href={this.props.images[i]} key={"image"+i} as="image"/>);
		}

		return(
			<span>
    			{preloads}
    		</span>
		);
	}
}