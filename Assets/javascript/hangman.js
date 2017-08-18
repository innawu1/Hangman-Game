var hangmanGame = { hangmanWords:["THOR".split(""),
								  "IRONMAN".split(""),
								  "HULK".split("")],
				  	alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
				  	userInput: "",
				  	userInputIndex: "",
				  	letters: "",
				  	word: "",
				  	hangman: document.getElementById("hangman"),
				  	tries: document.getElementById("tries"),
				  	newTextNode: "",
				  	correctGuess: true,
				  	maxTries: 6,
				  	incorrectLetterCounter: 0,
				  	winCounter: 0,
				  	setRandom: function(){
				  			   return Math.floor((Math.random()*(this.hangmanWords.length-1)));
				  				},

				  	setWordToGuess: function(){
				  		return this.hangmanWords[this.setRandom()];
				  	},

				  	setWordLetters: function(){
				  		return new Array(this.setWordToGuess().length);
				  	},

				  	setLetterBlanks: function(){
				  		//Replace each letter in the setWordLetter array with an _
				  		this.letters = this.setWordLetters();
				  		for(i = 0; i < this.letters.length; i++){
				  			this.letters[i] = "_ ";
				  		}
				  		return this.letters;
				  	},

				  	printBlanks: function(){
				  		//Print blanks from setLetterBlanks at location of hangman ID
				  			this.letters = this.setLetterBlanks();
				  			for(i = 0; i < this.letters.length; i++){
				  				newTextNode = document.createTextNode(this.letters[i]);
				  				this.hangman.appendChild(newTextNode);
				  			}				  		
				  	},

				  	letterCheck: function(){
				  		this.letters = this.setLetterBlanks();
				  		this.userInput = event.key.toUpperCase();
							for(i = 0; i < this.word.length; i++){
				  				if(this.word[i] === this.userInput){
				  					this.letters[i] = this.userInput + " ";
				  					console.log(this.letters);
				  				}
				  				
				  			}
				  			
				  			if(!this.correctGuess){
				  				this.newTextNode = createTextNode(" " + this.userInput);
				  				tried.appendChild(this.newTextNode);
				  			}
								    
				  	},

				  	inputValidation: function(){
				  		//Compare the letter entered by the user to the letters in the chosen word
				  		//If userInput = a letter in alphabet array
				  			//compare userInput to letter in chosen word
				  			//replace the blank with the userInput
				  		this.userInput = event.key.toUpperCase();
				  		this.userInputIndex = this.alphabet.indexOf(this.userInput);
				  		if(this.userInputIndex == -1){
				  			alert("You have entered an invalid value. Please enter a letter between A and Z");
				  		} else {
				  			this.letterCheck();
				  		}
				  	},

				  	initialize: function(){
				  		alert("This is the Hangman Game! Press Any Key to Continue");
				  		this.printBlanks();
				  	},

				  	reset: function(){
				  		this.hangman.innerHTML="";
						this.printBlanks();
				  	},
				  		
				  };
				  	
				  	


hangmanGame.initialize();
document.onkeyup = function(event){
	hangmanGame.inputValidation();

};
