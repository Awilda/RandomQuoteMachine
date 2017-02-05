var quote = {
  "Oprah": "I think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
  "Buddha": "Who you are is what you have been. Who you will be is what you do now.",
  "Jim Rohn": "If you really want to do something, you'll find a way; If you don't, you'll find an excuse.",
  "Eckhart Tolle": "The primary cause of unhappiness is never the situation but the thoughts about it.",
  "bhagavad gita": "The secret of human freedom is to act well, without attachement to the result.",
  "Aretha Franklin": "Keep looking for your voice, you will find it.",
  "TD Jakes": "If you can't figure out your purpose, figure out your passion. For your passion will lead you right into your purpose.",
  "Robert Ingersoll": "We rise by lifting others.",
  "Nancy Levin": "Honor the space between no longer and not yet.",
  "Elisabeth Elliot": "Don't dig up in doubt what you planted in faith."
};

var finalQuote;
var authName;
var indexOfQuote;

var quoteMachine = function() {
document.getElementById("newQuote").addEventListener("click", function(){
  
var newArr = Object.keys(quote);
var randomize = function() {
var randomNum = 0;
var result = "";
for (var i = 0; i < newArr.length; i++) {
		randomNum = Math.floor(Math.random() * (newArr.length - 0) + 0); // 9
			result = quote[newArr[randomNum]];
	}
	return result;
};

finalQuote = randomize(newArr);
var quoteArr = [];
  
Object.getOwnPropertyNames(quote).forEach(function(val, idx, array) {
  quoteArr.push(quote[val]);
});
  
indexOfQuote = quoteArr.indexOf(finalQuote);

authName = Object.getOwnPropertyNames(quote)[indexOfQuote];

document.getElementById("quote").innerHTML = finalQuote;
  
document.getElementById("quoteBy").innerHTML = authName;
});

$("#tweetMe").on("click", function() {
  window.open("https://twitter.com/intent/tweet?text="+finalQuote + " " + authName);
});

};