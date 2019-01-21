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

	      	diceTen: 	["http://www.fromgaming.com/images/dice/cube10/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube10/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube10/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube10/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube10/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube10/side6.png"],

	      	diceEleven: ["http://www.fromgaming.com/images/dice/cube11/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube11/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube11/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube11/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube11/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube11/side6.png"],

	      	diceTwelve: 	["http://www.fromgaming.com/images/dice/cube12/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube12/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube12/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube12/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube12/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube12/side6.png"],

	      	diceThirteen: 	["http://www.fromgaming.com/images/dice/cube13/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube13/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube13/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube13/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube13/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube13/side6.png"],

	      	diceFourteen: 	["http://www.fromgaming.com/images/dice/cube14/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube14/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube14/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube14/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube14/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube14/side6.png"],

	      	diceFifteen: 	["http://www.fromgaming.com/images/dice/cube15/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube15/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube15/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube15/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube15/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube15/side6.png"],

	      	diceSixteen: 	["http://www.fromgaming.com/images/dice/cube16/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube16/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube16/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube16/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube16/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube16/side6.png"],

	      	diceSeventeen: 	["http://www.fromgaming.com/images/dice/cube17/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube17/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube17/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube17/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube17/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube17/side6.png"],

	      	diceEighteen: 	["http://www.fromgaming.com/images/dice/cube18/side1.png", 
				      	"http://www.fromgaming.com/images/dice/cube18/side2.png", 
				      	"http://www.fromgaming.com/images/dice/cube18/side3.png", 
				      	"http://www.fromgaming.com/images/dice/cube18/side4.png", 
				      	"http://www.fromgaming.com/images/dice/cube18/side5.png", 
				      	"http://www.fromgaming.com/images/dice/cube18/side6.png"],
			roll: 		[],
			imagesLoading: true,
			count: 0
	    };
	    
	   this.chooseDice = this.chooseDice.bind(this);
	   this.rollDice = this.rollDice.bind(this);
	   this.assignPng = this.assignPng.bind(this);
	   this.handleLoadChange = this.handleLoadChange.bind(this);
	   this.imagesLoaded = this.imagesLoaded.bind(this);
	}	

	//Chooses 3 of the 9 die
	chooseDice() {
		let dice1=[0];
		let dice2=[0];
		let dice3=[0];

		//rolls for 3 random dice, no two the same
		while (dice1[0]===dice2[0] || dice2[0]===dice3[0] || dice3[0]===dice1[0]) {
			console.log("i was rolled");
			dice1[0] = Math.floor((Math.random()*18)+1);
			dice2[0] = Math.floor((Math.random()*18)+1);
			dice3[0] = Math.floor((Math.random()*18)+1);
		}

		console.log(dice1,dice2,dice3);
		this.rollDice(dice1, dice2, dice3);		
	}

	//rolls each die
	rollDice(dice1, dice2, dice3) {
		dice1.push(Math.floor((Math.random()*6)+1));
		dice2.push(Math.floor((Math.random()*6)+1));
		dice3.push(Math.floor((Math.random()*6)+1));

		console.log(dice1,dice2,dice3);
		this.assignPng(dice1, dice2, dice3);
	}

	//makes array with .png for each roll on relevant dice
	assignPng(dice1,dice2,dice3) {
		let keys = ["diceOne","diceTwo","diceThree","diceFour","diceFive","diceSix","diceSeven","diceEight","diceNine",
			"diceTen", "diceEleven","diceTwelve","diceThirteen","diceFourteen","diceFifteen","diceSixteen","diceSeventeen","diceEighteen"];
		
		//gets the url for each relevant dice
		let png1 = this.state[keys[dice1[0]-1]][dice1[1]-1];
		let png2 = this.state[keys[dice2[0]-1]][dice2[1]-1];
		let png3 = this.state[keys[dice3[0]-1]][dice3[1]-1];		

		this.setState({
			roll: [png1, png2, png3]
		});
	}

	//shows loading dialogue when images are still loading
	renderSpinner() {
		if (!this.state.imagesLoading) {
			//render nothing when images are finished
			return null;
		}
		return (
			<div>
				<p>Dice are loading ({this.state.count}/108)...</p>
			</div>
		);
	}

	//responds to each loaded image
	//sets loading to false if imagesLoaded() returns true
	handleLoadChange() {
		let count = this.state.count;
		count++;
		this.setState({
			imagesLoading: !this.imagesLoaded(document.getElementById("image-container")),
			count: count
		});
	}

	//search .image-container children for complete property
	//returns true when all img element children return true for .complete
	imagesLoaded(parentNode) {
		let imgElements = parentNode.querySelectorAll("img");
		
		for (let img of imgElements) {
			if (!img.complete) {
				return false
			}
		}		

		return true;
	}



	render() {
		let allImages=this.state.diceOne.concat(this.state.diceTwo, this.state.diceThree, this.state.diceFour, this.state.diceFive, 
			this.state.diceSix, this.state.diceSeven, this.state.diceEight, this.state.diceNine, this.state.diceTen, this.state.diceEleven,
			this.state.diceTwelve,this.state.diceThirteen,this.state.diceFourteen,this.state.diceFifteen,this.state.diceSixteen,this.state.diceSeventeen,this.state.diceEighteen);

		return (
			<div>
				<Preload 
					images={allImages}
					handleLoad={this.handleLoadChange}/>

				{this.renderSpinner()}

				{!this.state.imagesLoading &&
					<div>
						<Roll 
							onClick={this.chooseDice}/>
						<RollResult
							rolls={this.state.roll}/>
					</div>
				}
				
			</div>
		)
	}
}