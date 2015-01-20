function runIt(){
	//Gets user input for number of paragraphs. 
	//After, a bunch of variables are declared so they will be global variables. 
	    var paragraphNum = document.getElementById("myBtn").value;
		console.log(paragraphNum);
	var sentenceGroup = '<br>';	
	// var sentLength = function(){
	//     return(Math.floor(Math.random() * 10));
	// }
	var sentLength = Math.floor((Math.random() * (10-5)) + 5);
	var paragraph = '';
	var sentence;
	var sentenceCapped;
	var paragraphLength = Math.floor((Math.random() * (10-5)) + 5);
	var printer = document.getElementById("output");
	//see logic below for what's going on here:
	for(var counter = 0; counter < paragraphNum; counter++){
		for(var x = 0; x < paragraphLength; x++){
			var wordsArray = ["java", "javascript", "computer", "HTML", "may I invite you to", "jobs", "GA", "happy hour", "chrome", "firefox", "variable", "mac", "unix", "tab", "function", "boring", "redefine", "console.log", "comment", "inspect element", "engineering", "networks", "Internet", "data", "file", "hacking", "science", "software", "web browser", "website", "doctype", "angularJS", "strong drink", "hot damn", "karaoke", "let's get that set up", "be committed, but not attached", "slackjaw", "party on some code", "for our next trick...", "shit", "fuck", "let's hack this", "rails", "wdi", "infinite loop", "alert", "submlime", "damn", "beeeeeeeer", "meeeeaat", "this floats my biscuit", "this is the best day of my life", "this is the worst day of my life", "woah", "first person who saw an elephant was pretty perplexed", "that's janked", "all dressed up and nowhere to go", "I want you to pick your poison"];
			for(var i = 0; i < wordsArray.length; i++){
				var randomNum = Math.floor(Math.random() * wordsArray.length);
				wordsArray[randomNum] = wordsArray[i];
				sentence = wordsArray.slice(0, sentLength).toString().replace(/,/g, ' ') + '. ';
				sentenceCapped = sentence.charAt(0).toUpperCase() + sentence.slice(1);
			}
			sentenceGroup+=sentenceCapped;
		}  
		console.log(sentenceGroup);
		paragraph+= ("<p>" + sentenceGroup + "</p>");
		sentenceGroup = '<br>';
	}
	printer.innerHTML = paragraph;
}

runIt();

//Working from the inner-most loops:
	// (1) The array of words is randomized
	// (2) A random length of words is taken from the randomized array 
	// 	and put into a group (a sentence).
	// (3) The word group (sentence) is changed to a string, punctuation is added.
	// (4) Groups of word groups are concatenated into sentence groups.
	// (5) Groups of sentence groups are added as paragraphs.
	// (6) The sentenceGroup variable is emptied 
	// 	so it will not concatenate over time (thereby 
	// 	producing exponentially longer and longer paragraphs).

//Giving credit where it's due:
//I started by following Justin Krestler's blog post here:
//     http://meowist.github.io/blog/2013/03/10/how-to-create-a-simple-lorem-ipsum-generator-with-javascript-and-jquery/
//However, I had trouble following that (and didn't know jQuery) so I wrote it out on my own. In the end, my solution was very similar to his. 

//This was created after one week of learning programming.
//After learning more about global and local scope, 
//I realize this is not the most well-written solution to
//writing an ipsum generator. 
