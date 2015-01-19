
// function myFunction() {
//     var x = document.getElementById("myBtn").value;
//     // document.getElementById("return").innerHTML = x;
//     console.log(x);
// }


function runIt(){
	    var paragraphNum = document.getElementById("myBtn").value;
		console.log(paragraphNum);
	var sentenceGroup = '<br><br>';	
	var sentLength = function(){
	    return(Math.floor(Math.random() * 10));
	}
	var paragraph = '';
	var sentence;
	var sentenceCapped;
	var paragraphLength = Math.floor(Math.random() * 10);
	var printer = document.getElementById("output");
	// var paragraphNum = document.getElementById("form").value;
	// 	document.getElementById("return").innerHTML = paragraphNum;

		// console.log(paragraphNum);
	for(counter = 0; counter < paragraphNum; counter++){
		for(x = 0; x < paragraphLength; x++){
			var wordsArray = ["java", "javascript", "hot damn", "karaoke", "let's get that set up", "be committed, but not attached", "slackjaw", "party on some code", "for our next trick...", "shit", "fuck", "let's hack this", "rails", "wdi", "infinite loop", "alert", "submlime", "damn", "beeeeeeeer", "meeeeaat", "this floats my biscuit", "this is the best day of my life", "this is the worst day of my life", "woah", "first person who saw an elephant was pretty perplexed", "that's janked", "all dressed up and nowhere to go", "I want you to pick your poison"];
			for(i = 0; i < wordsArray.length; i++){
				var randomNum = Math.floor(Math.random() * wordsArray.length);
				wordsArray[randomNum] = wordsArray[i];
				sentence = wordsArray.slice(0, sentLength()).toString().replace(/,/g, ' ') + '. ';
				sentenceCapped = sentence.charAt(0).toUpperCase() + sentence.slice(1);
			}
			sentenceGroup+=sentenceCapped;
		}  
		console.log(sentenceGroup);
		paragraph+= ("<p>" + sentenceGroup + "</p>");
	}
	printer.innerHTML = paragraph;
	// printer.innerHTML = paragraph;
}

runIt

// =======================================
// More logic on how to build paragraphs:

// Run the paragraph generator loop for the number of paragraphs the user wants. 
// Add a <br> to the end of each paragraph. 
// =======================================