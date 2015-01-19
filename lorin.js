function runIt(){
	console.log("function activated");
	//start event listener for the form
	

	//Gets paragraph numbers. The HTML limits it to two digits.
	//TEMP: I don't have paragraph numbers set up yet. I want "submit" to make one random paragraph of random length first. 
	// var paragraphs = document.getElementById("paragraphs").name;
	// console.log(paragraphs);

	//array of words:
	var wordsArray = ["java", "javascript", "Hot Damn!", "karaoke", "let's get that set up", "Be Committed, but not attached.", "Slackjaw", "party on some code!", "For our next trick...", "shit", "fuck", "let's hack this", "rails", "wdi", "infinite loop", "alert", "submlime", "damn", "beeeeeeeer", "meeeeaat", "This floats my biscuit", "This is the best day of my life", "This is the worst day of my life", "Woah", "First person who saw an elephant was pretty perplexed", "That's janked!", "All dressed up and nowhere to go", "I want you to pick your poison"];

	// variation in the number of sentences in each paragraph:
	// Also unnecessary I think.
	// var sentence_num = Math.floor(Math.random()+6);

	//need a function to randomize the content of the words array: 
	var index = 0;
	function LorinIpsum(wordsArray) {
		while(index < wordsArray.length){
			var randomNum = Math.floor(Math.random() * wordsArray.length);
			wordsArray[randomNum] = wordsArray[index];
			index++;
			// Is returning wordsArray necessary? I think not. 
			// console.log(wordsArray);
			}
			console.log(wordsArray);
		}
		//Define a bunch of variables to make them global:
	var paragraphLength = Math.floor(Math.random() * 10);
	var sentenceLength = Math.floor(Math.random() * 10);
	var randWord = LorinIpsum(wordsArray);
	var sentLength = function(){
		return(Math.floor(Math.random() * 10));
	}

	for(var counter = 0; counter < paragraphLength; counter++){
		var sentenceGroup = '';
		var sentence = wordsArray.slice(0, sentLength()).toString().replace(/,/g, ' ') + '. ';
		var sentenceCapped = function() {
			var capped = return(sentence.charAt(0).toUpperCase() + string.slice(1));
		}
		sentenceGroup += capped;
	}
console.log(sentenceGroup);
}


===============================================
A little more on the logic side: I need a loop that does the following: 

Randomizes the array. 
builds a sentence. 
Appends that sentence to the end of the paragraph. 
Repeats paragrahLength times. 

	Steps needed:
	1. array is already declared
	2. array is randomized using code above. array is redefined in the random order. 
	3. code runs to build a sentence. See sentence variable.
	4. append that sentence to your sentenceGroup. 
	5. repeat.
for(i = 0; i < paragraphLength; i++){

}
===============================================
//Here is some partially working code:
function runIt(){
var sentenceGroup = '';
var sentLength = function(){
    return(Math.floor(Math.random() * 10));
}
var sentence;
var sentenceCapped;
var paragraphLength = 8;

for(x = 0; x < paragraphLength; x++){
  var wordsArray = ["java", "javascript", "Hot Damn!", "karaoke", "let's get that set up", "Be Committed, but not attached.", "Slackjaw", "party on some code!", "For our next trick...", "shit", "fuck", "let's hack this", "rails", "wdi", "infinite loop", "alert", "submlime", "damn", "beeeeeeeer", "meeeeaat", "This floats my biscuit", "This is the best day of my life", "This is the worst day of my life", "Woah", "First person who saw an elephant was pretty perplexed", "That's janked!", "All dressed up and nowhere to go", "I want you to pick your poison"];
  for(i = 0; i < wordsArray.length; i++){
    var randomNum = Math.floor(Math.random() * wordsArray.length);
    wordsArray[randomNum] = wordsArray[i];
  }
  sentence = wordsArray.slice(0, sentLength()).toString().replace(/,/g, ' ') + '. ';
  sentenceCapped = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  sentenceGroup+=sentenceCapped;
}  
}
===============================================
// //Try #2 to build paragraphs. 
// //Logic:
// Start out by picking somewhere between 1 and 10 random words from the array.
// that is var sentenceLength for the length. 
// I will do a for loop that runs "sentenceLength" times:
// EDIT: Not needed. My var sentence creates a sentence of random length.
// //This for loop might be unnecessary. I could alter it for Paragraph length. 
// for(var counter = 0; counter < sentenceLength; counter++) {
// 	//this will build a sentence from the first "sentenceLength" numbers of the array.
// 	//Ok. The following gives me a sentence (sans caps).
// 	//If I put this in a loop to run paragraphLength times and concat the returned results,
// 	//it will give me a set of sentences, i. e. a paragraph. 
// 	var sentence = wordsArray.slice(0, sentLength()).toString().replace(/,/g, ' ') + '. ';
// 	var sentenceCapped = function() {
// 		return(sentence.charAt(0).toUpperCase() + string.slice(1));
// 	}
// } 
// //To build a paragraph, I want to concat the returned results of sentenceCapped for paragraphLength times. 
// //It should look something like this:
// for(var counter = 0; counter < paragraphLength; counter++){
// 	var sentenceGroup = '';
// 	var sentence = wordsArray.slice(0, sentLength()).toString().replace(/,/g, ' ') + '. ';
// 	var sentenceCapped = function() {
// 		return(sentence.charAt(0).toUpperCase() + string.slice(1));
// 	}
// 	sentenceGroup += sentenceCapped();
// }


// make these words into a string rather than an array:
// var sentence = randWord

// //End Try #2 at paragraph building. 


// 		//Paragraphs are groups of sentences.
// 		//Build paragraphs from sentence groups. 
// 		//Build sentence groups from sentences. 
// 		//Build sentences from words(randWord, see above). Code below:
//  	for(var i = 0; i < paragraph_num; i++){
//  		var sentence_group = '';
//  		for(var j = 0; j < sentence_num; j++) {
//  			for(var k = 0; k < wordsArray.length; k++) {
//  				var sentence = randWord.toString().replace(/,/g, ' ') + '. ';
//  				function caps(string) {
//  					return string.charAt(0).toUpperCase() + string.slice(1);
//  				}
//  			var sentence_capped = caps(sentence);
// 			sentence_group += sentence_capped;
//  			}
				
//  		}
//  			paragraph_num+='<p>' + sentence_group + '</p>';
//  		var printer = document.getElementByClassName("outputClass");
//  		printer.innerHTML(paragraph_num);
//  	}
//  console.log(wordsArray);
// end function
// };
// runIt();

// // To randomly sort array:
// // index = 0
// // run through array: 0 through end, taking random item from 
// // array and putting it at a random point, determined by math.floor(math.random) 
	
// // index++ to go through each item. 

// // //Pseudocode:

// // var random = Math.floor(Math.random() * words.length)
// // words[random] = words[index]

// // //

// // ====================================

// // To make it print a paragraph: 

// // *. Generate string of n length from random words in array.  
// // *. Capitalize first word in a string. 
// // *. 