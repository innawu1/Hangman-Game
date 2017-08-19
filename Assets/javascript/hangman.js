var hangmanGame = { hangmanWords:["THOR".split(""),
								  "IRONMAN".split(""),
								  "HULK".split(""),
								  "DEADPOOL".split(""),
								  "DAREDEVIL".split(""),
								  "MAGNETO".split(""),
								  "PSYLOCKE".split(""),
								  "COLOSSUS".split(""),
								  "GAMBIT".split(""),
								  "SPIDERMAN".split(""),
								  "VISION".split(""),
								  "NIGHTCRAWLER".split(""),
								  "ELEKTRA".split(""),
								  "STARLORD".split(""),
								  "STORM".split("")],
				  	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
				  	userInput: "",
				  	userInputIndex: "",
				  	letters: "",
				  	word: "",
				  	random: "",
				  	hangman: document.getElementById("hangman"),
				  	winImg: document.getElementById("winImg"),
				  	tries: document.getElementById("tries"),
				  	wins: document.getElementById("wins"),
				  	losses: document.getElementById("losses"),
				  	wrongLetters: document.getElementById("wrongLetters"),
				  	newTextNode: "",
				  	correctGuess: true,
				  	maxTries: 8,
				  	incorrectLetterCounter: 0,
				  	winCounter: 0,
				  	lossCounter: 0,
				  	setRandom: function(){
				  			   return Math.floor((Math.random()*(this.hangmanWords.length-1)));
				  				},
				  	

				  	wordToGuess: function(){
				  				return this.hangmanWords[this.random];
				  				},

				  	wordToGuessLetters: function(){
				  				return new Array(this.wordToGuess().length);
				  				},


				  	letterBlanks: function(){
				  		//Replace each letter in the setWordLetter array with an _
				  		this.letters = this.wordToGuessLetters();
				  		for(i = 0; i < this.letters.length; i++){
				  			this.letters[i] = "_ ";
				  		}
				  		return this.letters;
				  	},

				  	printBlanks: function(){
				  		//Print blanks from setLetterBlanks at location of hangman ID
				  			this.letters = this.letterBlanks();
				  			for(i = 0; i < this.letters.length; i++){
				  				newTextNode = document.createTextNode(this.letters[i]);
				  				this.hangman.appendChild(newTextNode);
				  			}				  		
				  	},

				  	letterCheck: function(){
				  			this.correctGuess = false;
							for(i = 0; i < this.word.length; i++){
				  				if(this.word[i] === this.userInput){
				  					this.letters[i] = this.userInput + " ";	
				  					//Use .join to all elements of an array to a string. In this
				  					// case, .join was used to join the elements of letter to a string
				  					hangman.innerHTML = this.letters.join("");
				  					this.correctGuess = true;
				  				}    
				  				
				  			}
				  			
				  			if(!this.correctGuess){
				  				this.newTextNode = document.createTextNode(" " + this.userInput);
				  				this.wrongLetters.appendChild(this.newTextNode);
				  				this.incorrectLetterCounter++;
				  				
				  			}
				  				this.remainingAttepmts();
				  				this.userWin();
				  				this.userLose();
					    
				  	},

				  	remainingAttepmts: function(){
				  		tries.innerHTML = " " + (this.maxTries - this.incorrectLetterCounter);
				  	},

				  	userWin: function(){
				  		this.correctGuess = true;
				  		for(var i=0; i < this.letters.length; i++){
						if(this.letters[i] === "_ "){
							this.correctGuess = false;
				  		}
				  	}

				  		if(this.correctGuess){
				  		alert("You Win! Congratulations!");
				  		this.winCounter++;
				  		wins.innerHTML = this.winCounter;
				  		if(this.word.join("") === "THOR"){
				  			winImg.src = "Assets/images/thor.jpg";
				  		}

				  		else if(this.word.join("") === "IRONMAN"){
				  			winImg.src = "Assets/images/ironman.png";
				  		}

				  		else if(this.word.join("") === "HULK"){
				  			winImg.src = "Assets/images/hulk.jpg";
				  		}

				  		else if(this.word.join("") === "DEADPOOL"){
				  			winImg.src = "Assets/images/deadpool.jpg";
				  		}

				  		else if(this.word.join("") === "DAREDEVIL"){
				  			winImg.src = "Assets/images/daredevil.jpg";
				  		}

				  		else if(this.word.join("") === "MAGNETO"){
				  			winImg.src = "Assets/images/magneto.jpg";
				  		}

				  		else if(this.word.join("") === "PSYLOCKE"){
				  			winImg.src = "Assets/images/psylocke.jpg";
				  		}

				  		else if(this.word.join("") === "COLOSSUS"){
				  			winImg.src = "Assets/images/colossus.jpg";
				  		}

				  		else if(this.word.join("") === "GAMBIT"){
				  			winImg.src = "Assets/images/gambit.jpg";
				  		}

				  		else if(this.word.join("") === "SPIDERMAN"){
				  			winImg.src = "Assets/images/spiderman.png";
				  		}

				  		else if(this.word.join("") === "VISION"){
				  			winImg.src = "Assets/images/vision.png";
				  		}

				  		else if(this.word.join("") === "NIGHTCRAWLER"){
				  			winImg.src = "Assets/images/Nightcrawler.png";
				  		}
				  		else if(this.word.join("") === "ELEKTRA"){
				  			winImg.src = "Assets/images/elektra.jpg";
				  		}

				  		else if(this.word.join("") === "STARLORD"){
				  			winImg.src = "Assets/images/starlord.png";
				  		}
				  		else if(this.word.join("") === "STORM"){
				  			winImg.src = "Assets/images/storm.jpeg";
				  		}
				  		this.reset();
				  		}
				  	},

				  	userLose: function(){
				  		if(this.incorrectLetterCounter === 8){
				  			alert("Better luck next time!");
				  			this.lossCounter++;
				  			losses.innerHTML = this.lossCounter;
				  			this.reset();
				  		}
				  	},

				  	inputValidation: function(){
				  		//Check that the key entered is one between A and Z
				  		this.userInput = event.key.toUpperCase();
				  		this.userInputIndex = this.alphabet.indexOf(this.userInput);
				  		if(this.userInputIndex == -1){
				  			alert("You have entered an invalid value. Please enter a letter between A and Z");
				  		} else {
				  			this.letterCheck();
				  		}
				  	},

				  	//Initialize the game
				  	initialize: function(){
				  		alert("This is the Hangman Game! Press Any Key to Continue");
				  		this.random = this.setRandom();
				  		this.word = this.wordToGuess();
				  		this.letters = this.letterBlanks();
				  		this.printBlanks();
				  		this.remainingAttepmts();
			
				  	},
				  	//Reset stats
				  	reset: function(){
				  		this.hangman.innerHTML="";
				  		this.wrongLetters.innerHTML="";
				  		this.tries.innerHTML = " " + this.maxTries;
				  		this.incorrectLetterCounter = 0;
				  		this.random = this.setRandom();
				  		this.word = this.wordToGuess();
				  		this.letters = this.letterBlanks();
						this.printBlanks();
				  	},
				  		
				  };
				  	
				  	


	hangmanGame.initialize();
	document.onkeyup = function(event){
	hangmanGame.inputValidation();

	};
