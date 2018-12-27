import React, { Component } from 'react';
import {Roll} from './Roll';
import {RollResult} from './RollResult';
import {Preload} from './Preload';

export class Body extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      	diceOne: 	["http://www.fromgaming.com/images/dice/cube1/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube1/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube1/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube1/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube1/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube1/side6.png"],

	      	diceTwo: 	["http://www.fromgaming.com/images/dice/cube2/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube2/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube2/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube2/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube2/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube2/side6.png"],

	      	diceThree: 	["http://www.fromgaming.com/images/dice/cube3/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube3/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube3/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube3/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube3/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube3/side6.png"],

	      	diceFour: 	["http://www.fromgaming.com/images/dice/cube4/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube4/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube4/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube4/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube4/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube4/side6.png"],

	      	diceFive: 	["http://www.fromgaming.com/images/dice/cube5/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube5/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube5/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube5/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube5/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube5/side6.png"],

	      	diceSix: 	["http://www.fromgaming.com/images/dice/cube6/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube6/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube6/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube6/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube6/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube6/side6.png"],

	      	diceSeven: 	["http://www.fromgaming.com/images/dice/cube7/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube7/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube7/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube7/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube7/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube7/side6.png"],

	      	diceEight: 	["http://www.fromgaming.com/images/dice/cube8/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube8/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube8/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube8/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube8/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube8/side6.png"],

	      	diceNine: 	["http://www.fromgaming.com/images/dice/cube9/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube9/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube9/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube9/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube9/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube9/side6.png"],
			rollOne: 	[],
			rollTwo: 	[],
			rollThree: 	[],
			rollFour: 	[], 
	    };
	    
	   this.chooseDice = this.chooseDice.bind(this);
	   this.rollDice = this.rollDice.bind(this);
	   this.assignPng = this.assignPng.bind(this);
	}

	//preload images...don't know if this works
	componentWillMount() {
	    this.state.diceOne.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });

	    this.state.diceTwo.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	    
	    this.state.diceThree.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	    
	    this.state.diceFour.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	    
	    this.state.diceFive.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	    
	    this.state.diceSix.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	    
	    this.state.diceSeven.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	    
	    this.state.diceEight.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	    
	    this.state.diceNine.forEach((picture) => {
	        const img = new Image();
	        img.src = picture.fileName;
	    });
	}

	chooseDice() {
		let dice1=[0];
		let dice2=[0];
		let dice3=[0];

		//rolls for 3 random dice, no two the same
		while (dice1[0]===dice2[0] || dice2[0]===dice3[0] || dice3[0]===dice1[0]) {
			console.log("i was rolled");
			dice1[0] = Math.floor((Math.random()*9)+1);
			dice2[0] = Math.floor((Math.random()*9)+1);
			dice3[0] = Math.floor((Math.random()*9)+1);
		}

		console.log(dice1,dice2,dice3);
		this.rollDice(dice1, dice2, dice3);		
	}

	rollDice(dice1, dice2, dice3) {
		dice1.push(Math.floor((Math.random()*6)+1));
		dice2.push(Math.floor((Math.random()*6)+1));
		dice3.push(Math.floor((Math.random()*6)+1));

		console.log(dice1,dice2,dice3);
		this.assignPng(dice1, dice2, dice3);
	}

	assignPng(dice1,dice2,dice3) {
		let keys = ["diceOne","diceTwo","diceThree","diceFour","diceFive","diceSix","diceSeven","diceEight","diceNine"];
		
		//gets the url for each relevant dice
		let png1 = this.state[keys[dice1[0]-1]][dice1[1]-1];
		let png2 = this.state[keys[dice2[0]-1]][dice2[1]-1];
		let png3 = this.state[keys[dice3[0]-1]][dice3[1]-1];		

		this.setState({
			rollOne: [png1, png2, png3]
		});
	}


	render() {
		let allImages=this.state.diceOne.concat(this.state.diceTwo, this.state.diceThree, this.state.diceFour, this.state.diceFive, 
			this.state.diceSix, this.state.diceSeven, this.state.diceEight, this.state.diceNine);

		return (
			<div>
				<Preload 
					images={allImages}/>
				<Roll 
					onClick={this.chooseDice}/>
				<RollResult
					rolls={this.state.rollOne}/>
			</div>
		)
	}
}