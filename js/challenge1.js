

function daysInYears()
{
	var birthYear=prompt("What is your birth year?");
	//console.log((2020-birthYear)*365);
	if(typeof(birthYear)==='string' && birthYear.length!==0)
	{
		var yearDays=(2020-birthYear)*365;

		/*
			Now we create a dom. Basically we create a 
			html element.
		*/
		var h1Element=document.createElement('h1');

		/*
			Now we create the text answer that is supposed to
			be displayed on the page. For this we use the 
			document.createTextNode() which creates a text
			of type string that can be appended to any html
			tag which displays the string on the page.
		*/
		var textAnswer=document.createTextNode('Your age '+ yearDays +' in days');

		/*
			We can also set the attributes of the element. For
			this we use element.setAttributes() method.
		*/
		h1Element.setAttribute('id', 'ageInDays');

		/*
			Now we append the textAnswer to the element in the h1 
			html tag. For this we use the element.appendChild() where
			element could be any html tag created using DOM.
		*/
		h1Element.appendChild(textAnswer);

		/*
			Now we get the div where we want to show the put the h1
			tag. This can be done using the document.getElementId()
			which grabs the element with a specific id passed in as 
			an argument.
		*/
		var divElement=document.getElementById('result');

		/*
			Now we append the h1Element to the divElement using the appendChild().
		*/
		divElement.appendChild(h1Element);
	}
	
}

function reset()
{
	var content=document.getElementById('ageInDays')

	/*
		Removes content only if it exists.
		In other words if it is not undefined or
		null.
	*/
	if(typeof(content)!='undefined' && content!=null)
	{
		content.remove();
	}
}

//<!----------------------------------------------------------------------------------->
/*
 	This is the challenge 2 code.
*/
//<!----------------------------------------------------------------------------------->
function addingImage()
{
	//First create a new image tag
	var imageElement=document.createElement('img');
	var divElement=document.createElement('div');

	//Now we set the path of the image to be added
	imageElement.setAttribute('src', 'Images/cat.jpg');

	//Now we add the image to the to the div which we want
	divElement.appendChild(imageElement);

	document.getElementById('images').appendChild(divElement);
}	

//<!----------------------------------------------------------------------------------->
/*
	This is the challenge 3
*/
//<!----------------------------------------------------------------------------------->
function playGame(yourChoice)
{
	var options=['rock', 'paper', 'scissors'];
	var computerChoice=options[Math.floor((Math.random() * options.length) )];
	var playerChoice=yourChoice.id;
	console.log('bot= '+computerChoice, 'player ='+playerChoice);

	/*
		Create a method that will decide the winner
	*/
	var result=gameResult(playerChoice, computerChoice);

	/*
		Now based on the result recieved we change the 
		html elements of the webpage.
	*/
	showResult(playerChoice, computerChoice, result);
}

/*
	This method will decides the result of the game.
	Based on the result an appropiate message is given
	out.
*/
function gameResult(playerChoice, computerChoice)
{
	//The winner result along with message and color
	var winnerResult={
		'message':'You Won',
		'color':'green'
	};

	//The lose result along with message and color
	var loseResult={
		'message':'You lose',
		'color':'red'
	};

	//The lose result along with message and color
	var tieResult={
		'message':'The Game is Tie',
		'color':'yellow'
	};

	//This where the result of the game is decided 
	var result={
		'rock':{'scissors':winnerResult, 'rock':tieResult, 'paper':loseResult},
		'paper':{'rock':winnerResult, 'paper':tieResult, 'scissors':loseResult},
		'scissors':{'paper':winnerResult, 'scissors':tieResult, 'rock':loseResult}
	};

	return result[playerChoice][computerChoice];

}

/*
	This method will show result on the screen 
*/
function showResult(playerChoice, computerChoice, result)
{
	//First create a imageLibrary
	var imageLibrary={
		rock: document.getElementById('rock').src,
		paper: document.getElementById('paper').src,
		scissors: document.getElementById('scissors').src
	}

	//First clear everything on in container.
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	//Now we create a new image tag.
	var playerImage=document.createElement('img');
	var computerImage=document.createElement('img');
	var resultText=document.createElement('h1');

	playerImage.src=imageLibrary[playerChoice];
	computerImage.src=imageLibrary[computerChoice];

	//Adding the box shadow to the images.
	playerImage.style.boxShadow="0px 10px 50px rgba(37, 50, 233, 1)";
	computerImage.style.boxShadow="0px 10px 50px rgba(233, 50, 37)";

	//Setting the size of the images.
	playerImage.style.height='150px';
	playerImage.style.width='150px';
	computerImage.style.height='150px';
	computerImage.style.width='150px';

	//Appending the result text to h1 tag
	/*
		NOTE:-
		When adding some content inside the 
		html tags strings are not allowed.
		Only nodes are allowed. To add string 
		in tags like h1, p we first create 
		text node by using createTextNode('sometext')
	*/
	var message=document.createTextNode(result['message']);
	resultText.appendChild(message);

	//Styling the h1 result tag.
	resultText.style.fontSize='60px'
	resultText.style.color=result['color'];
	resultText.style.padding='30px';


	//Adding the images and the result to the container.
	var container=document.getElementById('flex_conatainer');
	container.appendChild(playerImage);
	container.appendChild(resultText);
	container.appendChild(computerImage);
	
}

//<!----------------------------------------------------------------------------------->
/*
	This is the challenge 4
*/
//<!----------------------------------------------------------------------------------->
const button_color=[];
const totalButtons=document.getElementsByTagName('button');
for(let i=0; i<totalButtons.length; i++)
{
	/*
		We grab each button and get their second class,
		then we push the class into the array. The 
		classList returns DOMTokenList objects from
		which we can select the class.
	*/
	button_color.push(totalButtons[i].classList[1]);
}

/*
	This method will accept select tag as parameter.
*/
function changeColorButton(colorOption)
{
	if(colorOption.value==='red')
	{
		/*
			Call the function that will change the
			color of the buttons to red or change the
			class of the buttons to danger.
		*/ 
		changeButtonsColor('danger');
	}
	else if(colorOption.value==='blue')
	{
		/*
			Call the function that will change the
			color of the buttons to blue or change the
			class of the buttons to primary.
		*/ 
		changeButtonsColor('primary');
	}
	else if(colorOption.value==='green')
	{
		/*
			Call the function that will change the
			color of the buttons to green or change the
			class of the buttons to success.
		*/ 
		changeButtonsColor('success');
	}
	else if(colorOption.value==='random')
	{
		/*
			Calls the function which will set
			the color of the buttons randomly.
		*/
		changeButtonsColorRandom();
	}
	else if(colorOption.value==='reset')
	{
		/*
			Calls the function that will reset
			the button colors.
		*/
		changeButtonsColorDefault();
	}
}

function changeButtonsColor(color)
{
	var className='btn-'+color;
	for(let i=0; i<totalButtons.length; i++)
	{

		//First remove the buttons color
		if(totalButtons[i].classList[1]!=="btn-lg")
		{
			totalButtons[i].classList.remove(totalButtons[i].classList[1]);
		}
		else
		{
			totalButtons[i].classList.remove(totalButtons[i].classList[2]);
		}

		//Then we are going to add the new color to the buttons
		totalButtons[i].classList.add(className);
	}
}

function changeButtonsColorDefault()
{
	for(let i=0; i<totalButtons.length; i++)
	{
		
		if(totalButtons[i].classList[1]!=="btn-lg")
		{
			totalButtons[i].classList.remove(totalButtons[i].classList[1]);
		}
		else
		{
			totalButtons[i].classList.remove(totalButtons[i].classList[2]);
		}
		totalButtons[i].classList.add(button_color[i]);
	}
}

function changeButtonsColorRandom()
{
	var colorOptions=['danger', 'warning', 'primary', 'success', 'info', 'light', 'dark'];
	var className;
	for(let i=0; i<totalButtons.length; i++)
	{
		className='btn-'+colorOptions[Math.floor((Math.random() * colorOptions.length) )];
		if(totalButtons[i].classList[1]!=="btn-lg")
		{
			totalButtons[i].classList.remove(totalButtons[i].classList[1]);
		}
		else
		{
			totalButtons[i].classList.remove(totalButtons[i].classList[2]);
		}
		totalButtons[i].classList.add(className);
	}
}


//<!----------------------------------------------------------------------------------->
/*
	This is the challenge 5 Black Jack
*/
//<!----------------------------------------------------------------------------------->

/*
	This method will generate a random card
	from a pack of 52 cards
*/
function randomCardGeneration()
{
	faceCards=[
		{value:2, points:2},
		{value:3, points:3},
		{value:4, points:4},
		{value:5, points:5},
		{value:6, points:6},
		{value:7, points:7},
		{value:8, points:8},
		{value:9, points:9},
		{value:10, points:10},
		{value:'Q', points:10},
		{value:'J', points:10},
		{value:'K', points:10},
		{value:'A', points:11},
	]
	suits=["D","H","C","S"];

	var card=faceCards[Math.floor((Math.random() * faceCards.length) )];
	var type=suits[Math.floor((Math.random() * suits.length) )];
	return {cardType:card['value']+type, points:card['points']};
}

function cardMovement(whichPlayer)
{
	//Grab a random card.
	var playerCard=randomCardGeneration();

	//Get display area and score board
	var displayArea=document.getElementById('playerCardDisplay');
	var scoreBoard=document.getElementById('playerScore');
	if(whichPlayer==='bot')
	{
		displayArea=document.getElementById('dealerCardDisplay');
		scoreBoard=document.getElementById('dealerScore');
	}
	var curretPoints=parseInt(scoreBoard.textContent);
	scoreBoard.textContent=curretPoints+playerCard['points'];

	//Grab the card image.
	var cardImage=document.createElement('img');

	//Set the attributes for the image.
	cardImage.setAttribute('src', 'Images/cards_png_zip/PNG/'+playerCard['cardType']+'.png');
	cardImage.setAttribute('height','150px');
	cardImage.setAttribute('width','100px');

	//Place the image on the diplay area.
	displayArea.appendChild(cardImage);

	//Adding sound
	document.getElementById('cardSound').play();

	return curretPoints+playerCard['points'];
}

//Game Logic
function gameLogic(whichButton)
{
	let playerScore=document.getElementById('playerScore');
	let dealerScore=document.getElementById('dealerScore');
	let gameStatus=document.getElementById('gameStatus');
	let hitButton=document.getElementById('hit');
	let standButton=document.getElementById('stand');
	let resultArea=document.getElementById('gameStatus');
	let playerScoreField=document.getElementById('playerPoints');
	let dealerScoreField=document.getElementById('dealerPoints');

	let points=0;
	if(whichButton.id==='hit')
	{
		points=cardMovement('player');

		//If the player is burst then stand is automatically called.
		if(points>21)
		{

			//Call the gameLogic() with stand button as parameter
			gameLogic(standButton);
		}

	}

	else if(whichButton.id==='stand')
	{
		let playerPoints=parseInt(playerScore.textContent);

		//If the playerPoints are 
		if(playerPoints>21)
		{
			playerScore.style.color='red';
			playerScore.textContent='BURST';
		}
		//If playerScore is not 0 then you can stand
		if(playerPoints!==0)
		{
			//Disable the hit and the stand button.
			hitButton.disabled=true;
			standButton.disabled=true;
		
			//After the dealer plays we get the game result
			do
			{
				points=cardMovement('bot');

			}while(points<=17);

			//If the dealer bursts
			if(points>21)
			{
				dealerScore.style.color='red';
				dealerScore.textContent='BURST';
			}


			if((playerPoints>21 && points<=21) || (points>playerPoints && points<=21))
			{
				resultArea.style.color='red';
				resultArea.textContent="You Lost";

				let newPoints=parseInt(dealerScoreField.textContent)+1;
				dealerScoreField.textContent=newPoints;

				//Play the losing sound
				document.getElementById('lostSound').play();
			}
			else if((points>21 && playerPoints<=21) || (playerPoints>points && playerPoints<=21))
			{
				resultArea.style.color='green';
				resultArea.textContent="You Won";
				let newPoints=parseInt(playerScoreField.textContent)+1;
				playerScoreField.textContent=newPoints;

				//Play the winning sound
				document.getElementById('winSound').play();
			}

			else if((points===playerPoints) || (points>21 && playerPoints>21))
			{
				resultArea.style.color='orange';
				resultArea.textContent="Its a push";
			}
		}
		//If the player score is 0 the warning message is shown.
		else
		{
			toast("You need to hit at least one Card");
		}
	}

	else if(whichButton.id==='deal')
	{
		//We deal again by resetting everything
		//We remove the div from the players card area and dealers card area.
		document.getElementById('playerCardDisplay').remove();
		document.getElementById('dealerCardDisplay').remove();

		//Re-enable the hit and stand button
		hitButton.disabled=false;
		standButton.disabled=false;

		//Add a new div to the play and dealer display area
		let playerCardDisplay=document.createElement('div');
		playerCardDisplay.id='playerCardDisplay'
		let dealerCardDisplay=document.createElement('div');
		dealerCardDisplay.id='dealerCardDisplay'
		document.getElementById('playerDiv').appendChild(playerCardDisplay);
		document.getElementById('dealerDiv').appendChild(dealerCardDisplay);

		//Set the points to 0.
		playerScore.textContent=0;
		dealerScore.textContent=0;
		playerScore.style.color='white';
		dealerScore.style.color='white';

		//Change the game status to Lets Play
		gameStatus.style.color='blue';
		gameStatus.textContent='Lets Play';

	}
}
