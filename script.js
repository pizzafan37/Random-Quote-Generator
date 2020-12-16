$(document).ready(function() {
    
let quotes = ["Dream Bigger", "There's bravery in being soft", "If it doesn't challenge you, it won't change you", "You get what you give", "If you lose someone but found yourself, you won", "Your best teacher is your last mistake", "Success is a journey, not a destination", "You only fail when you stop trying"];

$("button").click(function() {
var randomQuote = Math.floor(Math.random() * quotes.length);
	$(".quotes").text(quotes[randomQuote]);
});
	});
