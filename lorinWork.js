function runIt(){
	console.log("function activated");
	//start event listener for the form
	

	//Gets paragraph numbers. The HTML limits it to two digits.
	var paragraphs = document.getElementById("paragraphs");
	console.log(paragraphs);

	//array of words:
	var wordsArray = ["java", "javascript", "Hot Damn!", "karaoke", "let's get that set up", "Be Committed, but not attached.", "Slackjaw", "party on some code!", "For our next trick...", "shit", "fuck", "let's hack this", "rails", "wdi", "infinite loop", "alert", "submlime", "damn", "beeeeeeeer", "meeeeaat", "This floats my biscuit", "This is the best day of my life", "This is the worst day of my life", "Woah", "First person who saw an elephant was pretty perplexed", "That's janked!", "All dressed up and nowhere to go", "I want you to pick your poison"];

		// variation in the number of sentences in each paragraph:
	var sentence_num = Math.floor(Math.random()+6);

		//need a function to randomize the content of the words array: 
	var index = 0;
	function LorinIpsum(wordsArray) {
		while(index < wordsArray.length){
			var randomNum = Math.floor(Math.random() * wordsArray.length);
			wordsArray[randomNum] = wordsArray[index];
			index++;
			// Is returning wordsArray necessary? I think not. 
			// return wordsArray;
			}
		}
		console.log(wordsArray);
		//Build a paragraph and a sentence:
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
			return(sentence.charAt(0).toUpperCase() + string.slice(1));
		}
		sentenceGroup += sentenceCapped();
	}
console.log(sentenceGroup);

}