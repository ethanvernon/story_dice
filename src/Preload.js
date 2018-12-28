import React, { Component } from 'react';

export class Preload extends Component {
	constructor(props) {
		super(props);
		this.handleLoad = this.handleLoad.bind(this);
	}

	componentDidMount() {
		console.log(document.getElementById("image50").complete);
	}

	handleLoad() {
		this.props.handleLoad();
	}

	renderImage(imageUrl, i) {
	    return (
	      	<img
		        src={imageUrl}
		        alt={"side"+i}
		        onLoad={this.handleLoad}
		        id={"image"+i} 
		        key={"image"+i}/>
	    );
  }

	render() {

		return(
			<span className='hidden images' id='image-container'>
    			{this.props.images.map((imageUrl, i) => this.renderImage(imageUrl, i))}
    		</span>
		);
	}
}